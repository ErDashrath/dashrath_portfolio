'use client';

import { motion } from 'framer-motion';
import Section, { SectionHeading } from '@/components/Section';

const certs = [
  { name: 'AI Foundations Associate', org: 'Oracle' },
  { name: 'Generative AI Professional', org: 'Oracle' },
  { name: 'AI Vector Search Professional', org: 'Oracle' },
  { name: 'Data Science Professional', org: 'Oracle' },
  { name: 'Backend Development Professional Certificate', org: 'Microsoft / Coursera' },
];

export default function Certifications() {
  return (
    <Section id="certifications" label="Certifications">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid gap-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="flex items-center gap-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-3 hover:border-accent/20 transition-colors"
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10"
              aria-hidden="true"
            >
              <svg
                className="h-4 w-4 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-200">{c.name}</h3>
              <p className="text-xs text-zinc-500">{c.org}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education mini-section */}
      <div className="mt-10">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Education
        </h3>
        <div className="space-y-3">
          <div className="rounded-lg border border-zinc-800/40 bg-zinc-900/20 p-4">
            <h4 className="text-sm font-semibold text-zinc-200">
              B.E. Computer Engineering
            </h4>
            <p className="text-xs text-zinc-400">
              Terna Engineering College, Navi Mumbai &middot; Expected 2026
            </p>
            <p className="mt-1 text-xs text-accent-light font-medium tabular-nums">
              CGPA: 8.13 / 10
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 rounded-lg border border-zinc-800/40 bg-zinc-900/20 p-3">
              <p className="text-xs font-medium text-zinc-300">HSC &middot; 91.5%</p>
              <p className="text-xs text-zinc-500">Rajashri Shahu College, Latur</p>
            </div>
            <div className="flex-1 rounded-lg border border-zinc-800/40 bg-zinc-900/20 p-3">
              <p className="text-xs font-medium text-zinc-300">SSC &middot; 92.4%</p>
              <p className="text-xs text-zinc-500">Madhyamik Ashram Shala</p>
            </div>
          </div>
        </div>
      </div>

      {/* Languages mini-section */}
      <div className="mt-8">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Languages Spoken
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            { lang: 'English', level: 'C2 Proficient' },
            { lang: 'Japanese', level: 'JLPT N5' },
            { lang: 'Hindi', level: 'Native' },
            { lang: 'Marathi', level: 'Native' },
          ].map((l) => (
            <span
              key={l.lang}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800/40 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-400"
            >
              <span className="font-medium text-zinc-300">{l.lang}</span>
              <span className="text-zinc-600">&middot;</span>
              {l.level}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
