import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import useNumbers from "../../Hook/useNumbers";
import useAddress from "../../Hook/useAddress";
import { Helmet } from "react-helmet-async";
import useOrders from "../../Hook/useOrders";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { format } from "date-fns";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [orders] = useOrders();
  const order = orders.find((order) => order._id === orderId);

  const [links, setLinks] = useNumbers();
  const [latestLinks, setLatestLinks] = useState(null);
  const [address, setAddress] = useAddress();
  const [latestAddress, setLatestAddress] = useState(null);

  // Memo state
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState([]);

  const invoiceRef = useRef();

  useEffect(() => {
    if (links && links.length > 0) {
      const sortedLinks = [...links].sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = sortedLinks[0];
      setLinks(sortedLinks);
      setLatestLinks(latest);
    }
  }, [links, setLinks]);

  useEffect(() => {
    if (address && address.length > 0) {
      const sortedAddress = [...address].sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = sortedAddress[0];
      setAddress(sortedAddress);
      setLatestAddress(latest);
    }
  }, [address, setAddress]);

  // Function to handle memo submission
  const handleMemoSubmit = (e) => {
    e.preventDefault();
    if (memo) {
      setMemos((prevMemos) => [...prevMemos, memo]);
      setMemo(""); // Clear the memo input
    }
  };

  // Function to download PDF
  const downloadPDF = () => {
    html2canvas(invoiceRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190; // Set the image width
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Invoice_${order._id}.pdf`);
    });
  };

  if (!order) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="bg-white flex justify-center items-center p-6 min-h-screen rounded-lg text-center">
          <div>
            <h1 className="text-lg md:text-3xl font-bold mb-5 text-black">Order not found</h1>
            <Link to="/">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm md:text-base">
                Click here to view other products
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }


  // Inside your component where you render the order details:
  const formattedDate = format(new Date(order.date), "dd-MM-yyyy hh:mm a");
  
  return (
    <div className="container text-black mx-auto mt-20 py-8 px-4 md:px-8">
      <Helmet>
        <title>Digital Network | OrderDetails</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="bg-white p-5 rounded-lg shadow-md" ref={invoiceRef}>
        <h1 className="text-center text-3xl font-bold">Hello Digital Network</h1>
        <div className="flex justify-between items-center border-b pb-4 mb-4 mt-10">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-black">INVOICE</h2>
            <p className="text-sm md:text-base text-gray-700">Date: {format(new Date(order.date), "dd-MM-yyyy hh:mm a")}</p>
            <p className="text-sm md:text-base text-gray-700"> Invoice ID: {order._id.substring(0, 5)}</p>
          </div>
          <div className="mb-4 mt-6">
            <h3 className="text-base md:text-lg font-bold text-black">Invoiced To:</h3>
            <p className="text-sm md:text-base text-gray-700"><strong>Name:</strong> {order.name}</p>
            <p className="text-sm md:text-base text-gray-700"><strong>Phone:</strong> {order.phone}</p>
            <p className="text-sm md:text-base text-gray-700"><strong>Address:</strong> {order.address}</p>
          </div>
        </div>

        <div className="overflow-x-auto text-center mb-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-red-600 text-white">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Item</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Unit Cost</th>
                <th className="py-2 px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.cartItems.map((item, index) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{item.title}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">${item.price}</td>
                  <td className="py-2 px-4">${item.price * item.quantity} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <div className="w-1/2">
            <div className="flex justify-between py-2">
              <span className="text-sm md:text-base text-gray-700">Subtotal</span>
              <span className="text-sm md:text-base text-gray-700">
                ${order.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} 
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm md:text-base text-gray-700">Total</span>
              <span className="text-sm md:text-base text-gray-700">
                {order.totalAmount - order.subTotal} Tk
              </span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-300">
              <span className="text-lg md:text-xl font-bold text-black">Total</span>
              <span className="text-lg md:text-xl font-bold text-black">{order.totalAmount} Tk</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Important: This is an electronic generated invoice so doesn't require any signature.
          </p>
          <p className="text-sm text-gray-600">
            Please read all terms and policies on www.yourdomain.com for returns, replacement and other issues.
          </p>
        </div>

        <div className="mt-4 text-right">
          <h1 className="text-lg md:text-3xl font-bold text-black">{latestAddress?.webID}</h1>
          <p className="text-sm md:text-base text-gray-700">{latestAddress?.facebookIDD}</p>
          <p className="text-sm md:text-base text-gray-700">hellodigitalNetwork.com</p>
          <h1 className="text-base flex justify-start items-center md:text-base lg:text-base text-green-600 -mx-2">
            <span className="text-base md:text-base lg:text-base text-green-600">Hotline:</span>
            <span className="text-lg md:text-base lg:text-base text-green-600">01911 171 747</span>
          </h1>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm md:text-base"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
        <form onSubmit={handleMemoSubmit} className="flex">
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Add a memo"
            className="border rounded-l px-4 py-2"
          />
          <button 
            type="submit" 
            className="bg-green-600 text-white px-4 rounded-r hover:bg-green-800"
          >
            Add Memo
          </button>
        </form>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Memos:</h3>
        <ul>
          {memos.map((m, index) => (
            <li key={index} className="text-gray-700">{m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;
