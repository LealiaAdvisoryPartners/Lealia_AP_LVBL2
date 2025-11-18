import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Logo */}
          <div>
            <img 
              src={logo} 
              alt="Lealia Advisory Partners" 
              className="w-64 mb-2"
            />
            <p className="text-primary-foreground/80 text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-body font-semibold mb-4 text-accent">{t("footer.quicklinks")}</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                to="/about"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/services"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/team"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {t("nav.team")}
              </Link>
              <Link
                to="/#contact"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Lealia Advisory Partners. {t("footer.copyright")}
            </p>
            <Link
              to="/privacy"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
