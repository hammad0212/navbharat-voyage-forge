import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import tajMahalHero from "@/assets/taj-mahal-hero.jpg";
import keralaBackwaters from "@/assets/kerala-backwaters.jpg";
import himalayanPeaks from "@/assets/himalayan-peaks.jpg";
import rajasthanPalace from "@/assets/rajasthan-palace.jpg";
import bengalTiger from "@/assets/bengal-tiger.jpg";
import { ArrowRight } from "lucide-react";
import kashmir from "@/assets/kashmir.jpg";
import goa from "@/assets/goa.jpg";

const FeaturedTours = () => {
  const featuredTours = [
    {
      id: 1,
      title: "Himachal",
      packages: "40+ Packages",
      image: himalayanPeaks,
      badge: "Adventure",
    },
    {
      id: 2,
      title: "Kerala",
      packages: "45+ Packages",
      image: keralaBackwaters,
      badge: "Premium",
    },
    {
      id: 3,
      title: "Rajasthan",
      packages: "35+ Packages",
      image: rajasthanPalace,
      badge: "Luxury",
    },
    {
      id: 4,
      title: "Goa",
      packages: "50+ Packages",
      image: goa,
      badge: "Best Seller",
    },
    {
      id: 5,
      title: "Kashmir",
      packages: "60+ Packages",
      image: kashmir,
      badge: "Wildlife",
    },
  ];

  const getBadgeColor = (badge: string) => {
    return "bg-white text-black hover:text-blue-600";
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-black text-left">
            Top Trending Destinations
          </h2>
          <div className="flex items-center space-x-1 text-primary font-semibold hover:underline cursor-pointer">
            <span>View All Tours</span>
            <ArrowRight className="w-4 h-4 text-red-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featuredTours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden group rounded-lg border-0 shadow-none cursor-pointer"
            >
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <Badge
                  className={`absolute top-3 right-3 px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${getBadgeColor(tour.badge)}`}
                >
                  {tour.badge}
                </Badge>
              </div>
              <div className="mt-3 text-left px-2">
                <h3 className="text-lg font-semibold text-black">
                  {tour.title}
                </h3>
                <p className="text-gray-700">{tour.packages}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
