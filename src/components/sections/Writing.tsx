'use client';

import { motion } from 'framer-motion';
import Section, { SectionHeading } from '@/components/Section';

const articles = [
  {
    title: 'The Signal Beyond Labels – Part II',
    platforms: ['Substack'],
    date: 'Oct 2025',
    url: 'https://dashraththinks.substack.com/',
  },
  {
    title: 'The Signal Beyond Labels: Part 1',
    platforms: ['Substack', 'Medium'],
    date: 'Aug 2025',
    url: 'https://dashraththinks.substack.com/',
  },
  {
    title: 'The Layers of Mind: Drowning and Rising of Thoughts',
    platforms: ['Substack', 'Medium'],
    date: 'Aug 2025',
    url: 'https://dashraththinks.substack.com/',
  },
];

export default function Writing() {
  return (
    <Section id="writing" label="Writing">
      <SectionHeading>Writing</SectionHeading>
      <p className="mb-6 text-sm text-zinc-400">
        Exploring consciousness, philosophy, and the signal beyond the noise in
        human thought.
      </p>
      <div className="space-y-2">
        {articles.map((a, i) => (
          <motion.a
            key={a.title}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="group flex items-start justify-between gap-4 rounded-lg p-3 -mx-3 hover:bg-white/[0.03] transition-colors"
            aria-label={`${a.title} (opens in new tab)`}
          >
            <div className="min-w-0">
              <h3 className="text-sm font-medium text-zinc-300 group-hover:text-accent-light transition-colors">
                {a.title}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                {a.platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded bg-zinc-800/60 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500"
                  >
                    {p}
                  </span>
                ))}
                <span className="text-xs text-zinc-600">{a.date}</span>
              </div>
            </div>
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600 group-hover:text-accent transition-colors"
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
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
