import  {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosPublic from '../Axios/useAxiosPublic';
import Swal from 'sweetalert2';
import { FaEdit, FaMinusSquare } from 'react-icons/fa';
import usePaymentLogo from '../Hook/usePaymentLogo';

const OurPaymentLogo = () => {
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = useAxiosPublic();
  const [paymentLogo, refetch] = usePaymentLogo();
  const [selectedMember, setSelectedMember] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

 const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to delete this team member?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Member",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosPublic.delete(`/paymentLogo/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Team member deleted successfully!",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const onSubmit = async (data) => {
    try {
      let imageUrl = selectedMember?.image || "";
  
      if (data.image?.length > 0) {
        const formData = new FormData();
        formData.append("image", data.image[0]);
  
        const imgRes = await axios.post(image_hosting_api, formData);
        imageUrl = imgRes.data.data.display_url;
      }
  
      const teamData = {
        category: data.category,
        bankName: data.bankName,
        accountNumber: data.accountNumber,
        cardNumber: data.cardNumber,
        image: imageUrl,
        Alt: data.Alt,
       
      };
  
      if (selectedMember) {
        await AxiosPublic.patch(`/paymentLogo/${selectedMember._id}`, teamData);
        alert("Payment Logo updated successfully!");
      } else {
        await AxiosPublic.post("/paymentLogo", teamData);
        alert("Payment Logo added successfully!");
      }
  
      refetch();
      reset();
      setSelectedMember(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again.");
    }
  };
  
  const openForm = (member = null) => {
    setSelectedMember(member);
    if (member) {
      setValue("category", member.category);
      setValue("name", member.name);
      setValue("bankName", member.bankName);
      setValue("accountNumber", member.accountNumber);
      setValue("cardNumber", member.cardNumber);
      setValue("Alt", member.Alt);
    } else {
      reset();
    }
    setIsFormVisible(true);
  };
  return (
    <div className='mx-5 text-gray-700'>
      <div className="my-5 w-full">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 mb-5"
          >
            {isFormVisible ? 'Cancel' : 'Add New Payment Logo'}
          </button>

          {isFormVisible && (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div className="grid lg:grid-cols-3 gap-3">

    <div>
                <label className="block text-sm font-medium mb-1">Category:</label>
                
                <select
                  {...register("category", { required: "Category is required" })}
                  className="w-full p-2 bg-white border-gray-500 border rounded-md"
                >
                    <option selected disabled value="">Select Method</option>
                  <option value="Mobile Banking">Mobile Banking</option>
                  <option value="Bank">Bank</option>
                </select>
                {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
              </div>
     
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Logo (800x1200)</label>
        <input
          type="file"
          {...register("image")}
          className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>


    

      <div>
        <label className="block text-gray-700 font-semibold mb-1">Alt</label>
        <input
          type="text"
          {...register("Alt", { required: "Alt is required" })}
          className="w-full bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Alt"
        />
        {errors.Alt && <p className="text-red-500 text-sm mt-1">{errors.Alt.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-1">Bank / Mobile Banking Name</label>
        <input
          type="text"
          {...register("bankName", { required: "bankName is required" })}
          className="w-full bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Bank Name"
        />
        {errors.bankName && <p className="text-red-500 text-sm mt-1">{errors.bankName.message}</p>}
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Account Number / Phone Number</label>
        <input
          type="text"
          {...register("accountNumber", { required: "Account Number / Phone Number" })}
          className="w-full bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Account Number / Phone Number"
        />
        {errors.accountNumber && <p className="text-red-500 text-sm mt-1">{errors.accountNumber.message}</p>}
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Card Number (Optional) </label>
        <input
          type="text"
          {...register("cardNumber")}
          className="w-full bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Card Number"
        />
      </div>
      
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
    >
      {selectedMember ? "Update Payment Info" : "Add Payment Info"}
    </button>
  </form>
)}

          <h2 className="text-2xl font-semibold my-5">Payment Logo</h2>
          <div className="overflow-x-auto rounded-xl text-center">
      <table className="min-w-full text-center">
        <thead>
      <tr className='tr1'>
        <th className="text-center">{paymentLogo?.length}</th>
        <th className="">Bank / Mobile Banking Name</th>
        <th className="">Account Number</th>
        <th className="">Card Number</th>
        <th className="">Category</th>
        <th className="">Alt</th>
        <th className=" text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {paymentLogo?.map((member) => (
        <tr key={member.id} className="tr2">
       
          <td className="">
            <img
              src={member.image}
              alt={member.url}
              className="w-auto h-16  mx-auto "
            />
          </td>
          <td >{member.bankName}</td>
          <td >{member.accountNumber}</td>
          <td >{member.cardNumber}</td>
          <td >{member.category}</td>
          <td >{member.Alt}</td>
        
          <td >
           <div className='justify-center flex '>
               <button
                    className="delete"
                    onClick={() => handleDelete(member._id)}
                  >
                    <FaMinusSquare />
                  </button>
                  <button
  className="edit"
  onClick={() => openForm(member)}
>
  <FaEdit />
</button>

           </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
          </div>


        </div>
      </div>
    </div>
  );
};

export default OurPaymentLogo
;
