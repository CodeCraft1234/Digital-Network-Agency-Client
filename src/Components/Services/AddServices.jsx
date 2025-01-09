import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaMinusSquare } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Axios/UseAxiosPublic";
import useService from "../../Hook/useService";

const AddServices = () => {
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = useAxiosPublic();
  const [service, refetch] = useService();
  const [selectedService, setSelectedService] = useState(null); // State to manage selected service for edit
  const { register, handleSubmit,watch, reset, setValue, formState: { errors } } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Set form values if editing an existing service
  useEffect(() => {
    if (selectedService) {
      setValue("title", selectedService.title);
      setValue("category", selectedService.category);
      setValue("picture", selectedService.picture);
      setValue("description", selectedService.description);
      setValue("price", selectedService.price);
      setValue("websiteLink", selectedService.websiteLink);
    } else {
      reset(); // Reset form when no service is selected
    }
  }, [selectedService, setValue, reset]);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    try {
      let imageUrl = "";

      // Upload image to ImgBB if an image is selected
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const imageResponse = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });

        const imageData = await imageResponse.json();

        if (imageData.success) {
          imageUrl = imageData.data.display_url;
        } else {
          throw new Error("Image upload failed!");
        }
      }

      // Prepare data for the request
      const newServiceData = {
        ...data,
        picture: imageUrl || selectedService?.picture,
      };

      if (selectedService) {
        // Update existing service (PATCH)
        const response = await AxiosPublic.patch(`/service/${selectedService._id}`, newServiceData);
        console.log("Service Data Updated:", response.data);
        refetch()
        Swal.fire("Success", "Service updated successfully!", "success");
      } else {
        // Add new service (POST)
        const response = await AxiosPublic.post("/service", newServiceData);
        console.log("Service Data Submitted:", response.data);
        refetch()
        Swal.fire("Success", "Service added successfully!", "success");
      }

      // Reset form after successful submission
      reset();
      setImageFile(null);
      setSelectedService(null);
    } catch (error) {
      console.error("Error submitting service data:", error);
      Swal.fire("Error", "Failed to add or update the service. Please try again.", "error");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to delete this service?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete service",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosPublic.delete(`/service/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Service deleted successfully!",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const openForm = (member = null) => {
    setSelectedService(member);
    setIsFormVisible(true);
  };

  return (
    <div className="mx-5 text-gray-700">
      <div className="my-5 w-full">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 mb-5"
          >
            {isFormVisible ? "Cancel" : "Add New Service"}
          </button>

          {isFormVisible && (
           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-gray-700">
           {/* Picture Upload */}
           <div>
             <label className="block text-gray-700 font-semibold mb-1">Image</label>
             <input
               type="file"
               onChange={handleImageChange}
               accept="image/*"
               className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>
         
           {/* Title */}
           <div>
             <label className="block text-sm font-medium mb-1">Title:</label>
             <input
               type="text"
               {...register("title", { required: "Title is required" })}
               placeholder="Enter service title"
               className="w-full p-2 bg-white border-gray-500 border rounded-md"
             />
             {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
           </div>
         
           {/* Category */}
           <div>
             <label className="block text-sm font-medium mb-1">Category:</label>
             <select
               {...register("category", { required: "Category is required" })}
               onChange={(e) => setValue("category", e.target.value)}
               className="w-full p-2 bg-white border-gray-500 border rounded-md"
             >
               <option selected disabled value="">Select Category</option>
               <option value="Digital Marketing">Digital Marketing</option>
               <option value="Web Design">Web Design</option>
               <option value="Graphic Design">Graphic Design</option>
             </select>
             {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
           </div>
         
           {/* Conditional Website Link Field */}
           {watch("category") === "Web Design" && (
             <div>
               <label className="block text-sm font-medium mb-1">Website Link:</label>
               <input
                 type="text"
                 {...register("websiteLink", { required: "Website Link is required" })}
                 placeholder="Enter website link"
                 className="w-full p-2 border border-gray-500 bg-white rounded-md"
               />
               {errors.websiteLink && <p className="text-red-500 text-xs">{errors.websiteLink.message}</p>}
             </div>
           )}
         
           {/* Description */}
           <div>
             <label className="block text-sm font-medium mb-1">Description:</label>
             <textarea
               {...register("description", {
                 required: "Description is required",
                 validate: {
                   minWords: (value) => {
                     const wordCount = value.trim().split(/\s+/).length;
                     return wordCount >= 15 || "Description must be at least 15 words";
                   },
                 },
               })}
               placeholder="Enter service description"
               rows="5"
               className="w-full p-2 border border-gray-500 bg-white rounded-md"
             ></textarea>
             {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
           </div>
         
           {/* Price */}
           <div>
             <label className="block text-sm font-medium mb-1">Price:</label>
             <input
               type="number"
               {...register("price", { required: "Price is required" })}
               placeholder="Enter service price"
               className="w-full p-2 border border-gray-500 bg-white rounded-md"
             />
             {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
           </div>
         
           {/* Submit Button */}
           <div className="text-center">
             <button
               type="submit"
               className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
             >
               {selectedService ? "Update Service" : "Add Service"}
             </button>
           </div>
         </form>
         
          )}

          {/* Services Table */}
          <div className="overflow-x-auto rounded-xl text-center mt-6">
            <table className="min-w-full text-center">
              <thead>
                <tr>
                  <th className="text-center">{service?.length}</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {service?.map((member) => (
                  <tr key={member._id}>
                    <td>
                      <img
                        src={member.picture}
                        alt={member.title}
                        className="w-20 h-20 object-cover mx-auto rounded-lg"
                      />
                    </td>
                    <td>{member.title}</td>
                    <td>{member.category}</td>
                    <td>{member.price}</td>
                    <td>
                      <div className="flex justify-center space-x-3">
                        <button
                          className="text-red-500"
                          onClick={() => handleDelete(member._id)}
                        >
                          <FaMinusSquare />
                        </button>
                        <button
                          className="text-blue-500"
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

export default AddServices;
