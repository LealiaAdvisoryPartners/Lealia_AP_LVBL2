import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const teamMembers = [
  {
    id: "john-anderson",
    name: "John Anderson",
    role: "Managing Partner",
    image: teamMember1,
    email: "j.anderson@lealia.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    role: "Managing Partner",
    image: teamMember2,
    email: "s.mitchell@lealia.com",
    linkedin: "https://linkedin.com",
  },
];

const TeamPreview = () => {
  return (
    <section className="section-container bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle mx-auto">
          Led by experienced professionals with deep M&A and financial expertise
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card-elegant p-6"
          >
            <Link to={`/team#${member.id}`} className="block group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground font-body italic mb-4">{member.role}</p>
            </Link>
            <div className="flex justify-center gap-4">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Meet Our Team Link at Bottom */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/70 transition-colors"
        >
          Meet Our Team <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default TeamPreview;
