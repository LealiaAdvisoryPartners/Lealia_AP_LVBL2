import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import aboutStory from "@/assets/about-story.jpg";

const whyUsItems = [
  {
    title: "Deep Industry Expertise",
    content:
      "Our team brings decades of combined experience in M&A advisory, having successfully guided transactions across diverse industries and deal sizes. We understand the nuances of complex business transactions and leverage this knowledge to deliver superior outcomes for our clients.",
  },
  {
    title: "Tailored Solutions",
    content:
      "We recognize that every business is unique, with its own challenges and opportunities. Our approach is highly customized, ensuring that our strategies align perfectly with your specific goals, industry dynamics, and organizational culture.",
  },
  {
    title: "Proven Track Record",
    content:
      "We have consistently delivered exceptional results for our clients, from successful acquisitions and strategic divestitures to transformative performance improvement initiatives. Our track record speaks to our commitment to excellence and measurable outcomes.",
  },
  {
    title: "Client-Centric Approach",
    content:
      "We view ourselves as long-term partners in your success. Our relationships are built on trust, transparency, and open communication. We are deeply invested in understanding your business and working collaboratively to achieve your strategic objectives.",
  },
];

const About = () => {
  return (
    <>
        {/* Introduction Section */}
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              About Lealia Advisory Partners
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed">
              Lealia Advisory Partners is a premier M&A advisory firm dedicated to providing
              strategic guidance and expert counsel to businesses navigating complex transactions
              and transformative growth opportunities. With deep industry expertise and a
              client-centric approach, we deliver exceptional results that create lasting value for
              our clients.
            </p>
          </motion.div>
        </section>

        {/* Why Us Section */}
        <section className="section-container bg-secondary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-12">Why Choose Us?</h2>
            <div className="max-w-4xl">
              <Accordion type="single" collapsible className="space-y-4">
                {whyUsItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="card-elegant px-6 border-0"
                    >
                      <AccordionTrigger className="text-lg font-heading font-semibold text-primary hover:text-accent">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-body pt-2">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </section>

        {/* How We Were Formed Section */}
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-12">Our Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Lealia Advisory Partners was founded by a team of seasoned M&A professionals who
                  recognized a need for a different kind of advisory firm—one that truly puts
                  clients first and combines deep technical expertise with genuine partnership and
                  integrity.
                </p>
                <p>
                  Our founders spent years at leading investment banks and consulting firms,
                  advising on some of the most complex and high-profile transactions in the market.
                  Through these experiences, they developed a shared vision: to create an advisory
                  firm that delivers the highest caliber of strategic counsel while maintaining an
                  unwavering commitment to client success.
                </p>
                <p>
                  Today, Lealia Advisory Partners stands as a trusted advisor to businesses across
                  industries, known for our rigorous analytical approach, creative problem-solving,
                  and dedication to achieving transformative outcomes for our clients. We are proud
                  of the relationships we have built and the results we have delivered, and we look
                  forward to continuing this journey of excellence and partnership.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={aboutStory}
                  alt="Lealia Advisory Partners Team"
                  className="rounded-lg shadow-[var(--shadow-elegant)] w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
    </>
  );
};

export default About;
