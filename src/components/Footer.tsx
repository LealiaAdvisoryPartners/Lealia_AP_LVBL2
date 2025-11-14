import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              Strategic Advisory for Transformative Outcomes
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-body font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                to="/about"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                to="/team"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Team
              </Link>
              <Link
                to="/#contact"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-primary-foreground/60 text-center">
            © {currentYear} Lealia Advisory Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
