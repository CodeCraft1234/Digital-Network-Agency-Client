// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2';
// import toast from 'react-hot-toast';
// import useAxiosPublic from '../Axios/useAxiosPublic';
// import useOrders from '../Hook/useOrders';

// const AdminHome = () => {
//     const [orders, refetch] = useOrders();
//     const [sortOption, setSortOption] = useState('');
//     const [searchInput, setSearchInput] = useState('');
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const navigate = useNavigate();
//     const AxiosPublic = useAxiosPublic();

//     const handleCancelOrder = async (orderId) => {
//         const result = await Swal.fire({
//             title: 'Are you sure?',
//             text: 'Do you want to cancel this order?',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, Delete it!',
//             cancelButtonText: 'No, keep it',
//         });

//         if (result.isConfirmed) {
//             try {
//                 const response = await AxiosPublic.delete(`https://server-omega-cyan.vercel.app/orders/${orderId}`);
//                 console.log(response.data);
//                 refetch();
//                 toast.success('Order cancelled successfully');
//             } catch (error) {
//                 console.error('Error cancelling order:', error);
//                 toast.error('Failed to cancel order');
//             }
//         }
//     };

//     const handleSortChange = (e) => {
//         setSortOption(e.target.value);
//     };

//     const handleStatusChange = async (orderId, newStatus) => {
//         try {
//             const response = await AxiosPublic.patch(`https://server-omega-cyan.vercel.app/orders/${orderId}`, { status: newStatus });
//             console.log(response.data);
//             refetch();
//             toast.success('Order status updated successfully');
//         } catch (error) {
//             console.error('Error updating order status:', error);
//             toast.error('Failed to update order status');
//         }
//     };

//     const handleSearchInputChange = (e) => {
//         setSearchInput(e.target.value);
//     };

//     const sortedOrders = [...orders].sort((a, b) => {
//         const dateA = new Date(a.date);
//         const dateB = new Date(b.date);

//         if (sortOption === 'date-asc') {
//             return dateA - dateB;
//         } else if (sortOption === 'date-desc') {
//             return dateB - dateA;
//         }

//         return dateB - dateA;
//     });

//     const filteredOrders = sortedOrders.filter(order => 
//         order.phone.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     const openOrderDetails = (orderId) => {
//         navigate(`/order-details/${orderId}`);
//     };

//     const toggleDropdown = (orderId) => {
//         if (activeDropdown === orderId) {
//             setActiveDropdown(null);
//         } else {
//             setActiveDropdown(orderId);
//         }
//     };

//     return (
//         <div className="py-3 pb-10 px-4">
//             <Helmet>
//                 <title>PerfectArch | All Orders</title>
//             </Helmet>
//             <div className="flex flex-col sm:flex-row justify-between items-center mb-2 w-full sm:w-auto mt-6">
//                 <input
//                     type="text"
//                     placeholder="Search by customer phone number"
//                     value={searchInput}
//                     onChange={handleSearchInputChange}
//                     className="w-full sm:w-auto mb-4 sm:mb-0 py-2 px-4 rounded-full border bg-gray-300 border-black text-black font-bold"
//                 />
//                 <div className="ml-0 sm:ml-auto">
//                     <label htmlFor="sort" className="mr-2 text-black font-base">Sort by:</label>
//                     <select
//                         id="sort"
//                         value={sortOption}
//                         onChange={handleSortChange}
//                         className="border border-gray-300 p-2 rounded text-base md:text-base"
//                     >
//                         <option value="">Select</option>
//                         <option value="date-asc">Date (Oldest to Newest)</option>
//                         <option value="date-desc">Date (Newest to Oldest)</option>
//                     </select>
//                 </div>
//             </div>
//             <h2 className="text-3xl font-bold mb-6 text-center text-black">
//                 Total Orders
//             </h2>
//             {filteredOrders.length === 0 ? (
//                 <div className="flex justify-center items-center p-6 lg:min-h-[400px] text-center">
//                     <div>
//                         <h1 className="text-base md:text-base font-base mb-5 text-black">No products available</h1>
//                         <Link to="/">
//                             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 text-base md:text-base">
//                                 Click here to view other products
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="overflow-x-auto ">
//                     <table className="min-w-full text-center bg-gray-200 text-black">
//                         <thead>
//                             <tr className="text-black bg-green-300">
//                                 <th className="px-4 border border-gray-500 py-2">SL</th>
//                                 <th className="px-4 border border-gray-500 py-2">Customer Name</th>
//                                 <th className="px-4 border border-gray-500 py-2">Customer Mobile</th>
//                                 <th className="px-4 border border-gray-500 py-2">Ordered At</th>
//                                 <th className="px-4 border border-gray-500 py-2">Storage & Price</th>
//                                 <th className="px-4 border border-gray-500 py-2">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredOrders.map((order, index) => (
//                                 <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
//                                     <td className="px-4 border border-gray-500 py-2">{index + 1}</td>
//                                     <td className="px-4 border border-gray-500 py-2">{order.name}</td>
//                                     <td className="px-4 border border-gray-500 py-2">{order.phone}</td>
//                                     <td className="px-4 border border-gray-500 py-2">{new Date(order.date).toLocaleString()}</td>
//                                     <td className="px-4 border border-gray-500 py-2">
//                                         {order.items.map((item, i) => (
//                                             <div key={i}>
//                                                 {item.storage} - {item.price}
//                                             </div>
//                                         ))}
//                                     </td>
//                                     <td className="px-4 border border-gray-500 py-2 relative">
//                                         <button
//                                             onClick={() => toggleDropdown(order._id)}
//                                             className=" focus:outline-none"
//                                         >
//                                             &#8226;&#8226;&#8226;
//                                         </button>
//                                         {activeDropdown === order._id && (
//                                             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
//                                                 <button
//                                                     onClick={() => { handleCancelOrder(order._id); toggleDropdown(order._id); }}
//                                                     className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
//                                                 >
//                                                     Delete
//                                                 </button>
//                                             </div>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminHome;

