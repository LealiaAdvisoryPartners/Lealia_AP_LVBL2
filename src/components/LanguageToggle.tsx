import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" },
  ];

  const activeLang = languages.find((l) => l.code === language);
  const otherLangs = languages.filter((l) => l.code !== language);

  const changeLanguage = (nextLang: "en" | "pt" | "es") => {
    // Update context (sets localStorage + nf_country cookie)
    setLanguage(nextLang);

    // Rewrite URL: /pt/about → /en/about
    const url = new URL(window.location.href);
    const segments = url.pathname.split("/").filter(Boolean); // ["pt", "about"]

    if (segments.length === 0 || segments[0] === "") {
      // Root: / → /en
      url.pathname = `/${nextLang}`;
    } else {
      // Replace first segment with new lang
      segments[0] = nextLang;
      url.pathname = `/${segments.join("/")}`;
    }

    // Full reload so all pages pick up new language
    window.location.href = url.toString();
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-1 font-body font-medium transition-colors hover:text-accent text-foreground`}
        >
          {activeLang?.code.toUpperCase()}
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-fit w-auto">
        {otherLangs.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code as "en" | "pt" | "es")}
            className="hover:bg-transparent hover:text-accent focus:bg-transparent focus:text-accent cursor-pointer"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
