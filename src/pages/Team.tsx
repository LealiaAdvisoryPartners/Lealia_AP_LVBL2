import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import teamMember1 from "@/assets/ranf_foto.jpeg";
import teamMember2 from "@/assets/drp_foto.jpg";
import logoCircle from "@/assets/Logo_no_text_zoom_704x704.png";

const Team = () => {
  const { t } = useLanguage();

  // Track desktop viewport width
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const teamMembers = [
    {
      id: "john-anderson",
      name: "Ricardo Nascimento Ferreira",
      role: t("teampage.role"),
      email: "j.anderson@lealia.com",
      linkedin: "https://linkedin.com/in/ricardonascimentoferreira",
      linkedinPath: "/ricardonascimentoferreira",
      image: teamMember1,
      bio: [t("teampage.bio1.p1"), t("teampage.bio1.p2"), t("teampage.bio1.p3"), t("teampage.bio1.p4")],
    },
    {
      id: "sarah-mitchell",
      name: "Duarte Rocha Pereira",
      role: t("teampage.role"),
      email: "s.mitchell@lealia.com",
      linkedin: "https://linkedin.com/in/duarterochapereira",
      linkedinPath: "/duarterochapereira",
      image: teamMember2,
      bio: [t("teampage.bio2.p1"), t("teampage.bio2.p2"), t("teampage.bio2.p3"), t("teampage.bio2.p4")],
    },
  ];

  return (
    <>
      {/* Decorative Logo only on desktop */}
      {isDesktop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 0.35, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 right-0 overflow-hidden pointer-events-none z-0 w-[650px] h-[650px]"
        >
          <img
            src={logoCircle}
            alt=""
            className="absolute -top-40 -right-40 w-[650px] h-[650px] opacity-35"
          />
        </motion.div>
      )}

      {/* Header Section */}
      <section className="section-container pb-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">{t("teampage.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-4xl font-body leading-relaxed">{t("teampage.intro")}</p>
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
              className={`grid grid-cols-1 sm:grid-cols-3 gap-12 ${!isEven ? "sm:grid-flow-col-dense" : ""}`}
            >
              {/* EVEN (image left) */}
              {isEven ? (
                <>
                  <div className="space-y-6">
                    <div className="relative overflow-hidden rounded-md shadow-[var(--shadow-elegant)]">
                      <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                    </div>

                    <div className="flex flex-col gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Mail className="w-5 h-5 flex-shrink-0" />
                        <span className="font-body break-all">{member.email}</span>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Linkedin className="w-5 h-5 flex-shrink-0" />
                        <span className="font-body">{member.linkedinPath}</span>
                      </a>
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-primary mb-2">{member.name}</h2>
                      <p className="text-lg font-heading text-accent">{member.role}</p>
                    </div>

                    <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                      {member.bio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* ODD (image right) */}
                  <div className="sm:col-span-2 space-y-6 order-last sm:order-first">
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-primary mb-2">{member.name}</h2>
                      <p className="text-lg font-heading text-accent">{member.role}</p>
                    </div>

                    <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                      {member.bio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 order-first sm:order-last">
                    <div className="relative overflow-hidden rounded-md shadow-[var(--shadow-elegant)]">
                      <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                    </div>

                    <div className="flex flex-col gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Mail className="w-5 h-5 flex-shrink-0" />
                        <span className="font-body break-all">{member.email}</span>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Linkedin className="w-5 h-5 flex-shrink-0" />
                        <span className="font-body">{member.linkedinPath}</span>
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
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">{t("teampage.cta")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed mb-8">
            {t("teampage.cta.desc")}
          </p>
          <Button
            onClick={() => (window.location.href = "/#contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
          >
            {t("nav.contact")}
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default Team;
