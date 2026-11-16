import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="pt-12 pb-12 sm:pt-16 sm:pb-14">
      <div className="scholar-container">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
          <img
            src="/portrait.webp"
            alt="Portrait of Basil Ebinesar"
            width={128}
            height={128}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-md object-cover object-[50%_42%] shrink-0 border border-border bg-secondary"
          />

          <div className="min-w-0 flex-1">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Basil Ebinesar
            </h1>
            <p className="mt-1.5 text-sm sm:text-base text-muted-foreground">
              M.S. Applied Artificial Intelligence, Purdue University Northwest · Greater Chicago Area
            </p>
            <p className="mt-2 font-serif italic text-base sm:text-lg text-foreground/90 max-w-[68ch]">
              Do computational scores of cell–cell communication reflect real tissue geometry, or merely shared expression?
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href="/Basil_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <a
                  href="https://github.com/basilll007"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-1.5 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/basil-tamil-selvan-226b191bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-1.5 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:ebasiltamilselvan@gmail.com"
                  aria-label="Email"
                  className="inline-flex items-center gap-1.5 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-[70ch] space-y-4 text-base text-foreground/90 leading-relaxed">
          <p>
            I am a graduate researcher at Purdue University Northwest working on spatial transcriptomics and cell–cell communication, RNA/epitranscriptomics, and biomedical AI. Across my thesis and collaborative projects, the central thread is that computational methods in biology should be tested directly against biological structure—for instance, checking whether cells scored as "communicating" are actually neighbors in tissue.
          </p>
          <p>
            My research spans spatially explicit null models for tumor microenvironments, cross-attention over epitranscriptomic priors for cancer survival prediction, and literature-intelligence and medical-agent systems. I am applying to computational biology PhD programs for Fall 2027.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
