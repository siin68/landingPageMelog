import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Screenshots from "@/components/layout/Screenshots";
import Integrations from "@/components/layout/Integrations";
import Testimonial from "@/components/layout/Testimonial";
import Pricing from "@/components/layout/Pricing";
import FAQ from "@/components/layout/FAQ";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Integrations />
      <Testimonial />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
