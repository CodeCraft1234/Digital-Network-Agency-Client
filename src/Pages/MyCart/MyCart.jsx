import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa"; // Importing the delete icon
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Axios/useAxiosPublic";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const AxiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCart = localStorage.getItem("Domain-Cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      // Initialize quantity for each item if not already present
      const cartWithQuantity = parsedCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setCartItems(cartWithQuantity);
    }
  }, []);

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("Domain-Cart", JSON.stringify(updatedCartItems));
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const orderId = `DN${Math.floor(Math.random() * 1000) + 500}`;
    const englishDate = new Date();

    const orderData = {
      name,
      phone,
      address,
      orderId,
      status: "New",
      date: englishDate,
      items: cartItems, // Include cart items in the order data
    };

    try {
      const res = await AxiosPublic.post('/orders', orderData);
      console.log(res.data);

      localStorage.removeItem("Domain-Cart");

      let myOrders = JSON.parse(localStorage.getItem("my_domain_orders")) || [];
      myOrders.push(orderData);
      localStorage.setItem("my_domain_orders", JSON.stringify(myOrders));

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your order has been successfully placed. Our staff will contact you soon.",
        showConfirmButton: false,
        timer: 4000,
      });

      navigate("/order-success", {
        state: { orderId },
      });
    } catch (err) {
      console.error("Error occurred while placing order:", err);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to place order. Please try again later.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>PerfectArch | My Cart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Service Details</h1>
            <p className="mt-2">Home / Service</p>
          </div>
        </div>
      </section>
      {cartItems.length === 0 ? (
        <div className="bg-white mx-8 flex justify-center items-center p-6 min-h-screen rounded-lg shadow-lg text-center">
          <div>
            <h1 className="text-3xl font-bold mb-5 text-black">কোন প্রোডাক্ট নেই</h1>
            <Link to="/">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                অন্যান্য পণ্য দেখতে ক্লিক করুন
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex mx-8 px-5 mb-5 justify-center items-center text-center">
          <div className="grid gap-5 md:grid-cols-2 mt-5">
            <div className="bg-gray-100 p-6">
              <h2 className="text-lg text-black font-bold mb-4">
                অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, দিয়ে{" "}
                <span className="text-red-600">অর্ডার কনফার্ম করুন </span>বাটনে ক্লিক
                করুন
              </h2>
              <form className="space-y-4 text-black" onSubmit={handleOrderSubmit}>
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
                  <label className="block text-left text-sm font-medium">আপনার মোবাইল নাম্বার</label>
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
                  <label className="block text-left text-sm font-medium">আপনার সম্পূর্ণ ঠিকানা</label>
                  <input
                    type="text"
                    placeholder="আপনার সম্পূর্ণ ঠিকানা"
                    className="w-full p-2 border border-gray-300 rounded bg-white"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-900">
                  অর্ডার কনফার্ম করুন
                </button>
              </form>
            </div>
            <div className="bg-gray-100 p-6">
              <table className="w-full text-black mb-4 border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">Storage</th>
                    <th className="border p-2 text-left">Price</th>
                    <th className="border p-2 text-left">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cart) => (
                    <tr key={cart.id}>
                      <td className="border p-2">{cart.storage}</td>
                      <td className="border p-2">{cart.price}</td>
                      <td className="border p-2 text-center">
                        <button onClick={() => handleDelete(cart.id)} className="text-red-600">
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
