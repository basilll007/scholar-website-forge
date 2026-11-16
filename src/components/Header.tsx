import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Research", href: "#research" },
  { name: "Publications", href: "#publications" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Honors", href: "#honors" },
  { name: "Service", href: "#service" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="scholar-container h-14 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors whitespace-nowrap"
        >
          Basil Ebinesar
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-3.5 lg:gap-5 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Basil_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            CV
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="p-2 rounded-md text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-3 text-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Basil_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="py-1 inline-flex items-center gap-1.5 font-medium text-primary"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Download CV (PDF)
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
