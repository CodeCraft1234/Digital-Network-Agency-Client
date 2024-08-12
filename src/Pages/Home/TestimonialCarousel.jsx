import React from "react";
import { FaUser } from "react-icons/fa";

const testimonials = [
  {
    name: "Akash Ahmed",
    role: "Web Development",
    text: "Akash has been a fantastic team member, always delivering high-quality code on time. His expertise in web development is top-notch.",
    image: "https://via.placeholder.com/40", // Replace with actual image path
  },
  {
    name: "Lina Rahman",
    role: "Digital marketing",
    text: "Lina consistently goes above and beyond in her work. She has a keen eye for design and ensures that every project meets our high standards.",
    image: "https://via.placeholder.com/40", // Replace with actual image path
  },
  {
    name: "Tanvir Hasan",
    role: "Graphics design",
    text: "Tanvir is an exceptional developer who always brings innovative solutions to the table. He is a pleasure to work with and always delivers excellent results.",
    image: "https://via.placeholder.com/40", // Replace with actual image path
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="bg-gray-900 mx-14 py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl text-white font-bold">Cusomers Feedbacks</h2>
        <p className="text-gray-400 mt-4">
          Hear from our satisfied clients and team members.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4 text-orange-500">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.364 3.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728m1.414-1.414a12 12 0 10-17.142 17.142 12 12 0 0017.142-17.142z" />
                  <path d="M12 11.293l-4.95 4.95-1.414-1.414L10.586 12 6.636 8.05l1.414-1.414L12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
              <FaUser className="h-10 w-10 rounded-full"></FaUser>
                <div className="text-left">
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
