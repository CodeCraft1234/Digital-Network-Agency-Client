import { Helmet } from "react-helmet-async";
import { useState } from "react";

import Swal from "sweetalert2";
import useAxiosPublic from "../Axios/useAxiosPublic";

const AddEmail = () => {
  const [email, setFacebookID] = useState("");

  const AxiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date();
    const numberInfoo = {
      email,

      date,
    };

    AxiosPublic.post("/email", numberInfoo).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Email has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });

    // Reset IDs after submission
    setFacebookID("");
  };

  return (
    <div className="text-white  flex items-center mt-3 justify-center overflow-x-hidden">
      <Helmet>
        <title>PerfectArch | AddEmail</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full ">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Add Email
        </h2>
        <form onSubmit={handleSubmit} action="#" method="post">
          {/* Facebook */}
          <div className="mb-4 flex items-center">
            <input
              type="email"
              id="email"
              name="email"
              className="flex-1 bg-white text-black p-2 border rounded"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setFacebookID(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg p-2 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmail;
