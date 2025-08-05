import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Central India");

  const tabs = ["North India", "South India", "East India", "West India", "Central India"];

  const destinations = {
    "North India": [
      { name: "Kashmir", packages: "25+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "large" },
      { name: "Himachal Pradesh", packages: "30+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Uttarakhand", packages: "20+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Punjab", packages: "15+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "small" },
    ],
    "South India": [
      { name: "Kerala", packages: "35+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "large" },
      { name: "Tamil Nadu", packages: "28+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Karnataka", packages: "22+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Andhra Pradesh", packages: "18+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "small" },
    ],
    "East India": [
      { name: "West Bengal", packages: "25+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "large" },
      { name: "Odisha", packages: "20+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Jharkhand", packages: "15+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Assam", packages: "18+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "small" },
    ],
    "West India": [
      { name: "Rajasthan", packages: "40+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "large" },
      { name: "Gujarat", packages: "25+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Goa", packages: "30+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Maharashtra", packages: "35+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "small" },
    ],
    "Central India": [
      { name: "Madhya Pradesh", packages: "30+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "large" },
      { name: "Chhattisgarh", packages: "20+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Kanha National Park", packages: "15+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Khajuraho", packages: "18+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "small" },
      { name: "Bandhavgarh", packages: "15+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "medium" },
      { name: "Bhopal", packages: "20+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "small" },
      { name: "Ujjain", packages: "15+ PACKAGES", image: "/lovable-uploads/435fb14f-4a36-4e03-af38-510abc6faec4.png", size: "small" },
    ],
  };

  const getCardClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 h-80";
      case "medium":
        return "col-span-1 row-span-2 h-80";
      case "small":
        return "col-span-1 row-span-1 h-36";
      default:
        return "col-span-1 row-span-1 h-36";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Explore Top Destinations by Region
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 bg-muted/30 p-2 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-4 auto-rows-min gap-4 max-w-6xl mx-auto">
          {destinations[activeTab]?.map((destination, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${getCardClasses(destination.size)}`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold mb-1">{destination.name}</h3>
                <p className="text-orange-400 text-sm font-medium">{destination.packages}</p>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
