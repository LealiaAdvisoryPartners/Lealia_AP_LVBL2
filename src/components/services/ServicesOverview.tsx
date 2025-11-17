import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
export const ServicesOverview = () => {
  const {
    t
  } = useLanguage();
  return <section id="overview" className="section-container">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="my-0 py-0">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          {t("servicespage.overview.title")}
        </h1>

        <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-4">
          {t("servicespage.overview.p1")}
        </p>

        <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-4 my-0">
          {t("servicespage.overview.p2")}
        </p>

        <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed my-0 py-[20px]">
          {t("servicespage.overview.p3")}
        </p>
      </motion.div>
    </section>;
};