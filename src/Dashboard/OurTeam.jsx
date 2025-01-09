import  {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosPublic from '../Axios/useAxiosPublic';
import useTeam from '../Hook/useTeam';
import Swal from 'sweetalert2';
import { FaEdit, FaFacebookF, FaInstagram, FaLinkedinIn, FaMinusSquare, FaTwitter } from 'react-icons/fa';

const OurTeam = () => {
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = useAxiosPublic();
  const [team, refetch] = useTeam();
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        AxiosPublic.delete(`/team/${id}`).then((res) => {
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
        name: data.name,
        image: imageUrl,
        skill: data.skill,
        contactNumber: data.contactNumber,
        email: data.email,
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
        linkedin: data.linkedin,
      };
  
      if (selectedMember) {
        // Update logic
        await AxiosPublic.patch(`/team/${selectedMember._id}`, teamData);
        alert("Team member updated successfully!");
      } else {
        // Add logic
        await AxiosPublic.post("/team", teamData);
        alert("Team member added successfully!");
      }
  
      refetch();
      reset();
      setIsModalOpen(false);
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
      setValue("skill", member.skill);
      setValue("contactNumber", member.contactNumber);
      setValue("email", member.email);
      setValue("facebook", member.facebook);
      setValue("instagram", member.instagram);
      setValue("linkedin", member.linkedin);
      setValue("twitter", member.twitter);
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
            {isFormVisible ? 'Cancel' : 'Add New Team Member'}
          </button>

          {isFormVisible && (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div className="grid lg:grid-cols-2 gap-3">
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter name"
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
    </div>

    <div className="grid lg:grid-cols-3 gap-3">
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Skill</label>
        <select
          {...register("skill", { required: "Skill is required" })}
          className="w-full bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a skill</option>
          <option value="CEO & Founder">CEO & Founder</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Member">MAnager</option>
        </select>
        {errors.skill && <p className="text-red-500 text-sm mt-1">{errors.skill.message}</p>}
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Contact Number</label>
        <input
          type="text"
          {...register("contactNumber", { required: "Contact number is required", pattern: { value: /^[0-9]+$/, message: "Enter a valid contact number" } })}
          className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter contact number"
        />
        {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>}
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
    </div>

    <div className="grid lg:grid-cols-4 gap-3">
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Facebook</label>
        <input
          type="text"
          {...register("facebook")}
         className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Facebook link"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Instagram</label>
        <input
          type="text"
          {...register("instagram")}
          className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Instagram link"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">LinkedIn</label>
        <input
          type="text"
          {...register("linkedin")}
          className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter LinkedIn link"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Twitter</label>
        <input
          type="text"
          {...register("twitter")}
          className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Twitter link"
        />
      </div>
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
    >
      {selectedMember ? "Update Member" : "Add Team Member"}
    </button>
  </form>
)}

          <h2 className="text-2xl font-semibold my-5">Team Members</h2>
          
          <div className="overflow-x-auto rounded-xl text-center">
      <table className="min-w-full text-center">
        <thead>
      <tr className='tr1'>
        <th className="text-center">{team?.length}</th>
        <th className="">Name</th>
        <th className="">Skill</th>
        <th className="">Contact Number</th>
        <th className="">Email</th>
        <th className="texxt-center">Social</th>
        <th className=" text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {team?.map((member) => (
        <tr key={member.id} className="tr2">
       
          <td className="">
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 object-cover mx-auto rounded-full"
            />
          </td>
          <td >{member.name}</td>
          <td >{member.skill}</td>
          <td >{member.contactNumber}</td>
          <td >{member.email}</td>
          <td >
             <div className="flex justify-center gap-2">
                                <a
                                  href={member.facebook}
                                 className="icon2"
                                >
                                  <FaFacebookF />
                                </a>
                                <a
                                  href={member.twitter}
                                  className="icon2"
                                >
                                  <FaTwitter />
                                </a>
                                <a
                                  href={member.instagram || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="icon2"
                                >
                                  <FaInstagram />
                                </a>
                                <a
                                  href={member.linkedin || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                 className="icon2"
                                >
                                  <FaLinkedinIn />
                                </a>
                               
                              </div>
          </td>
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

export default OurTeam;
