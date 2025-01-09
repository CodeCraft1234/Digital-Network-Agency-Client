import  {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosPublic from '../Axios/useAxiosPublic';
import Swal from 'sweetalert2';
import { FaEdit,  FaMinusSquare, } from 'react-icons/fa';
import useWorks from '../Hook/useWorks';

const OurWorks = () => {
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = useAxiosPublic();
  const [works, refetch] = useWorks();
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
        AxiosPublic.delete(`/works/${id}`).then((res) => {
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
  
      // Upload image only if a new image is selected
      if (data.image?.length > 0) {
        const formData = new FormData();
        formData.append("image", data.image[0]);
  
        const imgRes = await axios.post(image_hosting_api, formData);
        imageUrl = imgRes.data.data.display_url;
      }
  
      const teamData = {
        url: data.url,
        image: imageUrl,
        category: data.category,
        Alt: data.Alt,
       
      };
  
      if (selectedMember) {
        // Update logic
        await AxiosPublic.patch(`/works/${selectedMember._id}`, teamData);
        alert("Team member updated successfully!");
      } else {
        // Add logic
        await AxiosPublic.post("/works", teamData);
        alert("Team member added successfully!");
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
      setValue("name", member.name);
      setValue("url", member.url);
      setValue("category", member.url);
      setValue("Alt", member.Alt);
    } else {
      reset();
    }
    setIsFormVisible(true);
  };
console.log(works);
  return (
    <div className='mx-5 text-gray-700'>
      <div className="my-5 w-full">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 mb-5"
          >
            {isFormVisible ? 'Cancel' : 'Add New Works'}
          </button>

          {isFormVisible && (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div className="grid lg:grid-cols-4 gap-3">
    
       {/* Category */}
       <div>
                <label className="block text-sm font-medium mb-1">Category:</label>
                
                <select
                  {...register("category", { required: "Category is required" })}
                  className="w-full p-2 bg-white border-gray-500 border rounded-md"
                >
                    <option selected disabled value="">Select Category</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Design">Web Design</option>
                </select>
                {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
              </div>

              <div>
        <label className="block text-gray-700 font-semibold mb-1">Website/Page Link</label>
        <input
          type="text"
          {...register("url", { required: "url is required" })}
          className="w-full bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter url"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Image</label>
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
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
    >
      {selectedMember ? "Update Works" : "Add Works"}
    </button>
  </form>
)}

          <h2 className="text-2xl font-semibold my-5">Works</h2>
          <div className="overflow-x-auto rounded-xl text-center">
      <table className="min-w-full text-center">
        <thead>
      <tr className='tr1'>
        <th className="text-center">{works?.length}</th>
        <th className="">Website</th>
        <th className="">Alt</th>
        <th className=" text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {works?.map((member) => (
        <tr key={member.id} className="tr2">
       
          <td className="">
            <img
              src={member.image}
              alt={member.url}
              className="w-auto h-16 object-cover mx-auto "
            />
          </td>
          <td >{member.url}</td>
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

export default OurWorks
;
