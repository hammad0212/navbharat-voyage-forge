import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from '../assets/travel merge logo white.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Group Tours", href: "#tours" },
    { name: "Customize Tour", href: "#customize" },
    { name: "Signature Holidays", href: "#holidays" },
    { name: "Vehicle On Rent", href: "#vehicles" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="relative">
      {/* Top contact bar */}
      <div className="bg-blue-500 text-primary-foreground py-2 px-4">
  <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
        <Phone className="h-3 w-3 text-white" />
        <span className="text-white">(+91) 9978615150</span>
      </div>
      <div className="flex items-center space-x-1">
        <Mail className="h-3 w-3 text-white" />
        <span className="text-white">travelmergeinfo@gmail.com</span>
      </div>
    </div>
  </div>
</div>


      {/* Main navbar */}
      <nav className="backdrop-blur-md bg-white/90 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
           <div className="flex items-center space-x-2">
  <div className=" p-2 rounded-lg">
    <img
      src={logo}
      alt="Logo"
      className="w-15 h-14 object-contain rounded"
    />
  </div>
  <div>
    <h1 className="font-bold text-lg text-foreground">TravelMergeHolidays</h1>
    <p className="text-xs text-muted-foreground">Creating Lifetime Memories</p>
  </div>
</div>

            {/* Desktop navigation */}
           <div className="hidden lg:flex items-center space-x-1">
  {navItems.map((item) => (
    <Button
      key={item.name}
      variant="ghost"
      className="text-foreground hover:bg-blue-600 hover:text-white"
      asChild
    >
      <a href={item.href}>{item.name}</a>
    </Button>
  ))}
</div>


            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start text-foreground hover:bg-accent hover:text-accent-foreground"
                    asChild
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <a href={item.href}>{item.name}</a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;