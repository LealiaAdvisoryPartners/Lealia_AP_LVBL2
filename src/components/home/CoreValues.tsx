import { motion } from "framer-motion";
import { Shield, Award, Handshake, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in every engagement",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver exceptional results through rigorous analysis and expertise",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work alongside our clients as trusted advisors",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We bring creative solutions to complex business challenges",
  },
];

const CoreValues = () => {
  return (
    <section className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Our Foundation</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elegant p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground font-body">{value.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <Link to="/about">
          <Button className="btn-gold">Learn More About Us</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CoreValues;
