
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Publications = () => {
  const publications = [
    {
      title: "Pride-Boiler at MedGenVidQA 2026: LLM-Augmented BM25 Retrieval with Corrective Self-Verification for Biomedical Evidence Retrieval",
      journal: "Proceedings of BioNLP 2026 (Shared Tasks), ACL",
      year: 2026,
      authors: "Basil Ebinesar, Keyuan Jiang, Charansai Maddineni, Ashok Raja",
      abstract: "1st place, BioNLP 2026 Shared Task. LLM-augmented BM25 retrieval with corrective self-verification for biomedical evidence retrieval.",
      link: "https://doi.org/10.18653/v1/2026.bionlp-2.33"
    },
    {
      title: "m6A-SurvFormer: Cross-Attention over Biological Priors for Robust Survival Prediction in Lung Adenocarcinoma",
      journal: "Proceedings of the PharML Workshop, ECML-PKDD",
      year: 2026,
      authors: "Basil Ebinesar, Charansai Maddineni, Keyuan Jiang, Gordon R. Bernard",
      abstract: "Spotlight presentation. Cross-attention model over epitranscriptomic priors for survival prediction in lung adenocarcinoma.",
      link: undefined as string | undefined
    },
    {
      title: "The Pride–Boiler System for the OmniRNA Discovery Challenge",
      journal: "OmniRNA Discovery Challenge Workshop, ECML-PKDD, Springer LNCS",
      year: 2026,
      authors: "Basil Ebinesar, Charansai Maddineni, Pavan Praneeth Katakam, Keyuan Jiang",
      abstract: "2nd place, Naples, Italy. A system for the OmniRNA Discovery Challenge on RNA function and design.",
      link: undefined as string | undefined
    },
    {
      title: "Detection Is Not Resolution: Contextual Trust in Long-Term Memory",
      journal: "NeurIPS 2026 Workshop on Women in Machine Learning (WiML)",
      year: 2026,
      authors: "Sai Suresh Macharla Vasu, Basil Ebinesar, Hemashruthi Durairaj, Charansai Maddineni, Keyuan Jiang",
      abstract: "Accepted, poster presentation. Examines contextual trust for resolving conflicts in long-term memory systems.",
      link: undefined as string | undefined
    },
    {
      title: "Effectiveness of Image-Based Classifiers for On-Site Identification of Lichens in Reserved Forest",
      journal: "Computers and Electronics in Agriculture, Elsevier",
      year: 2025,
      authors: "Karthikumar Sankar, ..., E. Basil Tamil Selvan",
      abstract: "Evaluates image-based classifiers for on-site, field-ready identification of lichen species in reserved forest.",
      link: "https://doi.org/10.1016/j.compag.2025.110994"
    }
  ];

  return (
    <section id="publications" className="content-section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Publications</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Peer-reviewed and workshop publications in biomedical NLP, RNA/genomics, and clinical AI.
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="border-l-4 border-l-quantum-accent hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-quantum-dark">{pub.title}</CardTitle>
                <CardDescription>
                  <span className="font-medium">{pub.journal}</span> • {pub.year} • {pub.authors}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{pub.abstract}</p>
              </CardContent>
              {pub.link && (
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-quantum hover:text-quantum-dark hover:bg-quantum-light/10"
                    onClick={() => window.open(pub.link, '_blank')}
                  >
                    Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
