import Header from "../components/Header";
import HeroSection from "../components/Homehero";
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import TeachersSection from "../components/TeachersSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ScheduleSection from "../components/ScheduleSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TeachersSection />
      <TestimonialsSection />
      <ScheduleSection />
      <CallToAction />
      <Footer />
    </>
  );
}
