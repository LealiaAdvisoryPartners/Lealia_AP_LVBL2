import Hero from "@/components/home/Hero";
import CoreValues from "@/components/home/CoreValues";
import TeamPreview from "@/components/home/TeamPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <TeamPreview />
      <CoreValues />
      <ContactForm />
    </>
  );
};

export default Index;
