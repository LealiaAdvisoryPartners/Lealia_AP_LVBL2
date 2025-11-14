import { motion } from "framer-motion";
import heroBg from "@/assets/hero_try.png";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Lealia Advisory Partners" className="w-full h-full object-cover" />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <img src={logo} alt="Lealia Advisory Partners" className="w-full max-w-2xl mx-auto mb-6" />
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-body max-w-3xl mx-auto">
          Strategic Advisory for Transformative Outcomes
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
