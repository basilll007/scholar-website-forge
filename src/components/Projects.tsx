import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

const projects: Project[] = [
  {
    title: "Thesis-ccc",
    description:
      "Spatially explicit null models for testing expression-only cell–cell communication scores on 10x Xenium breast and PDAC tissue sections, with scGPT and graph-learning benchmarks.",
    tags: ["Spatial Transcriptomics", "Null Models", "scGPT"],
    link: "https://github.com/basilll007/Thesis-ccc",
    linkLabel: "GitHub",
  },
  {
    title: "NS-MedRCA",
    description:
      "Neuro-symbolic root-cause analysis for medical imaging agents, separating localization stability from recovery behavior (NeurIPS 2026 AIM Oral).",
    tags: ["Neuro-Symbolic AI", "Medical Imaging", "Agents"],
    link: "https://github.com/basilll007/NS-MedRCA",
    linkLabel: "GitHub",
  },
  {
    title: "m6A-SurvFormer",
    description:
      "Cross-attention architecture over m6A epitranscriptomic biological priors for lung adenocarcinoma survival prediction (C-index 0.647, ECML-PKDD 2026 PharML Spotlight).",
    tags: ["Epitranscriptomics", "Survival Analysis", "Cross-Attention"],
  },
  {
    title: "mApIt",
    description:
      "Literature-analysis components for biomedical knowledge extraction, featuring hybrid rule-based and LLM author name disambiguation (~93% accuracy on S2/S3 scenarios).",
    tags: ["Biomedical NLP", "Author Disambiguation", "LLMs"],
  },
  {
    title: "Insight",
    description:
      "Competitive intelligence pipeline ingesting ClinicalTrials.gov and OpenFDA data to structure drug and trial landscapes for pharmaceutical workflows.",
    tags: ["ClinicalTrials.gov", "OpenFDA", "LLM Pipelines"],
  },
  {
    title: "CHF Remote Patient Monitoring",
    description:
      "Remote patient monitoring framework for congestive heart failure developed in a Mayo Clinic collaborative project with Purdue University Northwest.",
    tags: ["FastAPI", "PostgreSQL", "React Native"],
  },
  {
    title: "ATM Mayo",
    description:
      "Medication-dispensing application integrating Flutter, Firebase, and Raspberry Pi hardware for a Mayo Clinic collaborative project.",
    tags: ["Flutter", "Firebase", "Raspberry Pi"],
  },
  {
    title: "Lichen Classification",
    description:
      "Image-based classifiers for on-site identification of lichen species in reserved forest (Computers and Electronics in Agriculture, Elsevier, 2025).",
    tags: ["Computer Vision", "Field Classification"],
    link: "https://doi.org/10.1016/j.compag.2025.110994",
    linkLabel: "DOI",
  },
  {
    title: "Brain Tumor Classification",
    description:
      "Deep learning pipeline for volumetric brain tumor classification from MRI scans.",
    tags: ["Medical Imaging", "PyTorch"],
    link: "https://github.com/basilll007/brain_tumor_classification",
    linkLabel: "GitHub",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 border-t border-border">
      <div className="scholar-container">
        <p className="section-label">Projects</p>
        <h2 className="section-heading">Software &amp; Systems</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col justify-between border-b border-border/70 pb-6">
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary underline-offset-4 hover:underline shrink-0"
                    >
                      {project.linkLabel ?? "Link"}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              <p className="mt-3 text-xs text-muted-foreground/85">
                {project.tags.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
