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
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/travel merge logo white.png";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Group Tours", path: "/" },
    { label: "Customize Tour", path: "/" },
    { label: "Signature Holidays", path: "/" },
    { label: "Vehicle Rental", path: "/" },
    { label: "Terms & Conditions", path: "/" },
    { label: "Privacy Policy", path: "/" },
    { label: "Cancellation Policy", path: "/" },
  ];

  const destinations = [
    "Kashmir Tours",
    "Rajasthan Tours",
    "Goa Tours",
    "Kerala Tours",
    "Himachal Tours",
    "Uttarakhand Tours",
    "Golden Triangle",
    "South India Tours",
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className=" p-2 rounded-lg">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-14 object-contain rounded"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">TravelMergeHolidays</h3>
                <p className="text-sm text-muted">Creating Lifetime Memories</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              With over a year of experience in the travel and tourism industry,
              Travel Merge Holidays has curated memorable journeys for thousands
              of happy travelers. From relaxing getaways to adventurous
              expeditions, we specialize in crafting personalized travel
              experiences that leave lasting memories.
            </p>
            <div className="flex space-x-2">
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-amber-100"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-amber-100"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-amber-100"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-amber-100"
              >
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
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
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
                    <p>(+91) 9978615150</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-1 text-amber-400" />
                  <div className="text-sm text-gray-400">
                    <p>travelmergeinfo@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 text-amber-400" />
                  <div className="text-sm text-gray-400">
                    <a
                      href="https://www.google.com/maps/place/Travel+Merge+Holidays+%7C+Top+rated+travel+agency+in+Ahmedabad+%7C+Travel+Agents+in+Ahmedabad/@23.0383394,72.4215829,11z/data=!4m6!3m5!1s0x2b3491c0a014b71b:0x9bb283e847edeecc!8m2!3d22.9958639!4d72.533245!16s%2Fg%2F11wy01rfvy?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-gray-400"
                    >
                      <p>
                        T/55, 4rd Floor, Al-Muqaam,, Nr APMC Market , Vishala
                        Circle Sarkhej Road, Vishala, ,Ahmedabad ,Gujarat
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2024 Travel Merge Holidays Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
