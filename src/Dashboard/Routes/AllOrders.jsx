import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useOrders from '../../Hook/useOrders';
import useAxiosPublic from '../../Axios/useAxiosPublic';

const AllOrders = () => {
    const [orders, refetch] = useOrders();
    const [sortOption, setSortOption] = useState('');
    const [filterOption, setFilterOption] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const AxiosPublic = useAxiosPublic();

    const handleCancelOrder = async (orderId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to cancel this order?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete it!',
            cancelButtonText: 'No, keep it',
        });

        if (result.isConfirmed) {
            try {
                const response = await AxiosPublic.delete(`https://server-omega-cyan.vercel.app/orders/${orderId}`);
                console.log(response.data);
                refetch();
                toast.success('Order cancelled successfully');
            } catch (error) {
                console.error('Error cancelling order:', error);
                toast.error('Failed to cancel order');
            }
        }
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const response = await AxiosPublic.patch(`https://server-omega-cyan.vercel.app/orders/${orderId}`, { status: newStatus });
            console.log(response.data);
            refetch();
            toast.success('Order status updated successfully');
        } catch (error) {
            console.error('Error updating order status:', error);
            toast.error('Failed to update order status');
        }
    };

    const filterOrders = (orders) => {
        if (searchTerm) {
            return orders.filter(order =>
                order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.phone.includes(searchTerm)
            );
        }
        return orders;
    };

    const sortedOrders = filterOrders([...orders]).sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        switch (sortOption) {
            case 'date-asc':
                return dateA - dateB;
            case 'date-desc':
                return dateB - dateA;
            case 'title-asc':
                return a.name.localeCompare(b.name);
            case 'title-desc':
                return b.name.localeCompare(a.name);
            case 'phone-asc':
                return a.phone.localeCompare(b.phone);
            case 'phone-desc':
                return b.phone.localeCompare(a.phone);
            default:
                return dateB - dateA;
        }
    });

    const totalAmount = sortedOrders.reduce((sum, order) => sum + order.totalAmount, 0);

    const openOrderDetails = (orderId) => {
        navigate(`/order-details/${orderId}`);
    };

    const toggleDropdown = (orderId) => {
        if (activeDropdown === orderId) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(orderId);
        }
    };

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
        <Helmet>
            <title>DigitalNetwork | All Orders</title>
        </Helmet>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full mt-6 gap-4">
            <input
                type="text"
                placeholder="Search by product title or phone number"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full sm:w-auto py-2 px-4 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            />
            <div className="flex items-center gap-4">
                <div>
                    <label htmlFor="sort" className="mr-2 text-gray-700 font-medium">Sort by:</label>
                    <select
                        id="sort"
                        value={sortOption}
                        onChange={handleSortChange}
                        className="border bg-white border-gray-300 p-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select</option>
                        <option value="date-asc">Date (Oldest to Newest)</option>
                        <option value="date-desc">Date (Newest to Oldest)</option>
                        <option value="title-asc">Title (A-Z)</option>
                        <option value="title-desc">Title (Z-A)</option>
                        <option value="phone-asc">Phone (Ascending)</option>
                        <option value="phone-desc">Phone (Descending)</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="filter" className="mr-2 text-gray-700 font-medium">Filter by:</label>
                    <select
                        id="filter"
                        value={filterOption}
                        onChange={handleFilterChange}
                        className="border bg-white border-gray-300 p-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select</option>
                        <option value="all">All</option>
                        <option value="today">Today</option>
                        <option value="this-week">This Week</option>
                        <option value="this-month">This Month</option>
                    </select>
                </div>
            </div>
        </div>
    
        <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700">
            Total Orders
        </h2>
    
        {orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-10 lg:min-h-[400px] text-center bg-white rounded-lg shadow-md">
                <h1 className="text-lg font-semibold mb-6 text-gray-600">No orders available</h1>
                <Link to="/">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition-colors">
                        Click here to view other products
                    </button>
                </Link>
            </div>
        ) : (
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full text-center bg-white text-gray-800 rounded-lg">
                    <thead className="bg-blue-500 text-white font-semibold">
                        <tr>
                            <th className="px-6 py-4">SL</th>
                            <th className="px-6 py-4">Customer Name</th>
                            <th className="px-6 py-4">Customer Mobile</th>
                            <th className="px-6 py-4">Ordered At</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedOrders.map((order, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <td className="px-6 py-4 border-b">{index + 1}</td>
                                <td className="px-6 py-4 border-b">{order.name}</td>
                                <td className="px-6 py-4 border-b">{order.phone}</td>
                                <td className="px-6 py-4 border-b">{new Date(order.date).toLocaleString()}</td>
                                <td className="px-6 py-4 border-b">
                                    <select
                                        className="border border-gray-300 rounded-lg p-2 bg-white text-sm text-gray-700 focus:ring-blue-500 focus:outline-none"
                                        value={order.status}
                                        onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Packaging">Packaging</option>
                                        <option value="Shipment">Shipment</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 border-b relative">
                                    <button
                                        onClick={() => toggleDropdown(order._id)}
                                        className="text-xl text-gray-700 focus:outline-none hover:text-blue-500"
                                    >
                                        &#8226;&#8226;&#8226;
                                    </button>
                                    {activeDropdown === order._id && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
                                            <button
                                                onClick={() => { openOrderDetails(order._id); toggleDropdown(order._id); }}
                                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() => { handleCancelOrder(order._id); toggleDropdown(order._id); }}
                                                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-blue-100">
                            <td colSpan="5" className="px-6 py-4 text-right font-bold text-gray-700">Total Amount</td>
                            <td className="px-6 py-4 font-bold text-gray-700">{totalAmount}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )}
    </div>
    
    );
};

export default AllOrders;
