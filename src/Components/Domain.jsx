const Card = ({ plan }) => {
  return (
    <div className="">
      <div className={`p-2 rounded-lg ${plan.headerBg}`}>
        <h2 className="text-xl font-bold text-center mt-1 mb-1">
          {plan.storage}
        </h2>
        <p className="text-center mt-1 mb-1">{plan.description}</p>
      </div>

      <div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80 h-auto md:h-96 flex flex-col justify-between">
          <p className="text-center text-4xl font-bold my-4">{plan.price}</p>
          <ul className="space-y-2 text-blue-900">
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <button className={`py-2 px-4 rounded ${plan.buttonBg} text-white`}>
              অর্ডার করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Domain = () => {
  const plans = [
    {
      storage: "১০ জিবি",
      description: "ফাস্ট হোস্টিং & ফ্রি .COM ডোমেইন",
      price: "৳৯৯৯",
      features: [
        "১০ জিবি SSD স্টোরেজ",
        "আনলিমিটেড ব্যান্ডউইথ",
        "৫ টি ইমেইল একাউন্ট/মাস",
        "৫ টি ডাটাবেজ একাউন্ট/মাস",
        "২৪/৭ সাপোর্ট",
      ],
      headerBg: "bg-blue-600 text-white",
      buttonBg: "bg-blue-600",
    },
    {
      storage: "৫০ জিবি",
      description: "ফাস্ট হোস্টিং & ফ্রি .COM ডোমেইন",
      price: "৳২৫৫০",
      features: [
        "৫০ জিবি SSD স্টোরেজ",
        "আনলিমিটেড ব্যান্ডউইথ",
        "১০ টি ইমেইল একাউন্ট/মাস",
        "১০ টি ডাটাবেজ একাউন্ট/মাস",
        "২৪/৭ সাপোর্ট",
      ],
      headerBg: "bg-black text-white",
      buttonBg: "bg-black",
    },
    {
      storage: "১০০ জিবি",
      description: "ফাস্ট হোস্টিং & ফ্রি .COM ডোমেইন",
      price: "৳৩৯৯৯",
      features: [
        "১০০ জিবি SSD স্টোরেজ",
        "আনলিমিটেড ব্যান্ডউইথ",
        "আনলিমিটেড ইমেইল একাউন্ট/মাস",
        "আনলিমিটেড ডাটাবেজ একাউন্ট/মাস",
        "২৪/৭ সাপোর্ট",
      ],
      headerBg: "bg-green-600 text-white",
      buttonBg: "bg-green-600",
    },
  ];

  return (
    <div className="bg-blue-900 p-4">
      <div className="text-center text-white mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          ফ্রি .COM ডোমেইনসহ <br /> সুপার ফাস্ট ক্লাউড হোস্টিং
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        {plans.map((plan, index) => (
          <Card key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Domain;
