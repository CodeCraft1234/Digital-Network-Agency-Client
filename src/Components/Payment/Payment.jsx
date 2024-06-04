const Payment = () => {
  const merchants = [
    {
      name: "bKash",
      icon: "https://i.ibb.co/520Py6s/bkash-1.png",
      numbers: ["01990779766", "01309014614"],
    },
    {
      name: "Nagad",
      icon: "https://i.ibb.co/JQBQBcF/nagad-marchant.png",
      numbers: ["01309014614"],
    },
    {
      name: "Rocket",
      icon: "https://i.ibb.co/QkTM4M3/rocket.png",
      numbers: ["013090146143"],
    },
    {
      name: "SSLCOMMERZ",
      icon: "https://i.ibb.co/5KMZVph/images-1.png",
      numbers: [],
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Our Payment Merchant
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-8 m-4">
          {merchants.map((merchant, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow text-black"
            >
              <img
                className="w-44 h-36 mb-4"
                src={merchant.icon}
                alt={merchant.name}
              />
              <h6 className="text-xl font-semibold">{merchant.name}</h6>
              {merchant.numbers.map((number, idx) => (
                <p key={idx} className="text-lg">
                  {number}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
