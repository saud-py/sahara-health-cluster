import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { LocationSection } from "@/components/LocationSection";
import { ContactDetails } from "@/components/ContactDetails";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <AppointmentCTA />
        <LocationSection />
        <ContactDetails />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}