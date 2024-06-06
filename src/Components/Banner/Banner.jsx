const Banner = () => {
  return (
    <section id="comp-lk89tpyf" tabIndex="-1" className="relative mt-36">
      <div id="bgLayers_comp-lk89tpyf" className="absolute inset-0">
        <div className="bg-green-800 opacity-20"></div>
        <div id="bgMedia_comp-lk89tpyf" className="w-full h-full"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-500">
              The digital <br /> agency built <br /> for small business
            </h1>
            <p className="text-lg mt-4 mb-6 text-gray-500">
              We understand the unique needs of small businesses and startups.
              Our services are designed to give your brand a competitive edge
              with custom web design, targeted ad campaigns, and impactful
              graphic design - all enriched with smart AI insights to optimize
              your success.
            </p>
            <a
              href="https://hellodigitalnetwork.com"
              target="_self"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors "
              aria-label="Contact Us"
            >
              Contact Us
              <svg
                className="ml-2"
                height="24"
                width="24"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.037-62.5-62.5S65.537 37.5 100 37.5s62.5 28.037 62.5 62.5-28.037 62.5-62.5 62.5zm30.09-60.584c-.055.101-.099.205-.164.302a3.99 3.99 0 0 1-.501.613l-26.597 26.597c-.78.781-1.805 1.172-2.828 1.172s-2.048-.391-2.828-1.172a4 4 0 0 1 0-5.656L116.943 104H73.4a4 4 0 0 1 0-8h43.542l-19.77-19.771a4 4 0 1 1 5.656-5.656l26.597 26.597c.187.187.354.392.501.613.065.097.109.201.164.302.07.127.147.25.203.386.055.132.086.27.126.405.034.114.078.223.101.341.103.517.103 1.05 0 1.566-.023.118-.068.227-.101.341-.04.136-.071.273-.126.405-.055.136-.132.259-.203.387z"></path>
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-1/2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <img
                src="https://static.wixstatic.com/media/11062b_df3f13d9ae37443c8866a8eb7e57b2d1~mv2_d_6612_4303_s_4_2.jpg/v1/fill/w_184,h_139,fp_0.30_0.39,q_80,usm_0.66_1.00_0.01,enc_auto/Modern%20Office.jpg"
                alt="Modern Office"
                className="w-full h-full object-cover"
                style={{ objectPosition: "30% 39%" }}
                fetchPriority="high"
              />
            </div>
            <div className="w-1/2 p-2">
              <img
                src="https://static.wixstatic.com/media/74789b58568643ba917e56747ca62863.jpg/v1/fill/w_143,h_138,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Workspace.jpg"
                alt="Workspace"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 50%" }}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
