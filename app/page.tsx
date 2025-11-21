import HeroSection from "@/components/landing/HeroSection";
import TeachersLanding from "@/components/landing/Teachers";
import GallerySection from "@/components/landing/SchoolIntrducing";
import { SchoolWorkers } from "@/components/landing/SchoolWorkers";

export default function Home() {
  return (
    <div className="text-black">
      <HeroSection />
      <GallerySection />
      <SchoolWorkers />
      <div className="mt-100"></div>
    </div>
  );
}
