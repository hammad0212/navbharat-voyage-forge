import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-mountain-sunset.jpg";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const searchRef = useRef(null);

  // Sample destinations data
  const destinations = [
    { name: "Kashmir", type: "Hill Station", description: "Paradise on Earth with beautiful valleys" },
    { name: "Goa", type: "Beach", description: "Beautiful beaches and nightlife" },
    { name: "Rajasthan", type: "Heritage", description: "Royal palaces and desert culture" },
    { name: "Kerala", type: "Backwaters", description: "God's own country with backwaters" },
    { name: "Himachal Pradesh", type: "Mountain", description: "Snow-capped mountains and valleys" },
    { name: "Uttarakhand", type: "Adventure", description: "Spiritual and adventure destinations" },
    { name: "Andaman", type: "Island", description: "Crystal clear waters and coral reefs" },
    { name: "Leh Ladakh", type: "Adventure", description: "High altitude desert mountains" },
    { name: "Manali", type: "Hill Station", description: "Popular hill station in Himachal" },
    { name: "Shimla", type: "Hill Station", description: "Queen of hills" },
    { name: "Darjeeling", type: "Hill Station", description: "Tea gardens and mountain views" },
    { name: "Agra", type: "Heritage", description: "Home to the iconic Taj Mahal" },
  ];

  // Filter destinations based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredDestinations([]);
      setShowResults(false);
      return;
    }

    const filtered = destinations.filter(destination =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredDestinations(filtered);
    setShowResults(true);
  }, [searchQuery]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDestinationClick = (destination) => {
    setSearchQuery(destination.name);
    setShowResults(false);
  };

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
      
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(122, 82, 39, 0.7)' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 hero-text">
            Let us Help You Plan Your
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-400 mb-8 hero-text">
            Lifetime Memories
          </h2>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16" ref={searchRef}>
            <div className="relative backdrop-blur-sm bg-white/90 rounded-full p-2 shadow-lg">
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Search Destinations (Kashmir, Goa, Rajasthan...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent text-gray-800 placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg px-6"
                />
                <Button size="icon" className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Search Results Dropdown */}
              {showResults && filteredDestinations.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-80 overflow-y-auto z-50">
                  {filteredDestinations.map((destination, index) => (
                    <div
                      key={index}
                      onClick={() => handleDestinationClick(destination)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-800 text-sm truncate">{destination.name}</div>
                        <div className="text-xs text-orange-600 font-medium">{destination.type}</div>
                        <div className="text-xs text-gray-600 line-clamp-1">{destination.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* No Results */}
              {showResults && filteredDestinations.length === 0 && searchQuery.trim() !== "" && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50">
                  <div className="text-center text-gray-500 text-sm">
                    No destinations found for "{searchQuery}"
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">
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