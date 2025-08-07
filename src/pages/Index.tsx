import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WinterTours from "@/components/WinterTours";
import Footer from "@/components/Footer";
import FeaturedTours from "@/components/FeaturedTours";
import Contact from "./Contact";
import StickyFooterBar from "@/components/StickyFooterBar";


const Index = () => {
  return (
    <div className="min-h-screen">
      
      <Hero />
      <WinterTours />
      <FeaturedTours />
      
      <StickyFooterBar />
     
      
    </div>
  );
};

export default Index;
