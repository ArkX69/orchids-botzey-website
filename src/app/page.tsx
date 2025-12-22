import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import PainPoints from "@/components/sections/pain-points";
import SolutionsBento from "@/components/sections/solutions-bento";
import CaseStudies from "@/components/sections/case-studies";
import TrustAndStack from "@/components/sections/trust-and-stack";
import TestimonialsSlider from "@/components/sections/testimonials-slider";
import FAQSection from "@/components/sections/faq";
import BlogSection from "@/components/sections/blog";
import ContactFooter from "@/components/sections/contact-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030312]">
      <Header />
      <main>
        <HeroSection />
        <PainPoints />
        <SolutionsBento />
        <CaseStudies />
        <TrustAndStack />
        <TestimonialsSlider />
        <FAQSection />
      </main>
      <ContactFooter />
    </div>
  );
}
