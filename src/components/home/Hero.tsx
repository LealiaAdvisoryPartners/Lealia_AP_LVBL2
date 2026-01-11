import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-background px-4">
      {/* Logo and Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <img
          src={logo}
          alt="Lealia Advisory Partners"
          className="w-full max-w-md mx-auto mb-8"
          style={{ height: "auto" }}
        />
        
        <p className="text-primary font-heading tracking-[0.2em] uppercase text-sm md:text-base">
          {t("hero.tagline")}
        </p>
      </motion.div>

      {/* Contact Info Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-12 left-0 right-0 px-8"
      >
        <div className="max-w-4xl mx-auto flex justify-between items-center text-muted-foreground text-sm">
          <a 
            href="mailto:geral@lealiaap.com" 
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            geral@lealiaap.com
          </a>
          <a 
            href="tel:+351935882323" 
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            +351 935 882 323
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
