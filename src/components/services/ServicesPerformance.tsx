import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesPerformance = () => {
  const { t } = useLanguage();

  return (
    <section id="performance" className="mb-16 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">{t("servicespage.performance.title")}</h2>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12">
          {t("servicespage.performance.desc")}
        </p>

        <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-elegant)]">
          <div className="flex flex-col gap-6 max-w-md mx-auto">
            {[
              { label: t("servicespage.performance.step1"), desc: t("servicespage.performance.step1.desc") },
              { label: t("servicespage.performance.step2"), desc: t("servicespage.performance.step2.desc") },
              { label: t("servicespage.performance.step3"), desc: t("servicespage.performance.step3.desc") },
              { label: t("servicespage.performance.step4"), desc: t("servicespage.performance.step4.desc") },
            ].map((step, index, arr) => (
              <div key={step.label}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                    <span className="font-heading font-semibold text-accent">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{step.label}</h3>
                    <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                  </div>
                </div>

                {index < arr.length - 1 && (
                  <div className="w-px h-6 bg-border ml-5 my-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
