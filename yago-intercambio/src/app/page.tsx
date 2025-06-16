import CompaniesSection from "@/components/CompaniesSection";
import DonationSection from "@/components/DonationSection";
import FamilySection from "@/components/FamilySection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import StorySection from "@/components/StorySection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StorySection />
      <FamilySection />
      <JourneySection />
      <CompaniesSection />
      <DonationSection />
      <Footer />
    </div>
  );
}
