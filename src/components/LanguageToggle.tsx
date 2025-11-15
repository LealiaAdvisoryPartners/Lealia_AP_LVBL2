const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", label: "EN" },
    { code: "pt", label: "PT" },
    { code: "es", label: "ES" },
  ];

  const current = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Change 'variant' and add matching className */}
        <Button
          variant="default" // Use 'default' or your nav button variant here
          className="flex items-center gap-1 font-medium px-4 py-2 rounded-md" // Match nav button styles: padding, font, etc.
        >
          {current?.code.toUpperCase()}
          <ChevronDown className="w-4 h-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={lang.code === language ? "font-semibold text-accent" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
