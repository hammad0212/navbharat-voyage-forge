import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WinterTours from "@/components/WinterTours";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WinterTours />
      <Footer />
    </div>
  );
};

export default Index;
