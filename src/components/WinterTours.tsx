import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Star } from "lucide-react";

const WinterTours = () => {
  const tours = [
    {
      id: 1,
      title: "Kashmir Tour",
      price: "Start Form ₹ 23,000",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      size: "large" // Takes 2 columns
    },
    {
      id: 2,
      title: "Himachal Tour",
      price: "Start Form ₹ 27,000",
      image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 3,
      title: "Ayodhya Tour",
      price: "Start Form ₹ 33,000",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 4,
      title: "Kerala Tour",
      price: "Start Form ₹ 26,000",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 5,
      title: "Jagannath Puri Tour",
      price: "Start Form ₹ 36,000",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 6,
      title: "Nepal Tour",
      price: "Start Form ₹ 29,500",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
      size: "large"
    },
    {
      id: 7,
      title: "North-East Tour",
      price: "Start Form ₹ 30,500",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop",
      size: "large"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Winter Special Tours (2024-2025)
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Winter has arrived, and it's time to start planning an unforgettable winter getaway. 
            India offers travelers a wealth of exciting options for a winter vacation with friends, 
            family, and loved ones.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {tours.map((tour, index) => {
            // Define grid classes based on size and position
            let gridClass = "";
            if (tour.size === "large") {
              gridClass = index === 0 ? "col-span-2 row-span-2" : 
                         index === 5 ? "col-span-2" : 
                         "col-span-2";
            } else {
              gridClass = "col-span-1";
            }
            
            const heightClass = tour.size === "large" ? "h-80" : "h-40";
            
            return (
              <div 
                key={tour.id} 
                className={`${gridClass} ${heightClass} relative overflow-hidden rounded-lg group cursor-pointer hover:scale-105 transition-transform duration-300`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${tour.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-white font-semibold text-sm md:text-base lg:text-lg mb-4">
                    {tour.price}
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Inquire Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-lg px-8 py-3">
            View All Winter Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WinterTours;