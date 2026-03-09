'use client';

import Section, { SectionHeading } from '@/components/Section';

const jobs = [
  {
    period: 'Jul 2025 — Present',
    title: 'AI Engineer Intern',
    company: 'HealthFirst Priority',
    url: 'https://frontend-hfp.vercel.app/',
    bullets: [
      'Fine-tuned 7B+ parameter models using QLoRA — 40% inference latency reduction for edge deployment',
      'Engineered RAG pipelines (LangChain + Haystack) — 95% context accuracy on unstructured medical data',
      'Architected distributed inference with llama.cpp + Headscale across low-resource nodes',
      'Implemented federated learning protocols for privacy-preserving model training',
    ],
    tech: [
      'QLoRA',
      'llama.cpp',
      'LangChain',
      'Haystack',
      'FastAPI',
      'ChromaDB',
      'Headscale',
    ],
  },
  {
    period: '2024',
    title: 'Web Development Intern',
    company: 'Oasis Infobyte',
    url: null,
    bullets: [
      'Delivered 3 production frontend projects: landing pages, portfolio, interactive calculator',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    period: '2024',
    title: 'Web Development Intern',
    company: 'CodSoft',
    url: null,
    bullets: [
      'Built 3 responsive frontend applications focusing on UI/UX and interactivity',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default function Experience() {
  return (
    <Section id="experience" label="Work experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-8">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all rounded-lg p-4 -mx-4 hover:bg-white/[0.03]"
          >
            {/* Date */}
            <div className="sm:col-span-2 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:mb-0">
              {job.period}
            </div>

            {/* Content */}
            <div className="sm:col-span-6">
              <h3 className="font-medium leading-snug text-zinc-200">
                {job.title} &middot;{' '}
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {job.company}
                    <svg
                      className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <span>{job.company}</span>
                )}
              </h3>

              <ul className="mt-2 space-y-1.5 text-sm text-zinc-400 leading-relaxed">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                {job.tech.map((t) => (
                  <li key={t}>
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
