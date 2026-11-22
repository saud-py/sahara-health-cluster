import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { LocationSection } from "@/components/sections/LocationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <AppointmentCTA />
        <LocationSection />
        <FaqSection />
        <ContactDetails />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}