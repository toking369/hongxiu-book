import Header from "@/components/Header";
import FaqHero from "@/components/FaqHero";
import FaqContent from "@/components/FaqContent";
import Footer from "@/components/Footer";

export default function FaqPage() {
  return (
    <main className="cyber-grid min-h-screen">
      <Header />
      <FaqHero />
      <FaqContent />
      <Footer />
    </main>
  );
}
