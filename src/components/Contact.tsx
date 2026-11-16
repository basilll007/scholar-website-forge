import React from "react";
import { Mail, MapPin, Github, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 border-t border-border">
      <div className="scholar-container">
        <p className="section-label">Contact</p>
        <h2 className="section-heading">Get in Touch</h2>

        <p className="max-w-[65ch] text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
          I am applying to computational biology PhD programs for Fall 2027 and welcome conversations on spatial transcriptomics, RNA/epitranscriptomics, and biomedical AI research.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2.5 text-foreground">
            <Mail className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <a
              href="mailto:ebasiltamilselvan@gmail.com"
              className="scholar-link"
            >
              ebasiltamilselvan@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <span>Greater Chicago Area · Purdue University Northwest</span>
          </div>

          <div className="flex items-center gap-2.5 text-foreground">
            <Github className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <a
              href="https://github.com/basilll007"
              target="_blank"
              rel="noopener noreferrer"
              className="scholar-link"
            >
              github.com/basilll007
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-foreground">
            <Linkedin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/basil-tamil-selvan-226b191bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="scholar-link"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-foreground">
            <FileText className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <a
              href="/Basil_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="scholar-link"
            >
              Curriculum Vitae (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
