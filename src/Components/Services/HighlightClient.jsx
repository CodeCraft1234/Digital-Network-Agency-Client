import React, { useState, useEffect } from 'react';

const HighlightClients = () => {
  const bgImageUrl = 'https://i.ibb.co/bPRLS1X/designer-designing-web-page-3d-character-illustration-png.webp'; // Replace this with your actual image URL

  const [happyClients, setHappyClients] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [daysOfWork, setDaysOfWork] = useState(0);
  const [awardWinner, setAwardWinner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (happyClients < 1000) {
        setHappyClients(happyClients + 10); // Adjust increment value for speed
      }
      if (projectsDone < 2000) {
        setProjectsDone(projectsDone + 20); // Adjust increment value for speed
      }
      if (daysOfWork < 50000) {
        setDaysOfWork(daysOfWork + 100); // Adjust increment value for speed
      }
      if (awardWinner < 150) {
        setAwardWinner(awardWinner + 1); // Adjust increment value for speed
      }
    }, 30); // Adjust interval duration for speed

    // Clear interval after 3 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => clearInterval(interval);
  }, [happyClients, projectsDone, daysOfWork, awardWinner]);

  return (
    <section
      className="relative  bg-cover bg-center bg-no-repeat h-96"
      style={{ 
        backgroundImage: `url(${bgImageUrl})`, 
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover', // Ensure image covers the entire section
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-500 opacity-75"></div>
      <div className="relative z-10 p-5 grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full ">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold mb-4">
            Your Partner in Web Design, Graphics, and Digital Marketing Solutions
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-xl mb-8 ">
            We specialize in crafting compelling digital experiences through expert web design, innovative graphics solutions, and impactful digital marketing strategies. Our passion drives us to deliver excellence in every project, ensuring your online presence stands out.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-white">
          <div className="bg-transparent border border-white p-4 rounded-lg text-center">
            <h2 className="text-3xl font-bold">{happyClients}</h2>
            <p className="text-xl">Happy Clients</p>
          </div>
          <div className="bg-transparent border border-white p-4 rounded-lg text-center">
            <h2 className="text-3xl font-bold">{projectsDone}</h2>
            <p className="text-xl">Projects Completed</p>
          </div>
          <div className="bg-transparent border border-white p-4 rounded-lg text-center">
            <h2 className="text-3xl font-bold">{daysOfWork}</h2>
            <p className="text-xl">Hours of Expertise</p>
          </div>
          <div className="bg-transparent border border-white p-4 rounded-lg text-center">
            <h2 className="text-3xl font-bold">{awardWinner}</h2>
            <p className="text-xl">Award Winner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightClients;
