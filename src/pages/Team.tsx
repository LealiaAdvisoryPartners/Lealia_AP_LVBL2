import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const teamMembers = [
  {
    name: "John Anderson",
    role: "Managing Partner",
    email: "j.anderson@lealia.com",
    linkedin: "https://linkedin.com",
    image: teamMember1,
    bio: [
      "John Anderson is a Managing Partner at Lealia Advisory Partners with over 20 years of experience in M&A advisory and investment banking. He has advised on transactions valued at over $15 billion across diverse industries including technology, healthcare, manufacturing, and financial services.",
      "Prior to co-founding Lealia, John spent 12 years at a leading global investment bank where he served as Managing Director in the M&A group. He specialized in advising middle-market companies on strategic transactions, including buy-side advisory, sell-side advisory, and capital raising initiatives.",
      "John holds an MBA from Harvard Business School and a Bachelor's degree in Economics from Yale University. He is a frequent speaker at industry conferences and has been recognized as a leading M&A advisor by various industry publications.",
      "His approach is characterized by deep analytical rigor, creative problem-solving, and an unwavering commitment to client success. John is known for his ability to navigate complex negotiations and deliver outcomes that exceed client expectations.",
    ],
  },
  {
    name: "Sarah Mitchell",
    role: "Managing Partner",
    email: "s.mitchell@lealia.com",
    linkedin: "https://linkedin.com",
    image: teamMember2,
    bio: [
      "Sarah Mitchell is a Managing Partner at Lealia Advisory Partners, bringing extensive expertise in performance improvement, operational optimization, and strategic transformation. With over 18 years of experience, she has helped numerous organizations unlock value and achieve sustainable growth.",
      "Before joining Lealia, Sarah was a Partner at a premier management consulting firm, where she led engagements focused on operational excellence, cost reduction, and post-merger integration. Her work has driven significant improvements in profitability and operational efficiency for clients across various sectors.",
      "Sarah earned her MBA from Stanford Graduate School of Business and holds a Bachelor's degree in Engineering from MIT. She is a Certified Management Consultant (CMC) and has published several articles on performance improvement best practices.",
      "Sarah's collaborative approach and analytical acumen enable her to quickly identify opportunities and develop practical, implementable strategies. She is passionate about partnering with clients to achieve transformative results and build lasting organizational capabilities.",
    ],
  },
];

const Team = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Header Section */}
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed">
              Our team combines deep industry expertise, analytical rigor, and a genuine commitment
              to client success. We bring decades of experience in M&A advisory, strategy
              consulting, and operational improvement to every engagement.
            </p>
          </motion.div>
        </section>

        {/* Team Members */}
        {teamMembers.map((member, index) => (
          <section
            key={member.name}
            className={`section-container ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              {/* Profile Image and Contact */}
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="flex gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-body">{member.email}</span>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                    {member.name}
                  </h2>
                  <p className="text-lg text-muted-foreground italic font-body">{member.role}</p>
                </div>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  {member.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-container bg-primary text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-body">
              We'd love to hear from you and discuss how we can help your business achieve its
              strategic goals.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
