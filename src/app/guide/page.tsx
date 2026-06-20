import Header from "@/components/Header";
import GuideHero from "@/components/GuideHero";
import GuideContent from "@/components/GuideContent";
import Footer from "@/components/Footer";

export default function GuidePage() {
  return (
    <main className="cyber-grid min-h-screen">
      <Header />
      <GuideHero />
      <GuideContent />
      <Footer />
    </main>
  );
}
