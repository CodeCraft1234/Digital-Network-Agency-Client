import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Axios/useAxiosPublic";

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCardDetails = async () => {
      const response = await fetch("/cards.json"); // Replace with your actual data fetching logic
      const data = await response.json();
      const cardDetail = data.find((card) => card.id === id);
      setCard(cardDetail);
    };
    fetchCardDetails();
  }, [id]);


  const generateRandomId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 8; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  };
  
  const handleCart = (title, price, description, picture) => {
    const cartItem = {id: generateRandomId(),  title, price, description, picture };
    let cart = localStorage.getItem("carts");

    if (!cart) {
      cart = [];
    } else {
      try {
        cart = JSON.parse(cart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        cart = [];
      }
    }

    if (!Array.isArray(cart)) {
      cart = [];
    }

    cart.push(cartItem);
    localStorage.setItem("carts", JSON.stringify(cart));
    navigate(location?.state ? location.state : "/myCart");
  };





  const [cartItems, setCartItems] = useState([]);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");



const AxiosPublic =useAxiosPublic()

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const orderId = `DN${Math.floor(Math.random() * 1000) + 500}`;
    const englishDate = new Date()

    const orderData = {
        name,
        phone,
        address,
        cartItems,
        deliveryCharge,
        subTotal,
        totalAmount:subTotal * 145,
        orderId,
        status:"New",
        date: englishDate 
    };

    AxiosPublic.post('/orders', orderData)
        .then(res => {
            console.log(res.data);
            localStorage.removeItem("carts");

            let myOrders = JSON.parse(localStorage.getItem("my_orders")) || [];
            myOrders.push(orderData);
            localStorage.setItem("my_orders", JSON.stringify(myOrders));

            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Your order has been successfully placed. Our staff will contact you soon.",
                showConfirmButton: false,
                timer: 4000
            });

            navigate("/order-success", {
                state: { orderId, totalAmount:subTotal * 145 },
            });
        })
        .catch(err => {
            console.error("Error occurred while placing order:", err);
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to place order. Please try again later.",
                showConfirmButton: true,
            });
        });
}

  const subTotal = cartItems.reduce(
    (total, item) =>
      total +
      parseInt(item.price.replace("৳", "").replace(",", "")) * item.quantity,
    0
  );

  if (!card) {
    return <p>Loading...</p>;
  }
  return (
    <div className="lg:px-32 grid lg:grid-cols-2 gap-5 pt-32 mb-16">
<div className=" flex justify-center items-center text-center">

     
        <div className="bg-gray-100 p-6 mx-4 rounded-lg ">
          <h2 className="text-lg text-black font-bold  mb-4">
            অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, দিয়ে{" "}
            <span className="text-red-600">অর্ডার কনফার্ম করুন </span>বাটনে ক্লিক
            করুন
          </h2>
          <form className="space-y-4 text-black " onSubmit={handleOrderSubmit}>
  <div>
    <label className="block text-left text-sm font-medium">আপনার নাম</label>
    <input
      type="text"
      placeholder="আপনার নাম"
      className="w-full p-2 border border-gray-300 rounded bg-white"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>
  <div>
  <label className="block text-sm text-left font-medium">
    আপনার মোবাইল নাম্বার
  </label>
  <input
    type="number"
    placeholder="আপনার মোবাইল নাম্বার"
    className="w-full p-2 border border-gray-300 rounded bg-white"
    value={phone}
    onChange={(e) => {
      const inputPhone = e.target.value;
      const numericPhone = inputPhone.replace(/\D/g, '');
      const limitedPhone = numericPhone.slice(0, 11);
      setPhone(limitedPhone);
    }}
    required
  />
</div>

  <div>
    <label className="block text-left text-sm font-medium">
      আপনার সম্পূর্ণ ঠিকানা
    </label>
    <input
      type="text"
      placeholder="আপনার সম্পূর্ণ ঠিকানা"
      className="w-full p-2 border border-gray-300 rounded bg-white"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      required
    />
  </div>
  <div className="space-y-4">
    <h3 className="text-sm text-black text-left font-medium mb-2">কুরিয়ার চার্জ</h3>
    <div className="flex flex-col md:flex-row md:space-x-4">

</div>

  </div>
  <button
    type="submit"
    className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-900"
  >
    অর্ডার কনফার্ম করুন
  </button>
</form>
        </div>

  
      </div>

      <div className="relative flex flex-col bg-white text-gray-700 p-4">
        {/* Replaced the image with the YouTube video */}
        <div className="relative h-96 overflow-hidden rounded-xl bg-white text-gray-700">
          <iframe
            width="100%"
            height="100%"
            src={card.video}
            title={card.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="p-4 flex-grow">
          <p className="mt-2 text-3xl text-[#0B0B0B] font-bold leading-normal antialiased mb-4">
            {card.title}
          </p>
          <p className="text-lg text-gray-800 mb-4">{card.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-4">
            ${card.price}
          </p>
          <button
            onClick={() =>
              handleCart(card.title, card.price, card.description, card.picture)
            }
            className="mt-4 px-6 py-2 text-lg font-medium leading-normal text-white rounded-lg shadow-md"
            style={{ backgroundColor: card.text_button_bg_color }}
          >
            Enroll Now
          </button>
        </div>
      </div>


    </div>
  );
};

export default CardDetails;
