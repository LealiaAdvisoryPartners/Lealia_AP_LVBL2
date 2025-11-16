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

export const ServicesSellSide = () => {
  const { t } = useLanguage();

  return (
    <section id="sell-side" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-6">{t("servicespage.sellside.title")}</h2>

        <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-12">
          {t("servicespage.sellside.desc")}
        </p>

        <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-elegant)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              { icon: FileText, label: t("servicespage.sellside.step1") },
              { icon: TrendingUp, label: t("servicespage.sellside.step2") },
              { icon: Target, label: t("servicespage.sellside.step3") },
              { icon: Search, label: t("servicespage.sellside.step4") },
              { icon: CheckCircle, label: t("servicespage.sellside.step5") },
            ].map((step, index, arr) => (
              <div key={step.label} className="flex items-center gap-6">
                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                    <step.icon className="w-8 h-8 text-primary" />
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
