import HeroSection from "@/components/landing/HeroSection";
import TeachersLanding from "@/components/landing/Teachers";
import GallerySection from "@/components/landing/GallerySection";

export default function Home() {
  return (
    <div className="text-black">
      <HeroSection />
      <GallerySection />
      <TeachersLanding />
      <div className="mt-100"></div>
    </div>
  );
}
