import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import {
  ArrowRight,
  FileText,
  TrendingUp,
  Target,
  Search,
  CheckCircle,
} from "lucide-react";

export const ServicesSellSide = () => {
  const { t } = useLanguage();

  return (
    <section id="sell-side" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">{t("servicespage.sellside.title")}</h2>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12">
          {t("servicespage.sellside.desc")}
        </p>

        <div className="bg-card rounded-lg p-6 shadow-[var(--shadow-elegant)]">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {[
              { icon: FileText, label: t("servicespage.sellside.step1") },
              { icon: TrendingUp, label: t("servicespage.sellside.step2") },
              { icon: Target, label: t("servicespage.sellside.step3") },
              { icon: Search, label: t("servicespage.sellside.step4") },
              { icon: CheckCircle, label: t("servicespage.sellside.step5") },
            ].map((step, index) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-body font-medium text-sm text-foreground">{step.label}</p>
                </div>
                {index < 4 && (
                  <ArrowRight className="w-6 h-6 text-primary/40 flex-shrink-0 rotate-90 lg:rotate-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
