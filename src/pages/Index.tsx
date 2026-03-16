import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Why from "@/components/landing/Why";
import Features from "@/components/landing/Features";
import Reviews from "@/components/landing/Reviews";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Why />
    <Features />
    <Reviews />
    {/* <Pricing /> */}
    <FAQ />
    <Footer />
  </div>
);

export default Index;
