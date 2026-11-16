import React from "react";

interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  summary: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2025 – Present",
    role: "Master's Thesis Researcher",
    organization: "Purdue University Northwest",
    summary:
      "Investigating spatial cell–cell communication in breast and pancreatic tumors. Built spatially explicit null models to test expression-only communication scores; on public 10x Xenium human breast data they re-rank scores and expose interactions tissue geometry does not support (e.g., CD274–PDCD1). Benchmarked scGPT and graph-learning baselines, finding that neither recovered the spatial-contact signal. Extended the evaluation to 16 pancreatic ductal adenocarcinoma sections from 13 tumors, where no tumor showed significant proximity-specific enrichment for fibroblast–T-cell CXCL12–CXCR4 after multiple-testing correction. Submitted to the AAAI-27 Student Abstract Program.",
  },
  {
    period: "Sep 2025 – Present",
    role: "Graduate Research Assistant",
    organization: "Purdue University Northwest · Advisor: Dr. Keyuan Jiang",
    summary:
      "First-authored four 2026 papers (NeurIPS AIM oral, ACL BioNLP 1st place, ECML-PKDD spotlight, ECML-PKDD OmniRNA 2nd place). Developing literature-analysis components of mApIt and hybrid rule-based + LLM author name disambiguation (~93% accuracy on S2/S3 scenarios).",
  },
  {
    period: "Jun 2026 – Present",
    role: "Research Trainee",
    organization: "Mayo Clinic (Collaborative Project with PNW)",
    summary:
      "Building a remote patient monitoring framework for congestive heart failure (FastAPI, PostgreSQL, React Native) and ATM Mayo (Flutter/Firebase and Raspberry Pi medication-dispensing application).",
  },
  {
    period: "May 2026 – Present",
    role: "AI/ML Intern",
    organization: "rareLife Solutions (Remote)",
    summary:
      "Developing production AI platforms for pharmaceutical clients, including Insight (ClinicalTrials.gov and OpenFDA competitive intelligence), LLM analysis pipelines, and biomedical theme classification pipelines.",
  },
  {
    period: "Nov 2024 – Jun 2025",
    role: "AI Researcher (Computer Vision)",
    organization: "H1 Enterprise",
    summary:
      "Developed computer vision models for plant-leaf disease detection, optimized for efficient inference.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 border-t border-border">
      <div className="scholar-container">
        <p className="section-label">Experience</p>
        <h2 className="section-heading">Research &amp; Industry Roles</h2>

        {/* TODO(basil): confirm exact start month for Master's Thesis Researcher */}
        <ol className="space-y-8">
          {experiences.map((item) => (
            <li
              key={`${item.role}-${item.organization}`}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8"
            >
              <div className="text-sm text-muted-foreground tabular-nums pt-0.5">
                {item.period}
              </div>
              <div className="max-w-[68ch]">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-primary/90 mt-0.5">
                  {item.organization}
                </p>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
