import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, ArrowRight } from "lucide-react";
import himalayanPeaks from "@/assets/himalayan-peaks.jpg";
import rajasthanPalace from "@/assets/rajasthan-palace.jpg";
import keralaBackwaters from "@/assets/kerala-backwaters.jpg";
import bengalTiger from "@/assets/bengal-tiger.jpg";
import spicesMarket from "@/assets/spices-market.jpg";

const WinterTours = () => {
   const [activeRegion, setActiveRegion] = useState("North India");
  const regions = {
    "North India": [
      { name: "Uttarakhand", packages: "50+ Packages", image: himalayanPeaks, description: "Land of the Gods with beautiful hill stations" },
      { name: "Rajasthan", packages: "30+ Packages", image: rajasthanPalace, description: "Royal heritage and desert landscapes" },
      { name: "Himachal Pradesh", packages: "60+ Packages", image: himalayanPeaks, description: "Scenic mountains and adventure sports" },
      { name: "Jammu & Kashmir", packages: "30+ Packages", image: himalayanPeaks, description: "Paradise on Earth with pristine valleys" },
      { name: "Uttar Pradesh", packages: "25+ Packages", image: spicesMarket, description: "Spiritual centers and historical monuments" },
      { name: "Delhi", packages: "20+ Packages", image: spicesMarket, description: "Capital city with rich Mughal heritage" },
      { name: "Ladakh", packages: "25+ Packages", image: himalayanPeaks, description: "High altitude desert with Buddhist culture" }
    ],
    "South India": [
      { name: "Kerala", packages: "40+ Packages", image: keralaBackwaters, description: "God's Own Country with backwaters" },
      { name: "Karnataka", packages: "25+ Packages", image: bengalTiger, description: "Garden city and wildlife sanctuaries" },
      { name: "Tamil Nadu", packages: "20+ Packages", image: spicesMarket, description: "Temple architecture and cultural heritage" },
      { name: "Andaman", packages: "15+ Packages", image: keralaBackwaters, description: "Pristine beaches and coral reefs" },
      { name: "Puducherry", packages: "10+ Packages", image: keralaBackwaters, description: "French colonial charm and beaches" },
      { name: "Andhra Pradesh", packages: "15+ Packages", image: spicesMarket, description: "Ancient temples and Buddhist sites" },
      { name: "Telangana", packages: "10+ Packages", image: spicesMarket, description: "Hi-tech city with historical monuments" }
    ],
    "East India": [
      { name: "Sikkim", packages: "40+ Packages", image: himalayanPeaks, description: "Himalayan kingdom with pristine nature" },
      { name: "Arunachal Pradesh", packages: "15+ Packages", image: himalayanPeaks, description: "Land of rising sun and tribal culture" },
      { name: "Meghalaya", packages: "10+ Packages", image: himalayanPeaks, description: "Abode of clouds with living root bridges" },
      { name: "Nagaland", packages: "15+ Packages", image: himalayanPeaks, description: "Hornbill festival and Naga culture" },
      { name: "Assam", packages: "25+ Packages", image: bengalTiger, description: "One-horned rhinos and tea gardens" },
      { name: "Odisha", packages: "20+ Packages", image: spicesMarket, description: "Jagannath temples and classical dance" },
      { name: "West Bengal", packages: "10+ Packages", image: spicesMarket, description: "Cultural capital and Darjeeling hills" }
    ],
    "West India": [
      { name: "Goa", packages: "15+ Packages", image: keralaBackwaters, description: "Beach paradise with Portuguese heritage" },
      { name: "Gujarat", packages: "30+ Packages", image: spicesMarket, description: "Vibrant culture and Rann of Kutch" },
      { name: "Maharashtra", packages: "20+ Packages", image: bengalTiger, description: "Bollywood hub and Ajanta Ellora caves" },
      { name: "Daman & Diu", packages: "5+ Packages", image: keralaBackwaters, description: "Coastal Union Territory with beaches" },
      { name: "Dadra & Nagar Haveli", packages: "5+ Packages", image: bengalTiger, description: "Tribal culture and forest reserves" }
    ],
    "Central India": [
      { name: "Madhya Pradesh", packages: "30+ Packages", image: bengalTiger, description: "Heart of India with tiger reserves" },
      { name: "Chhattisgarh", packages: "5+ Packages", image: bengalTiger, description: "Tribal culture and dense forests" },
      { name: "Kanha National Park", packages: "15+ Packages", image: bengalTiger, description: "Famous tiger reserve and wildlife" },
      { name: "Khajuraho", packages: "10+ Packages", image: spicesMarket, description: "UNESCO World Heritage temple complex" },
      { name: "Bandhavgarh", packages: "15+ Packages", image: bengalTiger, description: "Highest density of tigers in India" }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-5xl font-bold text-black text-left mb-8">
            Explore Top Destinations by Region
          </h2>

          <div className="flex flex-wrap gap-4 mb-12">
  {Object.keys(regions).map((region) => (
    <button
      key={region}
      onClick={() => setActiveRegion(region)}
      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 ${
        activeRegion === region
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-white text-black border-gray-300 hover:bg-blue-100 hover:text-blue-600"
      }`}
    >
      {region}
    </button>
  ))}
</div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {regions[activeRegion].map((destination) => (
    <Card
      key={destination.name}
      className="overflow-hidden hover-lift group border-0 shadow-soft cursor-pointer"
      onClick={() => window.open("/your-link/" + destination.name, "_blank")}
    >
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
       <Badge className="absolute top-3 right-3 bg-white/90 text-black hover:text-black-600 transition-colors duration-200">
  {destination.packages}
</Badge>

      </div>

      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-semibold text-black">
            {destination.name}
          </h3>
        </div>
        <p className="text-sm text-black mb-4 leading-relaxed">
          {destination.description}
        </p>
      </CardContent>
    </Card>
  ))}
</div>

      </div>
    </section>
  );
};

export default WinterTours;