import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const Team = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      id: "john-anderson",
      name: "John Anderson",
      role: t("teampage.role"),
      email: "j.anderson@lealia.com",
      linkedin: "https://linkedin.com",
      image: teamMember1,
      bio: [t("teampage.bio1.p1"), t("teampage.bio1.p2"), t("teampage.bio1.p3"), t("teampage.bio1.p4")],
    },
    {
      id: "sarah-mitchell",
      name: "Sarah Mitchell",
      role: t("teampage.role"),
      email: "s.mitchell@lealia.com",
      linkedin: "https://linkedin.com",
      image: teamMember2,
      bio: [t("teampage.bio2.p1"), t("teampage.bio2.p2"), t("teampage.bio2.p3"), t("teampage.bio2.p4")],
    },
  ];
  
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      {/* Header Section */}
      <section className="section-container pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {t("teampage.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed">
            {t("teampage.intro")}
          </p>
        </motion.div>
      </section>

      {/* Team Members */}
      {teamMembers.map((member, index) => {
        const isEven = index % 2 === 0;

        return (
          <section id={member.id} key={member.name} className="section-container py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-12 ${
                !isEven ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* EVEN (image left) */}
              {isEven ? (
                <>
                  <div className="space-y-6">
                    <div className="relative overflow-hidden rounded-md shadow-[var(--shadow-elegant)]">
                      <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                    </div>

                    <div className="flex gap-4">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                        <Mail className="w-5 h-5" />
                        <span className="font-body">{member.email}</span>
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-primary mb-2">{member.name}</h2>
                      <p className="text-lg font-heading text-accent">{member.role}</p>
                    </div>

                    <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                      {member.bio.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* ODD (image right) */}
                  <div className="lg:col-span-2 space-y-6 order-last lg:order-first">
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-primary mb-2">{member.name}</h2>
                      <p className="text-lg font-heading text-accent">{member.role}</p>
                    </div>

                    <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                      {member.bio.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                    </div>
                  </div>

                  <div className="space-y-6 order-first lg:order-last">
                    <div className="relative overflow-hidden rounded-md shadow-[var(--shadow-elegant)]">
                      <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                    </div>

                    <div className="flex gap-4">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                        <Mail className="w-5 h-5" />
                        <span className="font-body">{member.email}</span>
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="section-container bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed mb-8">
            We'd love to hear from you and discuss how we can help your business achieve its strategic goals.
          </p>
          <Button
            onClick={() => (window.location.href = "/#contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
          >
            Get In Touch
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default Team;
