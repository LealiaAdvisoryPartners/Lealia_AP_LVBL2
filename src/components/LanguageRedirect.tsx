import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath, getLanguageFromPath, getPathWithoutLanguage } from "@/lib/routing";

/**
 * Component that redirects non-prefixed URLs to language-prefixed versions
 * e.g., /about -> /en/about (or /pt/about, /es/about based on user preference)
 */
const LanguageRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const currentLang = getLanguageFromPath(location.pathname);
    
    // If URL already has a language prefix, do nothing
    if (currentLang) {
      return;
    }

    // If URL doesn't have a language prefix, redirect to prefixed version
    const pathWithoutLang = getPathWithoutLanguage(location.pathname);
    const newPath = buildPath(language, pathWithoutLang);
    
    // Only redirect if the path would actually change
    if (newPath !== location.pathname) {
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, language, navigate]);

  return null;
};

export default LanguageRedirect;

