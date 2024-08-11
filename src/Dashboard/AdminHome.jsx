import React from 'react';
import useOrders from '../Hook/useOrders';

const AdminHome = () => {
  const [orders] = useOrders(); // Default to an empty array if orders is undefined

  // Function to calculate total price of an order item
  const calculateItemTotalPrice = (price, quantity) => {
    if (!price || !quantity) return 0;
    // Convert price from string to number
    const priceNumber = parseFloat(price.replace('৳', '').replace(',', ''));
    return priceNumber * quantity;
  };

  // Function to calculate total price for all orders
  const calculateTotalAmount = () => {
    return orders.reduce((total, order) => {
      if (!order.items || !Array.isArray(order.items)) return total;
      return total + order.items.reduce((orderTotal, item) => {
        return orderTotal + calculateItemTotalPrice(item.price, item.quantity || 0);
      }, 0);
    }, 0);
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div className="text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Successful Projects/Orders</h1>
      <table className="min-w-full bg-white border text-black border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Total Price (BDT)</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <React.Fragment key={order._id}>
                {order.items && Array.isArray(order.items) ? (
                  order.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="py-2 px-4 border-b">{order._id}</td>
                      )}
                      {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="py-2 px-4 border-b">{order.name}</td>
                      )}
                      {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="py-2 px-4 border-b">{order.phone}</td>
                      )}
                      {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="py-2 px-4 border-b">{order.address}</td>
                      )}
                      {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="py-2 px-4 border-b">{order.orderId}</td>
                      )}
                      {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="py-2 px-4 border-b">{order.status}</td>
                      )}
                      {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="py-2 px-4 border-b">{new Date(order.date).toLocaleDateString()}</td>
                      )}
                      <td className="py-2 px-4 border-b">
                        {calculateItemTotalPrice(item.price, item.quantity).toLocaleString('en-US')}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-2 px-4 text-center">No Items Available</td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="py-2 px-4 text-center">No Orders Available</td>
            </tr>
          )}
          <tr>
            <td className="py-2 px-4 border-b font-bold" colSpan="7">Total Amount</td>
            <td className="py-2 px-4 border-b font-bold">{totalAmount.toLocaleString('en-US')} BDT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminHome;
