// components/StickyFooterBar.tsx
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyFooterBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Top Floating Buttons */}
      <div className="absolute -top-6 w-full px-4 flex justify-between items-center z-50">
        {/* Plan Now Button */}
        <div>
          <Button
            className="bg-white text-orange-500 border border-orange-500 hover:bg-orange-100 px-4 py-2 text-sm font-semibold rounded-full shadow-md"
            onClick={() => window.location.href = "/contact"}
          >
            Plan Now
          </Button>
        </div>

        {/* Phone Number */}
        <div className="bg-white text-orange-500 border border-orange-500 rounded-full h-12 px-4 flex items-center justify-center shadow-md text-sm font-semibold">
          <Phone className="w-4 h-4 mr-2" />
          <a href="tel:+919978615150" className="hover:underline">
            +91 9978615150
          </a>
        </div>
      </div>

      {/* Bottom Sticky Footer Bar */}
      <div className="bg-white text-black shadow-[0_-1px_6px_rgba(0,0,0,0.1)] h-16 flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-sm font-medium">
          <span className="text-lg">📍</span> Plan Your Trip with TravelMergeHolidays
        </div>
      </div>
    </div>
  );
};

export default StickyFooterBar;
