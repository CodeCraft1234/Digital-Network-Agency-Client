import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Card = ({ plan }) => {
  const navigate = useNavigate();

  const generateRandomId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 8; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  };

  const handleCart = (storage,title, price,picture) => {
    const cartItem = {id: generateRandomId(),  storage,title, price,picture };
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
    navigate("/myCart");
  };


  return (
    <div className="transition-transform duration-300 transform hover:scale-105 hover:translate-y-[-10px] bg-white shadow-lg rounded-lg">
      <div className={`p-4 rounded-t-lg ${plan.headerBg}`}>
        <h2 className="text-xl font-bold text-center">{plan.storage}</h2>
        <p className="text-center">{plan.description}</p>
      </div>
      <div className="p-6 flex flex-col justify-between h-[350px]">
        <p className="text-center text-black text-4xl font-bold my-4">${plan.price}</p>
        <ul className="space-y-2 text-black">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button
            className={`py-2 px-4  rounded ${plan.buttonBg} text-white`}
            onClick={() => handleCart(plan.storage,plan.storage, plan.price,plan.image)}
          >
            Order Now
          </button>
       
      </div>
    </div>
  );
};

const Domain = () => {
  const plans = [
    {
      storage: "10 GB",
      description: "Fast Hosting & Free .COM Domain",
      price: "9.99",
      features: [
        "10 GB SSD Storage",
        "Unlimited Bandwidth",
        "5+ Email Account/Month",
        "5+ Database Account/Month",
        "24/7 Support",
      ],
      headerBg: "bg-blue-600 text-white",
      buttonBg: "bg-blue-600",
      image:'https://i.ibb.co/5YRyhwB/10-gb-3d-word-on-600nw-1389824156.webp'

     


    },
    {
      storage: "50 GB",
      description: "Fast Hosting & Free .COM Domain",
      price: "19.99",
      features: [
        "250 GB SSD Storage",
        "Unlimited Bandwidth",
        "10+ Email Account/Month",
        "10+ Database Account/Month",
        "24/7 Support",
      ],
      headerBg: "bg-black text-white",
      buttonBg: "bg-black",
      image:'https://i.ibb.co/3hW8HpS/50gb-capacity-download-upload-vector-600nw-2232989733.webp'
    },
    {
      storage: "100 GB",
      description: "Fast Hosting & Free .COM Domain",
      price: "29.99",
      features: [
        "250 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Account/Month",
        "Unlimited Database Account/Month",
        "24/7 Support",
      ],
      headerBg: "bg-green-600 text-white",
      buttonBg: "bg-green-600",
      image:'https://i.ibb.co/yPWhLWq/pngtree-cloud-icon-100-gb-storage-capacity-3d-computer-png-image-11098474.png'
    },
    {
      storage: "200 GB",
      description: "Fast Hosting & Free .COM Domain",
      price: "39.99",
      features: [
        "450 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Account/Month",
        "Unlimited Database Account/Month",
        "24/7 Support",
      ],
      headerBg: "bg-red-500 text-white",
      buttonBg: "bg-red-500",
      image:'https://i.ibb.co/SrDDyXw/cloud-icon-200-gb-storage-capacity-3d-rendering-isolated-on-white-background-PKJYY0.jpg'
    },
  ];

  return (
    <div className="mt-10 px-5 lg:mx-36   ">
      <Helmet>
        <title>Digital Network | Domain</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="text-center text-black mb-8">
      <h2 className="text-3xl text-center text-gray-700 font-bold my-10">
      Free .COM Domain With Super Fast Cloud Hosting
        </h2>
      </div>
      {/* Grid layout */}
      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {plans.map((plan, index) => (
          <Card key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Domain;
