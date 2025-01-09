
import { Link, useParams } from "react-router-dom";
import useService from "../../Hook/useService";

const Card = () => {
  const filteredCards=[
    {
      "picture": "https://i.ibb.co/6mhVv65/course-1665409737.jpg",
      "title": "Professional Graphic Design",
      "category": "Graphics Design",
      "id": "1",
      "description": "Considering the growing demand for visual content, marketers are promoting their products through graphical ideas nowadays. The increasing need for graphic designers has unlocked many opportunities for the people who prefer working independently. A study shows, all the companies prioritize their visual acceptance, even a small company spends up to 500 dollars to create a perfect logo. If you are passionate about making designs, this updated Graphic Design course is for you.",
      "price": "49.99",
      "video":"https://www.youtube.com/embed/uOpmWcAXrls"
     
    },
    {
      "picture": "https://i.ibb.co/w6qSWXP/course-1662552115.jpg",
      "title": "Motion Graphics",
      "category": "Graphics Design",
      "id": "2",
      "description": "Motion graphics bring stunning visuals to life using movements . A report by MIT shows, human brain takes a brief moment, only 13 milliseconds to process visual content. As a result, many companies are using motion graphics to engage the audience with ideas. If you have the basic knowledge on making intro or broadcasting videos, this course is for you.",
      "price": "49.95",
      "video":"https://www.youtube.com/embed/1nNz_58fEb4"
     
    },
    {
      "picture": "https://i.ibb.co/QCW3ZXq/course-1662637290.jpg",
      "title": "UI/UX Design",
      "category": "Graphics Design",
      "id": "3",
      "description": "UX Design has become one of the top high demand jobs in the tech world. Companies are prioritizing on hiring skilled designers as it plays a crucial role in ensuring user friendly websites. A study shows, almost 77% of online business fail to survive in the competitive global market due to complex interface design. UX designers ensure the efficacy of the website, making it easily accessible to the users. If you like to work with graphical elements, this course is for you.",
      "price": "49.99",
      "video":"https://www.youtube.com/embed/mV8ftdZgvdQ"
     
    },
    {
      "picture": "https://i.ibb.co/7gsXtqV/course-1662795698.jpg",
      "title": "Web Development",
      "category": "Web Design",
      "id": "4",
      "description": "Web development is in high demand and a top-five technology job, with an anticipated 30.3% increase in demand for web developers from 2021 to 2031. Keep ahead of the competition by enrolling in our Comprehensive Web Development Course to learn the latest trends from experienced web developers.",
      "price": "49.99",
      "video":"https://www.youtube.com/embed/GLB8A-uCiEA"
     
    },
    {
        "picture": "https://i.ibb.co/7gsXtqV/course-1662795698.jpg",
        "title": "E-commers Website",
        "category": "Web Design",
        "id": "5",
        "description": "MERN Stack is a combination of four different technologies that is used to develop a website in an efficient manner. In this course, you can gain your expertise in three areas- Web Development, Web Design and App Development. Most of the companies nowadays are using the MERN Stack Programme for its easily customizable, cost-effective features. Enroll in this course to develop your skills in this field.",
        "price": "49.99",
        "video":"https://www.youtube.com/embed/wf4F2-9UXUo"
    },
    {
        "picture": "https://i.ibb.co/JQqSH47/course-1674371266.jpg",
        "title": "Business Website",
        "category": "Web Design",
        "id": "6",
        "description": "React js is one of the most popular frameworks that you can use to design your website interface. It ensures your convenience by providing you a hassle-free, flexible work experience. In addition, React js is built on an open source platform with an extensive library that simplifies the complex coding. Considering the feasibility, most of the developers prefer using this framework, you can also have your expertise with our advanced Front-End Development Course.",
        "price": "49.99",
         "video":"https://www.youtube.com/embed/GGf1JjSAKP4"
     
    },
    {
      "picture": "https://i.ibb.co.com/48v1BQs/1685030653456.jpg",
      "title": "Facebook Page Promotion",
      "category": "Digital Marketing",
      "id": "13",
      "description": "Learn how to promote your Facebook page effectively to reach a larger audience and engage with potential customers.",
      "dollerRate":"140",
      "price": "10"
  },
  {
      "picture": "https://i.ibb.co.com/qd2JW1h/Facebook-Ads.webp",
      "title": "Running Ads on Facebook",
      "category": "Digital Marketing",
      "id": "14",
      "description": "A beginner-friendly course on creating and running successful Facebook ad campaigns to drive traffic and increase conversions.",
      "dollerRate":"140",
      "price": "10"
  },
  {
      "picture": "https://i.ibb.co.com/nbjnfF1/CAMPAIGNMANAGEMENTFTIMG-copy.webp",
      "title": "Campaign Management",
      "category": "Digital Marketing",
      "id": "15",
      "description": "Master the basics of managing digital campaigns from start to finish to maximize your ad spend.",
      "dollerRate":"140",
      "price": "10"
  },
  {
      "picture": "https://i.ibb.co.com/jhGss8n/facebook-page-promotion-500x500.webp",
      "title": "Facebook Page Setup",
      "category": "Digital Marketing",
      "id": "16",
      "description": "Learn to set up a professional Facebook page for your brand to attract and engage followers.",
      "dollerRate":"140",
      "price": "10"
  },
  {

   

      "picture": " https://i.ibb.co.com/LNL5SRT/1634932275171.png",
      "title": "YouTube Channel Boosting",
      "category": "Digital Marketing",
      "id": "17",
      "description": "Discover techniques to grow your YouTube channel and reach a larger audience through effective promotion.",
      "dollerRate":"140",
      "price": "10"
  },
  {
      "picture": "https://i.ibb.co.com/mRZN5pk/tiktok-marketing-strategy.png",
      "title": "TikTok Growth Strategies",
      "category": "Digital Marketing",
      "id": "18",
      
      "description": "Gain insights into TikTok growth strategies to increase followers and engagement on the platform.",
      "dollerRate":"140",
      "price": "10"
  },
  {
    
      "picture": "https://i.ibb.co.com/3djvZtz/Faecbook-Business-Manager-001.jpg",
      "title": "Business Manager Setup",
      "category": "Digital Marketing",
      "id": "19",
     
      "description": "Step-by-step guidance on setting up Facebook Business Manager for managing multiple pages and ad accounts.",
      "dollerRate":"140",
      "price": "10"
  },
  {
      "picture": "https://i.ibb.co.com/JySRSTc/Instagram-Advertising-Cost-Everything-You-Need-To-Know.png",
      "title": "Instagram Ads Basics",
      "category": "Digital Marketing",
      "id": "20",
    
      "description": "Learn how to create, launch, and manage ads on Instagram to reach a visually-engaged audience.",
      "dollerRate":"140",
      "price": "10"
  },
  {
      "picture": "https://i.ibb.co.com/9Hy1hbD/1677832228219.jpg",
      "title": "LinkedIn Page Setup",
      "category": "Digital Marketing",
      "id": "21",
      
      "description": "Set up a LinkedIn company page to build your professional network and attract industry connections.",
      "dollerRate":"140",
      "price": "10"
  },
  {
      "picture": "https://i.ibb.co.com/GM2whmt/17-tools-1-blog.jpg",
      "title": "Content Creation for Social Media",
      "category": "Digital Marketing",
      "id": "22",
     
      "description": "Create compelling content that resonates with audiences across social media platforms.",
      "dollerRate":"140",
      "price": "10"
  }
,  
    {
        "picture": "https://i.ibb.co/qYj7Dv6/course-1663052131.jpg",
        "title": "Affiliate Marketing",
        "category": "Digital Marketing",
        "id": "7",
       
        "description": "Searching for an easy source of passive income? Then affiliate marketing can be on your to-do list. Google statistics show, almost 9% of affiliate marketers earn a hefty amount, around 50,000 dollars on a monthly basis. You only need guidelines and effective marketing techniques to excel in this sector. If you prefer a hassle-free, independent way of work, our Complete Affiliate Marketing Course is for you.",
        "dollerRate":"140",
        "price": "10"
    },
    {
        "picture": "https://i.ibb.co/fkPtHmS/course-1663052296.jpg",
        "title": "Google Adsense",
        "category": "Digital Marketing",
        "id": "8",
       
        "description": "Google Adsense; the largest ad network in the world to reach potential customers. Enrolling in our Complete Google AdSense Course can be an excellent investment for website owners and bloggers who want to maximize their earnings potential and improve their user experience.",
        "dollerRate":"140",
        "price": "10",
        "video":"https://www.youtube.com/embed/JcklujFmJu8"
    },
    {
        "picture": "https://i.ibb.co/Jv3Ggj4/course-1674372625.jpg",
        "title": "Content Writing",
        "category": "Digital Marketing",
        "id": "9",
       
        "description": "Do you aspire to be a great content writer? If yes, our course has much to offer you to furnish your writing skills. With the comprehensive topics and project-based works, you will gradually improve your competency towards mastery. Most of the companies boost their product sales through digital platforms and the demand for content writers is skyrocketing in the global market at present. So, enroll now to be ahead of others in this competitive field.",
        "dollerRate":"140",
        "price": "10"
    },
    {
        "picture": "https://i.ibb.co/qBcVZx7/course-1662962744.jpg",
        "title": "Search Engine Optimization",
        "category": "Digital Marketing",
        "id": "10",
       
        "description": "A study shows, almost 76% of people only go through the first page of a website to find the necessary information. You need to know the proper SEO strategies to rank your post or website on the first page of search engines. Our comprehensive SEO course can be your first priority if you want to be a digital marketer.",
        "dollerRate":"140",
        "price": "10",
        "video":"https://www.youtube.com/embed/hF515-0Tduk"
    },
    {
        "picture": "https://i.ibb.co/d5L8Q2M/course-1663052587.jpg",
        "title": "Social Media Marketing",
        "category": "Digital Marketing",
        "id": "11",
        
        "description": "Social media advertising can be an effective tool for increasing your business revenue. It easily connects the audience with your products, raising the chance of sales to a great extent. But success highly depends on your approach and strategies to attract potential customers. If you don't know how this course will lead you to the right path.",
        "dollerRate":"140",
        "price": "10",
        "video":"https://www.youtube.com/embed/HUhCyNp_wKU"
    }
  ]
  


  const stripHtmlTags = (str) => {
    const regex = /(<([^>]+)>)/gi;
    return str.replace(regex, "");
  };

  const [service] = useService();

  const params=useParams()
  console.log(service,params.category);

    return (
        <div className=" lg:pt-44 lg:mx-24">
          <h1 className="text-4xl font-bold text-start text-gray-800 my-5 mx-5">{params?.category}</h1>
          <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {service?.filter(f=>f.category === params?.category)?.map((item, index) => (
          <Link key={index} to={`/card/${item.id}`}>
          <div key={index} className="px-2 ">
       <div className="bg-white shadow-lg border-gray-300 border rounded-xl h-[520px] overflow-hidden flex flex-col">
         <img
           src={item.picture || "placeholder.jpg"}
           alt={item.title || "Service"}
           className="w-full h-64  transition-transform duration-500 transform hover:scale-105"
         />
         <div className="p-6 flex flex-col flex-grow">
           <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-red-500 transition-colors duration-300">
             {item.title}
           </h2>
           <div className="flex items-center text-yellow-500 mb-4">
             {Array.from({ length: 5 }, (_, i) => (
               <span
                 key={i}
                 className={i < item.rating ? "fas fa-star" : "far fa-star"}
               ></span>
             ))}
             <span className="ml-3 text-gray-600 text-sm">
               {item.reviews} Reviews
             </span>
           </div>
           <p className="text-gray-700 mb-4 leading-relaxed">
             {item.description && item.description.split(' ').length > 0
               ? item.description.split(' ').slice(0, 15).join(' ') + "..."
               : "No description available"}
           </p>
           <div className="flex-grow"></div> {/* This is the flex-grow element to push the button to the bottom */}
           <div className="flex justify-between items-center mt-auto">
             <span className="text-xl font-semibold text-red-600">{`${
               item.price ? `$${item.price}` : "Price Unavailable"
             }`}</span>
             <Link
               to={`/card/${item._id}`}
               className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg hover:from-red-600 hover:to-orange-600 transition duration-300"
             >
               Click for discount
             </Link>
           </div>
         </div>
       </div>
     </div>
          </Link>
        ))}
                  </div>
          </div>
           
        </div>
    );
};

export default Card;