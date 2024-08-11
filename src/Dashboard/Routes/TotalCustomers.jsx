// import { Helmet } from "react-helmet-async";
// import useOrders from "../../Hook/useOrders";


// const TotalCustomers = () => {
//     const [orders] = useOrders();
//     const customerDetails = orders.map(order => ({
//         phone: order.phone,
//         address: order.address,
//         name: order.name
//     }));

//     // Step 2: Remove duplicates using a Map to ensure unique phone numbers
//     const uniqueCustomerDetailsMap = new Map();
//     customerDetails.forEach(detail => {
//         if (!uniqueCustomerDetailsMap.has(detail.phone)) {
//             uniqueCustomerDetailsMap.set(detail.phone, detail);
//         }
//     });

//     // Step 3: Convert the Map back to an array
//     const uniqueCustomerDetails = Array.from(uniqueCustomerDetailsMap.values());

//     return (
//         <div className=" py-4 mx-4 text-black  ">
//             <Helmet>
//         <title>Digital Network| Total Customers</title>
//         <link rel="canonical" href="https://www.tacobell.com/" />
//       </Helmet>
//             <h2 className="text-3xl font-bold mb-6 text-center text-black">
//                 Total Unique Customers: {uniqueCustomerDetails.length}
//             </h2>
//             <div className="overflow-x-auto  border border-gray-400">
//                 <table className="min-w-full bg-white border border-gray-200">
//                     <thead className="text-black bg-green-300">
//                         <tr className="text-center ">
//                             <th className="py-2 border border-gray-500 px-4 border-b">SL</th>
//                             <th className="py-2 border border-gray-500 px-4 border-b">Name</th>
//                             <th className="py-2 border border-gray-500 px-4 border-b">Phone</th>
//                             <th className="py-2 border border-gray-500 px-4 border-b">Address</th>
//                         </tr>
//                     </thead>
//                     <tbody className="text-center ">
//                         {uniqueCustomerDetails.map((customer, index) => (
//                             <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
//                                 <td className="py-2 px-4 border border-gray-500 border-b">{index + 1}</td>
//                                 <td className="py-2 px-4 border border-gray-500 border-b">{customer.name}</td>
//                                 <td className="py-2 px-4 border border-gray-500 border-b">{customer.phone}</td>
//                                 <td className="py-2 px-4 border border-gray-500 border-b">{customer.address}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default TotalCustomers;



import React from 'react';

const customers = [
  { id: 1, name: 'Md. Rahim Uddin', number: '01800000001', project: 'E-commerce Website' },
  { id: 2, name: 'Ayesha Akter', number: '01800000002', project: 'Social Media Campaign' },
  { id: 3, name: 'Sabbir Hossain', number: '01800000003', project: 'Brand Logo Design' },
  { id: 4, name: 'Fatema Khatun', number: '01800000004', project: 'Website Hosting' },
  { id: 5, name: 'Mahmudul Hasan', number: '01800000005', project: 'Blog Website' },
  { id: 6, name: 'Sumaiya Sultana', number: '01800000006', project: 'SEO Optimization' },
  { id: 7, name: 'Rakibul Islam', number: '01800000007', project: 'Business Card Design' },
  { id: 8, name: 'Jannatul Ferdous', number: '01800000008', project: 'Domain Registration' },
  { id: 9, name: 'Tanjila Haque', number: '01800000009', project: 'Portfolio Website' },
  { id: 10, name: 'Ashraful Alam', number: '01800000010', project: 'Email Marketing Campaign' },
  { id: 11, name: 'Shamim Ahmed', number: '01800000011', project: 'Flyer Design' },
  { id: 12, name: 'Nusrat Jahan', number: '01800000012', project: 'Server Management' },
  { id: 13, name: 'Kamrul Hasan', number: '01800000013', project: 'News Portal' },
  { id: 14, name: 'Afroza Begum', number: '01800000014', project: 'PPC Campaign' },
  { id: 15, name: 'Farhana Islam', number: '01800000015', project: 'Brochure Design' },
  { id: 16, name: 'Imran Hossain', number: '01800000016', project: 'SSL Certification' },
  { id: 17, name: 'Shorna Akter', number: '01800000017', project: 'Corporate Website' },
  { id: 18, name: 'Mizanur Rahman', number: '01800000018', project: 'Content Marketing' },
  { id: 19, name: 'Sultana Jahan', number: '01800000019', project: 'Infographic Design' },
  { id: 20, name: 'Rubel Miah', number: '01800000020', project: 'Cloud Hosting' },
  { id: 21, name: 'Shakil Ahmed', number: '01800000021', project: 'Online Learning Platform' },
  { id: 22, name: 'Meherun Nesa', number: '01800000022', project: 'Affiliate Marketing' },
  { id: 23, name: 'Asif Mahmud', number: '01800000023', project: 'Poster Design' },
  { id: 24, name: 'Munira Islam', number: '01800000024', project: 'VPS Hosting' },
  { id: 25, name: 'Fahim Hossain', number: '01800000025', project: 'Real Estate Website' },
];

const TotalCustomers = () => {
  return (
    <div className="text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Information</h1>
      <table className="min-w-full text-center bg-white border text-black border-gray-300">
        <thead>
          <tr className='text-center'>
            <th className="py-2 px-4 border-b">Full Name</th>

            <th className="py-2 px-4 border-b">Project Name</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {customers.map((customer, index) => (
            <tr key={customer.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.project}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TotalCustomers;

