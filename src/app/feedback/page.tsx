import Header from "@/components/Header";
import FeedbackHero from "@/components/FeedbackHero";
import FeedbackContent from "@/components/FeedbackContent";
import Footer from "@/components/Footer";

export default function FeedbackPage() {
  return (
    <main className="cyber-grid min-h-screen">
      <Header />
      <FeedbackHero />
      <FeedbackContent />
      <Footer />
    </main>
  );
}
