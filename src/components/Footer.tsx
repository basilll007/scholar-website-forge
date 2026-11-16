import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 text-xs text-muted-foreground">
      <div className="scholar-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p>© {currentYear} Basil Ebinesar</p>
        <div className="flex items-center gap-5">
          <a
            href="/Basil_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline-offset-4 hover:underline transition-colors"
          >
            CV
          </a>
          <a
            href="https://github.com/basilll007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline-offset-4 hover:underline transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/basil-tamil-selvan-226b191bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline-offset-4 hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ebasiltamilselvan@gmail.com"
            className="hover:text-foreground underline-offset-4 hover:underline transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
