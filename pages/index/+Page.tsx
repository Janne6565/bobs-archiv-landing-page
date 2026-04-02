import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { Footer } from "../../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      {/* Subtle radial glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(82,180,230,0.08)_0%,_transparent_60%)]" />
      <HeroSection />
      <Footer />
    </>
  );
}
