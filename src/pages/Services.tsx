import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoCircle from "@/assets/Logo_no_text_zoom_704x704.png";
import { ServicesSidebar } from "@/components/services/ServicesSidebar";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServicesBuySide } from "@/components/services/ServicesBuySide";
import { ServicesSellSide } from "@/components/services/ServicesSellSide";
import { ServicesPerformance } from "@/components/services/ServicesPerformance";
import { ServicesModeling } from "@/components/services/ServicesModeling";
import { ServicesCTA } from "@/components/services/ServicesCTA";

const Services = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { t } = useLanguage();

  const sections = [
    { id: "overview", label: t("servicespage.overview") },
    { id: "buy-side", label: t("servicespage.buyside") },
    { id: "sell-side", label: t("servicespage.sellside") },
    { id: "performance", label: t("servicespage.performance") },
    { id: "modeling", label: t("servicespage.modeling") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });

    setMobileNavOpen(false);
  };

  return (
    <div className="flex relative">
      {/* Decorative Logo */}
      <div className="absolute top-0 right-0 overflow-hidden pointer-events-none z-0 w-[650px] h-[650px]">
        <img 
          src={logoCircle} 
          alt="" 
          className="absolute -top-40 -right-40 w-[650px] h-[650px] opacity-35"
        />
      </div>

      <ServicesSidebar
        sections={sections}
        activeSection={activeSection}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        scrollToSection={scrollToSection}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 lg:ml-56">
        <ServicesOverview />
        <ServicesBuySide />
        <ServicesSellSide />
        <ServicesPerformance />
        <ServicesModeling />
        <ServicesCTA />
      </main>
    </div>
  );
};

export default Services;
