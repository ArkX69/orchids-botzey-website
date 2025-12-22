import HeroSection from "@/components/sections/hero";
import PainPoints from "@/components/sections/pain-points";
import SolutionsBento from "@/components/sections/solutions-bento";
import CaseStudies from "@/components/sections/case-studies";
import TrustAndStack from "@/components/sections/trust-and-stack";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import PricingSection from "@/components/sections/pricing";
import TeamSection from "@/components/sections/team";
import FAQ from "@/components/sections/faq";
import BlogInsights from "@/components/sections/blog-insights";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020210]">
      <main>
        <HeroSection />
        <PainPoints />
        <SolutionsBento />
        <CaseStudies />
        <TrustAndStack />
        <TestimonialsCarousel />
        <PricingSection />
        <TeamSection />
        <FAQ />
        <BlogInsights />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
