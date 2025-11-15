import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Target,
  FileText,
  TrendingUp,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

const Services = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "buy-side", label: "M&A Buy-Side" },
    { id: "sell-side", label: "M&A Sell-Side" },
    { id: "performance", label: "Performance Improvement" },
    { id: "modeling", label: "Modeling" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });

    setMobileNavOpen(false);
  };

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="flex relative">
      {/* MOBILE NAV BUTTON */}
      <button
        onClick={() => setMobileNavOpen(true)}
        aria-label="Open navigation"
        className="lg:hidden fixed top-20 left-4 z-40 p-2 rounded-md bg-muted text-foreground shadow"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* MOBILE NAV DRAWER */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50">
          <div className="absolute left-0 top-0 w-64 h-full bg-background border-r border-border p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-heading text-lg font-semibold">Our Services</h3>
              <button
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close navigation"
                className="p-1"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <nav className="space-y-2" aria-label="Services navigation">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-md font-body transition-colors ${
                    activeSection === section.id
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-56 fixed left-0 top-28 h-[calc(100vh-7rem)] z-10 pl-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <h2 className="font-heading text-xl font-bold text-primary">Our Services</h2>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="relative space-y-1"
          aria-label="Services navigation"
        >
          {sections.map((section) => (
            <div key={section.id} className="relative">
              {/* Left highlight bar */}
              {activeSection === section.id && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-md" />
              )}

              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left pl-4 pr-3 py-2 ml-1 rounded-md font-body transition ${
                  activeSection === section.id
                    ? "text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {section.label}
              </button>
            </div>
          ))}
        </motion.nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 lg:ml-56">
        {/* OVERVIEW */}
        <section id="overview" className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Services
            </h1>

            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-4">
              At Lealia Advisory Partners, we offer comprehensive advisory services designed to
              help businesses navigate complex transactions, optimize performance, and achieve
              strategic growth objectives.
            </p>

            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-4">
              Our expertise spans the full spectrum of M&A advisory, from buy-side and sell-side
              transactions to performance improvement and sophisticated financial modeling. We
              combine deep industry knowledge with rigorous analytical capabilities to deliver
              exceptional outcomes.
            </p>

            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed">
              Each engagement is tailored to your unique needs, ensuring that our strategies align
              with your business objectives and create lasting value.
            </p>
          </motion.div>
        </section>

        {/* BUY-SIDE */}
        <section id="buy-side" className="section-container bg-secondary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">M&A Buy-Side Advisory</h2>

            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-12">
              Our buy-side advisory services help clients identify, evaluate, and successfully
              execute strategic acquisitions. We guide you through every stage of the process,
              from defining your acquisition strategy to closing the transaction and supporting
              post-merger integration.
            </p>

            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-elegant)]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {[
                  { icon: Target, label: "Strategy Definition" },
                  { icon: Search, label: "Target Identification" },
                  { icon: FileText, label: "Due Diligence" },
                  { icon: TrendingUp, label: "Valuation" },
                  { icon: CheckCircle, label: "Negotiation & Closing" },
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

        {/* SELL-SIDE */}
        <section id="sell-side" className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">M&A Sell-Side Advisory</h2>

            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-12">
              Our sell-side advisory services maximize value for business owners looking to exit
              or divest assets. We manage the entire sale process, from preparation and valuation
              to marketing, negotiation, and transaction completion, ensuring optimal outcomes for
              our clients.
            </p>

            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-elegant)]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {[
                  { icon: FileText, label: "Preparation" },
                  { icon: TrendingUp, label: "Valuation" },
                  { icon: Target, label: "Marketing" },
                  { icon: Search, label: "Buyer Selection" },
                  { icon: CheckCircle, label: "Transaction Completion" },
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

        {/* PERFORMANCE */}
        <section id="performance" className="section-container bg-secondary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">Performance Improvement</h2>

            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-12">
              Our performance improvement services help businesses identify and capture operational
              efficiencies, enhance profitability, and drive sustainable growth. We work
              collaboratively with your team to develop and implement strategies that deliver
              measurable results.
            </p>

            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-elegant)]">
              <div className="flex flex-col gap-6 max-w-md mx-auto">
                {[
                  { label: "Assessment", desc: "Comprehensive analysis of current state" },
                  { label: "Strategy Development", desc: "Tailored improvement roadmap" },
                  { label: "Implementation", desc: "Execute initiatives with your team" },
                  { label: "Monitoring & Optimization", desc: "Track results and refine approach" },
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

        {/* MODELING */}
        <section id="modeling" className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">Financial Modeling</h2>

            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-12">
              Our financial modeling expertise provides clients with sophisticated analytical tools
              to support strategic decision-making. We develop custom models tailored to your
              specific needs, ensuring accuracy, flexibility, and clarity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Valuation Models",
                  desc: "DCF, comparable company analysis, precedent transactions",
                },
                {
                  title: "Financial Projections",
                  desc: "Detailed forecasts of revenue, expenses, and cash flows",
                },
                {
                  title: "Scenario Analysis",
                  desc: "Stress testing and sensitivity analysis for key assumptions",
                },
                {
                  title: "Investment Analysis",
                  desc: "ROI, IRR, and payback period calculations",
                },
              ].map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-elegant p-6"
                >
                  <h3 className="font-heading font-semibold text-primary mb-2">{type.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{type.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA - MATCHING PERFORMANCE BACKGROUND */}
        <section className="section-container bg-secondary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Ready to Start a Conversation?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed mb-12 mx-auto text-center">
              Let's discuss how we can help you achieve your strategic objectives and create lasting
              value for your business.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
            >
              Start a Conversation
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Services;
