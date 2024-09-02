import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ title, subTitle }) => {
  return (
    <section className="bg-[#05a0db] to-red-700 text-white py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2">
          <Link to="/" className="hover:underline">Home</Link> {subTitle}
        </p>
      </div>
    </section>
  );
};

export default Banner;
