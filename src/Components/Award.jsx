const Award = () => {
  const stats = [
    { icon: "📊", value: 1175, label: "Projects Done" },
    { icon: "😊", value: 844, label: "Happy Clients" },
    { icon: "👍", value: 1240, label: "Ratings Customer" },
    { icon: "🏆", value: 87, label: "Award Winner" },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-5xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
