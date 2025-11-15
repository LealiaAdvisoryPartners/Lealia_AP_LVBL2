import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHeader from "@/assets/Logo_text_biggerfont_samesize_2.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  // Regular color button with border matching text-foreground
  const regularButtonClasses =
    "font-body font-medium border border-border text-foreground px-4 py-1.5 rounded-md transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoHeader}
              alt="Lealia Advisory Partners"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Get in Touch button with regular color and border */}
            <button onClick={scrollToContact} className={regularButtonClasses}>
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 font-body font-medium transition-colors hover:bg-secondary rounded-md ${
                  isActive(link.path) ? "text-accent bg-secondary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Get in Touch button with regular color and border */}
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToContact();
              }}
              className={`${regularButtonClasses} block w-full text-center`}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
