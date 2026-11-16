import React from "react";

const researchThemes = [
  {
    title: "Spatial Transcriptomics & Cell–Cell Communication",
    summary:
      "My Master's thesis builds spatially explicit null models to test expression-only cell–cell communication scores against tissue geometry. On public 10x Xenium human breast cancer data, spatial null models re-rank candidate interactions and expose pairs unsupported by physical proximity (e.g., CD274–PDCD1); neither scGPT nor graph-learning baselines recovered this spatial-contact signal. Extending the analysis to 16 pancreatic ductal adenocarcinoma sections from 13 tumors showed no tumor with significant proximity-specific enrichment for fibroblast–T-cell CXCL12–CXCR4 after multiple-testing correction. This work has been submitted to the AAAI-27 Student Abstract Program.",
  },
  {
    title: "RNA & Epitranscriptomics",
    summary:
      "I study how incorporating molecular and epitranscriptomic structure improves generalization in biological prediction tasks—including m6A-SurvFormer, which applies cross-attention over biological priors for lung adenocarcinoma survival prediction (C-index 0.647, ECML-PKDD 2026 PharML Spotlight), and RNA function and design in the ECML PKDD 2026 OmniRNA Discovery Challenge (2nd place of 28 teams).",
  },
  {
    title: "Biomedical AI & Literature Intelligence",
    summary:
      "In Dr. Keyuan Jiang's group at Purdue University Northwest, I develop literature-analysis components for mApIt, including hybrid rule-based and LLM author name disambiguation (~93% accuracy on S2/S3 scenarios), corrective self-verification for biomedical evidence retrieval (1st place at ACL BioNLP 2026 MedGenVidQA), and neuro-symbolic root-cause analysis for medical imaging agents (NeurIPS 2026 AIM Oral).",
  },
];

const education = [
  {
    degree: "M.S. Applied Artificial Intelligence",
    institution: "Purdue University Northwest",
    period: "Expected May 2027",
    details: "GPA 3.8/4.0",
  },
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Anna University (Kamaraj College of Engineering and Technology)",
    period: "Aug 2020 – Apr 2024",
    details: "GPA 3.8/4.0",
    todo: true,
  },
];

const Research = () => {
  return (
    <section id="research" className="py-12 border-t border-border">
      <div className="scholar-container">
        <p className="section-label">Research</p>
        <h2 className="section-heading">Research Focus &amp; Education</h2>

        <div className="space-y-7 max-w-[72ch]">
          {researchThemes.map((theme) => (
            <div key={theme.title}>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {theme.title}
              </h3>
              <p className="mt-1.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {theme.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground mb-4">
            Education
          </h3>
          <dl className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
              >
                <div>
                  <dt className="font-medium text-foreground">{edu.degree}</dt>
                  <dd className="text-sm text-muted-foreground">
                    {edu.institution} · {edu.details}
                    {/* TODO(basil): confirm B.E. GPA scale vs transcript */}
                  </dd>
                </div>
                <dd className="text-sm text-muted-foreground tabular-nums shrink-0">
                  {edu.period}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Research;
