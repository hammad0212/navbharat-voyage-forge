import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WinterTours from "@/components/WinterTours";
import Footer from "@/components/Footer";
import FeaturedTours from "@/components/FeaturedTours";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WinterTours />
      <FeaturedTours />
      <Footer />
    </div>
  );
};

export default Index;
