import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Card = ({ plan }) => {

  const navigate = useNavigate();

  const handleCart = (storage, price) => {
    const cartItem = { storage, price };
    let cart = localStorage.getItem("Domain-Cart");

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
    localStorage.setItem("Domain-Cart", JSON.stringify(cart));
    navigate("/myCart");
  };
  return (
   
<div className="transition-transform duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
      <div className={`p-2 rounded-t-lg ${plan.headerBg}`}>
        <h2 className="text-xl font-bold text-center">{plan.storage}</h2>
        <p className="text-center">{plan.description}</p>
      </div>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 h-full md:h-96 flex flex-col justify-between">
        <p className="text-center text-4xl font-bold my-4">{plan.price}</p>
        <ul className="space-y-2 text-black">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="text-center mt-6">
          <button
            className={`py-2 px-4 rounded ${plan.buttonBg} text-white`}
            onClick={() => handleCart(plan.storage, plan.price)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Domain = () => {
  const plans = [
    {
      storage: "10 GB",
      description: "Fast Hosting & Free .COM Domain",
      price: "৳999",
      features: [
        "10 GB SSD Storage",
        "Unlimited Bandwidth",
        "5+ Email Account/Month",
        "5+ Database Account/Month",
        "24/7 Support",
      ],
      headerBg: "bg-blue-600 text-white",
      buttonBg: "bg-blue-600",
    },
    {
      storage: "50 GB",
      description: "Fast Hosting & Free .COM Domain",
      price: "৳2550",
      features: [
        "250 GB SSD Storage",
        "Unlimited Bandwidth",
        "10+ Email Account/Month",
        "10+ Database Account/Month",
        "24/7 Support",
      ],
      headerBg: "bg-black text-white",
      buttonBg: "bg-black",
    },
    {
      storage: "100 GB",
      description: "Fast Hosting & Free .COM Domain",
      price: "৳3999",
      features: [
        "250 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Account/Month",
        "Unlimited Database Account/Month",
        "24/7 Support",
      ],
      headerBg: "bg-green-600 text-white",
      buttonBg: "bg-green-600",
    },
    {
      storage: "200 GB",
      description: "Fast Hosting & Free .COM Domain",
      price: "৳4999",
      features: [
        "450 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Account/Month",
        "Unlimited Database Account/Month",
        "24/7 Support",
      ],
      headerBg: "bg-red-500 text-white",
      buttonBg: "bg-red-500",
    },
  ];



  return (
    <div className="mt-24">
      <Helmet>
        <title>Digital Network| Domain</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="text-center text-black mb-8">
        <h1 className="text-xl md:text-4xl lg:text-4xl font-bold">
        Free .COM Domain With <br /> Super Fast Cloud Hosting
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-start space-y-4 md:space-y-0 md:space-x-4 gap-16">
        {plans.map((plan, index) => (
          <Card key={index} plan={plan} />
        ))}
      </div>
    </div>
  
  );
};

export default Domain;
