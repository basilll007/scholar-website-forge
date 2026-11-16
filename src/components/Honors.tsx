import React from "react";

interface Honor {
  year: string;
  title: string;
  body: string;
  note?: string;
}

const honors: Honor[] = [
  {
    year: "2026",
    title: "Graduate Research Award",
    body: "Purdue University Northwest",
  },
  {
    year: "2026",
    title: "1st Place — MedGenVidQA Shared Task (MMR)",
    body: "BioNLP Workshop, Association for Computational Linguistics (ACL)",
  },
  {
    year: "2026",
    title: "2nd Place of 28 Teams — OmniRNA Discovery Challenge",
    body: "ECML PKDD, Naples",
  },
  {
    year: "2026",
    title: "Spotlight Presentation — PharML Workshop",
    body: "ECML PKDD",
  },
  {
    year: "2026",
    title: "Oral Presentation — Workshop on Agentic AI for Medicine (AIM)",
    body: "NeurIPS",
  },
  {
    year: "2025",
    title: "Gold Medal for All-Round Achievement",
    body: "Kamaraj College of Engineering and Technology",
    note: "Awarded in 2025 for the 2023–24 academic year.",
  },
  {
    year: "2024",
    title: 'Best Technical Presentation — "AI in Medical Imaging"',
    body: "Tech Expo Symposium",
  },
  {
    year: "2022",
    title: "National Finalist — Smart India Hackathon",
    body: "Government of India",
  },
];

const Honors = () => {
  return (
    <section id="honors" className="py-12 border-t border-border">
      <div className="scholar-container">
        <p className="section-label">Honors &amp; Awards</p>
        <h2 className="section-heading">Recognition</h2>

        {/* TODO(basil): verify exact wording/citation on Gold Medal certificate */}
        <ul className="divide-y divide-border/70">
          {honors.map((honor) => (
            <li
              key={`${honor.year}-${honor.title}`}
              className="py-3.5 grid grid-cols-1 sm:grid-cols-[72px_1fr] gap-1 sm:gap-8 items-baseline"
            >
              <span className="text-sm text-muted-foreground tabular-nums">
                {honor.year}
              </span>
              <div>
                <span className="font-medium text-foreground">{honor.title}</span>
                <span className="text-muted-foreground"> — {honor.body}</span>
                {honor.note && (
                  <span className="text-sm text-muted-foreground"> ({honor.note})</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Honors;
