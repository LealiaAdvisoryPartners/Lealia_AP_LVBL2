import { motion } from "framer-motion";
import heroBg from "@/assets/hero_try.png";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center pt-48 overflow-hidden">
      {/* Background Image with Gradient to Section Bg Color */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "50% 65%",
        }}
      >
        {/* Bottom Fade Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 -translate-y-50"
      >
        <img
          src={logo}
          alt="Lealia Advisory Partners"
          className="w-full max-w-2xl mx-auto mb-6"
          style={{ height: "auto" }}
        />
        <p
          className="text-gray-400 font-body max-w-3xl mx-auto"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
        >
          Strategic Advisory for Transformative Outcomes
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
