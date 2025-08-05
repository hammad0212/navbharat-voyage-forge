import { useState } from "react";

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState("Wildlife");

  const categories = [
    { name: "Wildlife", packages: "70+", icon: "🐅" },
    { name: "Heritage", packages: "25+", icon: "🏛️" },
    { name: "Trekking", packages: "70+", icon: "🏔️" },
  ];

  const tours = [
    {
      title: "Chardham Yatra Package 2025",
      duration: "11 Nights - 12 Days",
      bgColor: "from-blue-400 to-teal-400"
    },
    {
      title: "Golden Triangle Tour",
      duration: "6 Nights - 7 Days", 
      bgColor: "from-amber-400 to-orange-400"
    },
    {
      title: "Leh Ladakh Tours",
      duration: "6 Nights - 7 Days",
      bgColor: "from-purple-400 to-blue-400"
    },
    {
      title: "Adi Kailash Yatra 2025",
      duration: "8 Nights - 9 Days",
      bgColor: "from-green-400 to-emerald-400"
    },
    {
      title: "Best of Sikkim Tour",
      duration: "8 Nights - 9 Days",
      bgColor: "from-pink-400 to-rose-400"
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Let us plan you a perfect{" "}
                <span className="text-orange-500">India Holiday</span>
              </h1>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Tour My India, one of the best travel agencies in India, offers custom-crafted tour packages for unforgettable holiday experiences across the country.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                    activeCategory === category.name
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.packages} Packages</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Content */}
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg border border-orange-200 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="text-sm font-medium text-gray-700">
                      {activeCategory} Experience {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Tour Cards */}
          <div className="space-y-4">
            {tours.map((tour, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-xl bg-gradient-to-r ${tour.bgColor} text-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-white/90">{tour.duration}</p>
                </div>
                <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="flex justify-center items-center gap-12 mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xl">🇮🇳</span>
            </div>
            <p className="text-sm font-medium text-gray-700">India Tours</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-xl">🌍</span>
            </div>
            <p className="text-sm font-medium text-gray-700">International Tours</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-xl">💒</span>
            </div>
            <p className="text-sm font-medium text-gray-700">Destination Wedding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
