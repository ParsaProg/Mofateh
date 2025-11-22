import HeroSection from "@/components/landing/HeroSection";
import RegisterConditionsLanding from "@/components/landing/RegisterConditions";
import TeachersLanding from "@/components/landing/RegisterConditions";
import GallerySection from "@/components/landing/SchoolIntrducing";
import { SchoolWorkers } from "@/components/landing/SchoolWorkers";

export default function Home() {
  return (
    <div className="text-black">
      <HeroSection />
      <GallerySection />
      <SchoolWorkers />
      <RegisterConditionsLanding />
      <div className="mt-100"></div>
    </div>
  );
}
