import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import CoreValues from "@/components/home/CoreValues";
import TeamPreview from "@/components/home/TeamPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <CoreValues />
        <TeamPreview />
        <ServicesOverview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
