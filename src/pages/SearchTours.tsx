import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calendar, MapPin, Users, Grid, List, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SearchTours = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const tours = [
    {
      id: 1,
      title: "Kashmir Deluxe Tour(7N/8D) [KSP-2024-2]",
      subtitle: "2 Srinagar - 1 Gulmarg - 2 Pahalgam - 2 Srinagar",
      duration: "7 Nights/8 Days",
      location: "Srinagar",
      price: 34500,
      originalPrice: 45000,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      tag: "Group Tour, Family Tour",
      bestTime: "Best Time to Visit"
    },
    {
      id: 2,
      title: "Kashmir Vaishnodevl Deluxe (8N/9D) [KSP-2024-6]",
      subtitle: "1 Jammu - 2 Srinagar - 1 Gulmarg - 2 Pahal gam - 1 [...]",
      duration: "8 Nights/9 Days",
      location: "Jammu",
      price: 39000,
      originalPrice: 50000,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
      tag: "Group Tour, Family Tour",
      bestTime: "Best Time to Visit"
    },
    {
      id: 3,
      title: "Kashmir Vaishnodevl Deluxe (8N/9D) [KSP-2024-7]",
      subtitle: "1 Jammu - 2 Srinagar - 1 Gulmarg - 2 Pahal gam - 1 [...]",
      duration: "8 Nights/9 Days",
      location: "Jammu",
      price: 42000,
      originalPrice: 55000,
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      tag: "Group Tour, Family Tour",
      bestTime: "Best Time to Visit"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">Search Tours</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Search Tours</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="space-y-6">
                {/* Keywords */}
                <div>
                  <label className="font-semibold text-sm mb-2 block">Keywords</label>
                  <div className="relative">
                    <Input placeholder="Search..." className="pr-10" />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="font-semibold text-sm mb-2 block">Category</label>
                  <Select defaultValue="kashmir-summer-special">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kashmir-summer-special">Kashmir Summer Special</SelectItem>
                      <SelectItem value="himachal-summer-special">Himachal Summer Special</SelectItem>
                      <SelectItem value="kerala-summer-special">Kerala Summer Special</SelectItem>
                      <SelectItem value="nepal-group-tour">Nepal Group Tour</SelectItem>
                      <SelectItem value="north-east-summer-special">North-east Summer Special</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tag */}
                <div>
                  <label className="font-semibold text-sm mb-2 block">Tag</label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Select tag" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="couple-tour">Couple Tour</SelectItem>
                      <SelectItem value="family-tour">Family Tour</SelectItem>
                      <SelectItem value="group-tour">Group Tour</SelectItem>
                      <SelectItem value="honeymoon-special">Honeymoon Special</SelectItem>
                      <SelectItem value="religious-tours">Religious Tours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration */}
                <div>
                  <label className="font-semibold text-sm mb-2 block">Duration</label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1-day">1 Day Tour</SelectItem>
                      <SelectItem value="2-4-days">2-4 Days Tour</SelectItem>
                      <SelectItem value="5-7-days">5-7 Days Tour</SelectItem>
                      <SelectItem value="7-plus-days">7+ Days Tour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date */}
                <div>
                  <label className="font-semibold text-sm mb-2 block">Date</label>
                  <Input type="date" />
                </div>

                {/* Month */}
                <div>
                  <label className="font-semibold text-sm mb-2 block">Month</label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="august-2025">August 2025</SelectItem>
                      <SelectItem value="september-2025">September 2025</SelectItem>
                      <SelectItem value="october-2025">October 2025</SelectItem>
                      <SelectItem value="november-2025">November 2025</SelectItem>
                      <SelectItem value="december-2025">December 2025</SelectItem>
                      <SelectItem value="january-2026">January 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="font-semibold text-sm mb-2 block">Price Range</label>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tour Results */}
          <div className="lg:col-span-3">
            {/* Sort and View Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Sort by</span>
                <Select defaultValue="release-date">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="release-date">Release Date</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="descending">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="descending">Descending</SelectItem>
                    <SelectItem value="ascending">Ascending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Tour Cards */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
              {tours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={viewMode === 'list' ? 'flex' : ''}>
                    <div className={viewMode === 'list' ? 'w-1/3' : 'w-full'}>
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className={`w-full object-cover ${viewMode === 'list' ? 'h-48' : 'h-48'}`}
                      />
                    </div>
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{tour.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{tour.subtitle}</p>
                      
                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{tour.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-3">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{tour.tag}</span>
                        <Users className="h-4 w-4 text-muted-foreground ml-4" />
                        <span className="text-sm text-muted-foreground">{tour.bestTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Super Deal Price</div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-foreground">₹{tour.price.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground line-through">₹{tour.originalPrice.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                            VIEW DETAILS
                          </Button>
                          <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50">
                            INQUIRE NOW
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchTours;