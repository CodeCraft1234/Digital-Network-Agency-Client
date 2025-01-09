import { Helmet } from "react-helmet-async";
import useOrders from "../../Hook/useOrders";


const TotalCustomers = () => {
    const [orders] = useOrders();
    const customerDetails = orders.map(order => ({
        phone: order.phone,
        address: order.address,
        name: order.name
    }));

    // Step 2: Remove duplicates using a Map to ensure unique phone numbers
    const uniqueCustomerDetailsMap = new Map();
    customerDetails.forEach(detail => {
        if (!uniqueCustomerDetailsMap.has(detail.phone)) {
            uniqueCustomerDetailsMap.set(detail.phone, detail);
        }
    });

    // Step 3: Convert the Map back to an array
    const uniqueCustomerDetails = Array.from(uniqueCustomerDetailsMap.values());

    return (
        <div className="py-4 mx-4 text-black">
        <Helmet>
            <title>Digital Network | Total Customers</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Total Unique Customers: {uniqueCustomerDetails.length}
        </h2>
        <div className="overflow-x-auto border border-gray-300 shadow-md rounded-lg">
            <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-600 text-white">
                    <tr className="text-center">
                        <th className="py-3 px-5 border border-gray-300 font-semibold">SL</th>
                        <th className="py-3 px-5 border border-gray-300 font-semibold">Name</th>
                        <th className="py-3 px-5 border border-gray-300 font-semibold">Phone</th>
                        <th className="py-3 px-5 border border-gray-300 font-semibold">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {uniqueCustomerDetails.map((customer, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} hover:bg-green-100`}>
                            <td className="py-2 px-4 border border-gray-300 text-center font-medium">{index + 1}</td>
                            <td className="py-2 px-4 border border-gray-300 text-center">{customer.name}</td>
                            <td className="py-2 px-4 border border-gray-300 text-center">{customer.phone}</td>
                            <td className="py-2 px-4 border border-gray-300 text-center">{customer.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
    );
};

export default TotalCustomers;



