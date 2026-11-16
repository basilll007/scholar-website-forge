import React from "react";
import { ExternalLink } from "lucide-react";

interface Publication {
  authors: React.ReactNode;
  title: string;
  venue: string;
  status: string;
  note?: string;
  linkLabel?: string;
  linkUrl?: string;
}

const publicationsByYear: { year: string; items: Publication[] }[] = [
  {
    year: "2026",
    items: [
      {
        authors: (
          <>
            <strong className="font-semibold text-foreground">Ebinesar, B.</strong>, Maddineni, C., Raja, A., &amp; Jiang, K.
          </>
        ),
        title:
          "Localization Is Stable, Recovery Is Not: Neuro-Symbolic Root-Cause Analysis for Medical Imaging Agents.",
        venue: "NeurIPS 2026 Workshop on Agentic AI for Medicine (AIM)",
        status: "Accepted · Oral",
        linkLabel: "Code",
        linkUrl: "https://github.com/basilll007/NS-MedRCA",
      },
      {
        authors: (
          <>
            Macharla Vasu, S. S.*, <strong className="font-semibold text-foreground">Ebinesar, B.</strong>*, Durairaj, H., Maddineni, C., &amp; Jiang, K.
          </>
        ),
        title: "Detection Is Not Resolution: Contextual Trust in Long-Term Memory.",
        venue: "NeurIPS 2026 WiML Workshop",
        status: "Accepted · Poster",
        note: "*Equal contribution.",
      },
      {
        authors: (
          <>
            <strong className="font-semibold text-foreground">Ebinesar, B.</strong>, Jiang, K., Maddineni, C., &amp; Raja, A.
          </>
        ),
        title:
          "Pride-Boiler at MedGenVidQA 2026: LLM-Augmented BM25 Retrieval with Corrective Self-Verification for Biomedical Evidence Retrieval.",
        venue: "BioNLP 2026 Shared Tasks, ACL, pp. 248–256",
        status: "1st place (MMR)",
        linkLabel: "DOI",
        linkUrl: "https://doi.org/10.18653/v1/2026.bionlp-2.33",
      },
      {
        authors: (
          <>
            <strong className="font-semibold text-foreground">Ebinesar, B.</strong>, Maddineni, C., Jiang, K., &amp; Bernard, G. R.
          </>
        ),
        title:
          "m6A-SurvFormer: Cross-Attention over Biological Priors for Robust Survival Prediction in Lung Adenocarcinoma.",
        venue: "PharML Workshop, ECML-PKDD 2026",
        status: "Accepted · Spotlight",
        note: "C-index 0.647.",
      },
      {
        authors: (
          <>
            <strong className="font-semibold text-foreground">Ebinesar, B.</strong>, Maddineni, C., Katakam, P. P., &amp; Jiang, K.
          </>
        ),
        title: "The Pride-Boiler System for the OmniRNA Discovery Challenge.",
        venue: "ECML PKDD 2026 Discovery Challenge (OmniRNA track), Naples",
        status: "2nd place (28 teams) · Decision pending",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        authors: (
          <>
            Sankar, K., et al. (incl.{" "}
            <strong className="font-semibold text-foreground">Ebinesar, B.</strong>, published as{" "}
            <strong className="font-semibold text-foreground">E. Basil Tamil Selvan</strong>*)
          </>
        ),
        title:
          "Effectiveness of image-based classifiers for on-site identification of lichens in reserved forest.",
        venue: "Computers and Electronics in Agriculture (Elsevier), 2025",
        status: "Published",
        linkLabel: "DOI",
        linkUrl: "https://doi.org/10.1016/j.compag.2025.110994",
      },
    ],
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-12 border-t border-border">
      <div className="scholar-container">
        <p className="section-label">Publications</p>
        <h2 className="section-heading">Selected Papers</h2>

        <div className="space-y-10">
          {publicationsByYear.map((group) => (
            <div key={group.year} className="grid grid-cols-1 md:grid-cols-[72px_1fr] gap-4 md:gap-8">
              <h3 className="font-serif text-lg font-semibold text-muted-foreground tabular-nums">
                {group.year}
              </h3>

              <ol className="space-y-6">
                {group.items.map((pub, idx) => (
                  <li key={idx} className="text-sm sm:text-base leading-relaxed">
                    <p className="text-muted-foreground">{pub.authors}</p>
                    <p className="font-medium text-foreground mt-0.5">&ldquo;{pub.title}&rdquo;</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                      <span className="italic text-muted-foreground">{pub.venue}</span>
                      <span className="inline-flex items-center rounded border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-foreground">
                        {pub.status}
                      </span>
                      {pub.note && (
                        <span className="text-xs text-muted-foreground">{pub.note}</span>
                      )}
                      {pub.linkUrl && pub.linkLabel && (
                        <a
                          href={pub.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary underline-offset-4 hover:underline"
                        >
                          {pub.linkLabel}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          *Note: The 2025 <em>Computers and Electronics in Agriculture</em> paper was published under the name &ldquo;E. Basil Tamil Selvan&rdquo;.
        </p>
      </div>
    </section>
  );
};

export default Publications;
