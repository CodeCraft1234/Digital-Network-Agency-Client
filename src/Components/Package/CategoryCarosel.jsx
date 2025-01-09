import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryCarosel = () => {

  const ventures=[
    {
        image:'https://i.ibb.co/6mhVv65/course-1665409737.jpg'
        
    },
    {
        image:'https://i.ibb.co/6mhVv65/course-1665409737.jpg'
    },
    {
        image:'https://i.ibb.co/6mhVv65/course-1665409737.jpg'
        
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-10 ">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center text-gray-700 font-bold my-10">
           Category Service
        </h2>

        <Slider {...settings} className="mx-auto px-3 container">
          {ventures?.map((member, index) => (
            <div key={index} className="p-2">
              <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="relative group p-10 w-full h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default CategoryCarosel;
