import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Star } from "lucide-react";

const WinterTours = () => {
  const tours = [
    {
      id: 1,
      title: "Kashmir Winter Wonderland",
      location: "Srinagar, Gulmarg, Pahalgam",
      duration: "6 Days / 5 Nights",
      price: "₹25,999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      highlights: ["Snow Activities", "Shikara Ride", "Local Cuisine"],
      discount: "20% OFF"
    },
    {
      id: 2,
      title: "Rajasthan Royal Heritage",
      location: "Jaipur, Udaipur, Jodhpur",
      duration: "8 Days / 7 Nights",
      price: "₹32,999",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1599661046827-dacde645fe20?w=400&h=300&fit=crop",
      highlights: ["Palace Tours", "Desert Safari", "Cultural Shows"],
      discount: "15% OFF"
    },
    {
      id: 3,
      title: "Goa Beach Paradise",
      location: "North & South Goa",
      duration: "5 Days / 4 Nights",
      price: "₹18,999",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
      highlights: ["Beach Activities", "Water Sports", "Nightlife"],
      discount: "25% OFF"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                    {tour.discount}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  <Star className="h-3 w-3 fill-current text-amber-400" />
                  <span>{tour.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {tour.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-600">
                      {tour.price}
                    </span>
                    <span className="text-sm text-muted-foreground"> per person</span>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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