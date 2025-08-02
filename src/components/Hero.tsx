import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-mountain-sunset.jpg";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { number: "1M+", label: "TRAVELERS", icon: "👥" },
    { number: "60+ Yrs. of", label: "EXPERIENCE", icon: "🏆" },
    { number: "Top Quality", label: "FOOD", icon: "🍽️" },
    { number: "Best Price", label: "GUARANTEED", icon: "💎" },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-overlay-dark" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 hero-text">
            Let us Help You Plan Your
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-8 hero-text">
            Lifetime Memories
          </h2>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative glass-effect rounded-full p-2">
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Search Destinations (Kashmir, Goa, Rajasthan...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-lg px-6"
                />
                <Button size="icon" className="rounded-full travel-gradient">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;