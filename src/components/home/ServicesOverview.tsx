import { motion } from "framer-motion";
import { TrendingUp, BarChart, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "M&A Advisory",
    description: "Comprehensive buy-side and sell-side advisory for strategic transactions",
    link: "/services#buy-side", // you can also choose #sell-side or split into two cards if preferred
  },
  {
    icon: BarChart,
    title: "Performance Improvement",
    description: "Operational optimization and strategic enhancement initiatives",
    link: "/services#performance",
  },
  {
    icon: Calculator,
    title: "Financial Modeling",
    description: "Sophisticated financial models for decision-making and valuation",
    link: "/services#modeling",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Our Services</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.title}
              to={service.link}
              className="card-elegant p-8 text-center block" // block to cover full card area
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body">{service.description}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Single button below the services grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <Link to="/services">
          <Button className="btn-gold">Learn More About Our Services</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ServicesOverview;
