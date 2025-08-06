// this page used in about page for our services tab call 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Users, MapPin, Camera, Plane, Hotel } from "lucide-react";

const CompanyServices = () => {
  const services = [
    {
      icon: <Mountain className="w-8 h-8 text-black" />,
      title: "Cultural Tours in India",
      description: "Explore India's rich cultural heritage with our expertly crafted tours.",
      features: ["Heritage Sites", "Local Experiences", "Cultural Immersion"]
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: "Adventure Tours in India",
      description: "Experience thrilling adventures across India's diverse landscapes.",
      features: ["Trekking", "River Rafting", "Mountain Climbing"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-black" />,
      title: "Heritage Tours",
      description: "Discover India's magnificent historical monuments and palaces.",
      features: ["Historical Sites", "Royal Palaces", "Ancient Temples"]
    },
    {
      icon: <Camera className="w-8 h-8 text-black" />,
      title: "Special Interest Journeys",
      description: "Customized tours based on your specific interests and hobbies.",
      features: ["Photography Tours", "Wildlife Safari", "Spiritual Journeys"]
    },
    {
      icon: <Plane className="w-8 h-8 text-black" />,
      title: "Educational Tours",
      description: "Learning experiences combined with travel for students and groups.",
      features: ["Study Tours", "Research Trips", "Academic Exchanges"]
    },
    {
      icon: <Hotel className="w-8 h-8 text-black" />,
      title: "Recreation Holidays",
      description: "Relaxing holidays designed for rest and rejuvenation.",
      features: ["Beach Holidays", "Hill Stations", "Spa Retreats"]
    }
  ];

  const whatWeProvide = [
    "Personalized assistance on arrival & departure",
    "All sorts of transfer from car to coach in any city in India",
    "Accommodation in all categories of hotels from budget to 5 Star hotels",
    "Multilingual guide services",
    "Escort services",
    "Air, train and bus tickets",
    "24/7 customer support",
    "Travel insurance assistance"
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl text-black">About Our Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-black-leading-relaxed mb-6">
            Strong associations with budget and luxury hotels across the country enables us to give our clients their best value for money. This trait of Travel Merge Holidays., makes it the most attractive tour and travel agency for you. The team is prompt in their replies to your queries, which has earned a reputation as one of the best and most efficient tour and travel operators in India.
          </p>
          
          <div className="flex items-start gap-4">
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Group Cultural Tour" 
              className="w-64 h-48 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black mb-4">What We Do - Our Tours:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      {service.icon}
                      <h4 className="font-semibold">{service.title}</h4>
                    </div>
                    <p className="text-sm text-black mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl text-black">What We Provide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatWeProvide.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-black">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl text-black">Portal and Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-black leading-relaxed">
            Travel Merge Holidays. Ltd. is an online travel platform where determination and commitment has always exceeded travellers' expectation. The platform provides information regarding all the destinations in India, from the remote lifestyle tucked in the Indian Himalaya to the underwater coral life of Andaman and from the tribes of North East India to royal heritage of Rajasthan.
          </p>
          <br />
          <p className="text-black leading-relaxed">
            The travel portal also includes a wide range of information on hotels and resorts in India, from budget to heritage and luxury, as well as it scrolls down to wildlife safari tours, beach holidays, hill station tours, and adventure tours that include trekking, white water river rafting, peak climbing, mountaineering, mountain biking and motor biking.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyServices;