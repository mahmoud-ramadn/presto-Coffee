import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TeaSection from "@/components/TeaSection";
import OriginSection from "@/components/OriginSection";
import ManagerSection from "@/components/ManagerSection";
import CtaSection from "@/components/CtaSection";
import AddressSection from "@/components/AddressSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollingSeeds from "@/components/ScrollingSeeds";

const Index = () => {
  return (
    <main className="bg-background overflow-hidden  min-h-screen relative">
      <ScrollingSeeds />
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <TeaSection />
      <OriginSection />
      <ManagerSection />
      <CtaSection />
      <AddressSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
