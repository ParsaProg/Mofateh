import HeroSection from "@/components/landing/HeroSection";
import TeachersLanding from "@/components/landing/Teachers";

export default function Home() {
  return (
    <div className="text-black">
      <HeroSection />
      <TeachersLanding />
    </div>
  );
}
