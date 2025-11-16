import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  Search,
  Target,
  FileText,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export const ServicesBuySide = () => {
  const { t } = useLanguage();

  return (
    <section id="buy-side" className="section-container bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-6">{t("servicespage.buyside.title")}</h2>

        <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-12">
          {t("servicespage.buyside.desc")}
        </p>

        <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-elegant)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              { icon: Target, label: t("servicespage.buyside.step1") },
              { icon: Search, label: t("servicespage.buyside.step2") },
              { icon: FileText, label: t("servicespage.buyside.step3") },
              { icon: TrendingUp, label: t("servicespage.buyside.step4") },
              { icon: CheckCircle, label: t("servicespage.buyside.step5") },
            ].map((step, index, arr) => (
              <div key={step.label} className="flex items-center gap-6">
                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="font-body font-medium text-sm text-foreground">{step.label}</p>
                </div>
                {index < arr.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
