import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Group Tours", 
    "Customize Tour",
    "Signature Holidays",
    "Vehicle Rental",
    "Terms & Conditions",
    "Privacy Policy",
    "Cancellation Policy"
  ];

  const destinations = [
    "Kashmir Tours",
    "Rajasthan Tours", 
    "Goa Tours",
    "Kerala Tours",
    "Himachal Tours",
    "Uttarakhand Tours",
    "Golden Triangle",
    "South India Tours"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-lg">
                <span className="text-primary-foreground font-bold text-xl">NBT</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">TravelMergeHolidays</h3>
                <p className="text-sm text-muted">Creating Lifetime Memories</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              With over 60 years of experience in travel and tourism, NavBharat Tours 
              has been creating unforgettable experiences for more than 1 million travelers.
            </p>
            <div className="flex space-x-2">
              <Button size="icon" variant="outline" className="hover:bg-amber-100">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-amber-100">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-amber-100">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-amber-100">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-1 text-amber-400" />
                  <div className="text-sm text-gray-400">
                    <p>(079) 4848 4999</p>
                    <p>(079) 4848 4222</p>
                    <p>+91 98258 04077</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-1 text-amber-400" />
                  <div className="text-sm text-gray-400">
                    <p>info@navbharattourism.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 text-amber-400" />
                  <div className="text-sm text-gray-400">
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-3">
                Subscribe for travel deals and updates
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email"
                  className="bg-background text-foreground"
                />
                <Button size="icon" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2024 NavBharat Tours. All rights reserved.</p>
          <p>GSTIN: [Your GST Number] | Travel License: [Your License Number]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;