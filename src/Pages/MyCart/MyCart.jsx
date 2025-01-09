import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa"; // Importing the delete icon

import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Axios/useAxiosPublic";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const storedCart = localStorage.getItem("carts");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      const cartWithQuantity = parsedCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setCartItems(cartWithQuantity);
    }
  }, []);

  const handleQuantityChange = (id, amount) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) } // Ensure quantity is at least 1
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("carts", JSON.stringify(updatedCartItems)); // Update localStorage
  };

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("carts", JSON.stringify(updatedCartItems));
  };


  const AxiosPublic=useAxiosPublic()
  const navigate=useNavigate()
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
  const totalAmount = subTotal + deliveryCharge;

  return (
    <div className="   ">
       <Helmet>
              <title> বিশ্বস্ত-বাজার | MyCart</title>
              <link rel="canonical" href="https://www.tacobell.com/" />
               </Helmet>

               <section className="bg-[#05a0db] pt-44 text-white py-28">
                   <div className=" px-4">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold">My Cart</h1>
                          <p className="mt-2">Home / My Cart</p>
                       </div>
                    </div>
                  </section>
      {
        cartItems.length === 0 ? <div className="bg-white mx-12 flex justify-center items-center p-6 min-h-screen rounded-lg shadow-lg text-center">
     <div>
     <h1 className="text-3xl font-bold mb-5 text-black">  কোন অর্ডার নেই</h1>
        <Link to="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
            অন্যান্য সেবা দেখতে ক্লিক করুন
          </button>
        </Link>
     </div>
      </div> : <div className=" flex px-24 justify-center items-center text-center">

      <div className=" grid gap-5 md:grid-cols-2  my-10">
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

        <div className="bg-gray-100 mx-5 ">
          <table className="w-full text-black mb-4 border-collapse">
            <thead>
              <tr className="text-center">
                <th className="border p-2 text-left">Product</th>
                <th className="border p-2 ">Title</th>
                <th className="border p-2 ">Price</th>
                <th className="border p-2 ">Quantity</th>
                <th className="border p-2 ">Total</th>
                <th className="border p-2 ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cart) => (
                <tr className="text-center" key={cart._id}>
                  <td className="border p-2">
                    <img
                      className="h-16 rounded-2xl w-16"
                      src={cart.picture}
                      alt=""
                    />
                  </td>
                  <td className="border p-2">{cart.title}</td>
                  <td className="border p-2">${cart.price}</td>
                  <td className="justify-center mt-5 p-2 flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(cart.id, -1)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                -
              </button>
              <span className="text-xl font-semibold">{cart.quantity}</span>
              <button
                onClick={() => handleQuantityChange(cart.id, 1)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              >
                +
              </button>
            </td>
                  <td className="border p-2">
                    ${parseInt(cart.price.replace("৳", "").replace(",", "")) *
                      cart.quantity}{" "}
                    
                  </td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => handleDelete(cart.id)}
                      className="text-red-600"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" text-black flex justify-between font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 rounded w-full">
            <h1>Sub Total :</h1>
            <h1>${subTotal}</h1>
          </div>
          <div className=" text-black flex justify-between font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 rounded w-full">
            <h1>Total :</h1>
            <h1>৳ {subTotal * 145}</h1>
          </div>
        </div>
      </div>
      </div>
      }
    </div>
  );
};

export default MyCart;