import React from 'react';

const orders = [
  { id: 1, name: 'Md. Rahim Uddin', service: 'Web Development', project: 'E-commerce Website', price: 20000 },
  { id: 2, name: 'Ayesha Akter', service: 'Digital Marketing', project: 'Social Media Campaign', price: 15000 },
  { id: 3, name: 'Sabbir Hossain', service: 'Graphics Design', project: 'Brand Logo Design', price: 12000 },
  { id: 4, name: 'Fatema Khatun', service: 'Domain Hosting', project: 'Website Hosting', price: 10000 },
  { id: 5, name: 'Mahmudul Hasan', service: 'Web Development', project: 'Blog Website', price: 18000 },
  { id: 6, name: 'Sumaiya Sultana', service: 'Digital Marketing', project: 'SEO Optimization', price: 14000 },
  { id: 7, name: 'Rakibul Islam', service: 'Graphics Design', project: 'Business Card Design', price: 11000 },
  { id: 8, name: 'Jannatul Ferdous', service: 'Domain Hosting', project: 'Domain Registration', price: 10000 },
  { id: 9, name: 'Tanjila Haque', service: 'Web Development', project: 'Portfolio Website', price: 19000 },
  { id: 10, name: 'Ashraful Alam', service: 'Digital Marketing', project: 'Email Marketing Campaign', price: 16000 },
  { id: 11, name: 'Shamim Ahmed', service: 'Graphics Design', project: 'Flyer Design', price: 13000 },
  { id: 12, name: 'Nusrat Jahan', service: 'Domain Hosting', project: 'Server Management', price: 17000 },
  { id: 13, name: 'Kamrul Hasan', service: 'Web Development', project: 'News Portal', price: 20000 },
  { id: 14, name: 'Afroza Begum', service: 'Digital Marketing', project: 'PPC Campaign', price: 15000 },
  { id: 15, name: 'Farhana Islam', service: 'Graphics Design', project: 'Brochure Design', price: 12000 },
  { id: 16, name: 'Imran Hossain', service: 'Domain Hosting', project: 'SSL Certification', price: 10000 },
  { id: 17, name: 'Shorna Akter', service: 'Web Development', project: 'Corporate Website', price: 19500 },
  { id: 18, name: 'Mizanur Rahman', service: 'Digital Marketing', project: 'Content Marketing', price: 16500 },
  { id: 19, name: 'Sultana Jahan', service: 'Graphics Design', project: 'Infographic Design', price: 11500 },
  { id: 20, name: 'Rubel Miah', service: 'Domain Hosting', project: 'Cloud Hosting', price: 13000 },
  { id: 21, name: 'Shakil Ahmed', service: 'Web Development', project: 'Online Learning Platform', price: 18000 },
  { id: 22, name: 'Meherun Nesa', service: 'Digital Marketing', project: 'Affiliate Marketing', price: 14000 },
  { id: 23, name: 'Asif Mahmud', service: 'Graphics Design', project: 'Poster Design', price: 12500 },
  { id: 24, name: 'Munira Islam', service: 'Domain Hosting', project: 'VPS Hosting', price: 13500 },
  { id: 25, name: 'Fahim Hossain', service: 'Web Development', project: 'Real Estate Website', price: 20000 },
];

const totalAmount = orders.reduce((total, order) => total + order.price, 0);

const AdminHome = () => {
  return (
    <div className="text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Successful Projects/Orders</h1>
      <table className="min-w-full bg-white border text-black border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Service</th>
            <th className="py-2 px-4 border-b">Campaign/Project</th>
            <th className="py-2 px-4 border-b">Price (BDT)</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {orders.map((order, index) => (
            <tr key={order.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4 border-b">{order.id}</td>
              <td className="py-2 px-4 border-b">{order.name}</td>
              <td className="py-2 px-4 border-b">{order.service}</td>
              <td className="py-2 px-4 border-b">{order.project}</td>
              <td className="py-2 px-4 border-b">{order.price.toLocaleString('en-US')}</td>
            </tr>
          ))}
          <tr>
            <td className="py-2 px-4 border-b font-bold" colSpan="4">Total Amount</td>
            <td className="py-2 px-4 border-b font-bold">{totalAmount.toLocaleString('en-US')} BDT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminHome;



