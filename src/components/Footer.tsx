import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Left: contact icons */}
          <div className="flex space-x-6">
            <a
              href="mailto:contact@lealiaadvisory.com"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/lealia-advisory-partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="tel:+1234567890"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Center: copyright */}
          <p className="text-sm text-primary-foreground/60 text-center">
            © {currentYear} Lealia Advisory Partners. {t("footer.copyright")}
          </p>

          {/* Right: privacy link */}
          <Link
            to="/privacy"
            className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
          >
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
