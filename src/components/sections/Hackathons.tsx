'use client';

import { motion } from 'framer-motion';
import Section, { SectionHeading } from '@/components/Section';

const hackathons = [
  {
    event: 'India AI Impact Buildathon',
    org: 'HCL × GUVI — Bharat Mandapam, New Delhi',
    project: 'SatyaSwara — AI Voice Scam Detection',
    result: 'Top 2% National Finalist',
    detail: 'Selected from 10,000+ teams',
    tier: 'gold' as const,
  },
  {
    event: 'ThinkPlus National Hackathon 2025',
    org: '',
    project: 'Team StrawHats',
    result: 'Top 5 National Finalist',
    detail: 'Awarded Internship',
    tier: 'gold' as const,
  },
  {
    event: 'Operation Trinetra Hackathon',
    org: 'Anna University',
    project: '',
    result: 'Special Mention Award',
    detail: 'Top tier out of 170+ teams',
    tier: 'silver' as const,
  },
  {
    event: 'Enigma Hackathon',
    org: 'SIES College of Engineering',
    project: 'VitalCircle — Predictive Chronic Care',
    result: 'Top 7 Finalist',
    detail: 'Selected from 200+ teams',
    tier: 'silver' as const,
  },
  {
    event: 'Smart India Hackathon (SIH)',
    org: '',
    project: '',
    result: 'Participant',
    detail: '',
    tier: 'bronze' as const,
  },
  {
    event: 'Flipkart Grid 6.0',
    org: '',
    project: '',
    result: 'Participant',
    detail: '',
    tier: 'bronze' as const,
  },
];

const tierStyle = {
  gold: 'border-amber-500/30 bg-amber-500/5',
  silver: 'border-zinc-400/20 bg-zinc-400/5',
  bronze: 'border-zinc-700/20 bg-zinc-700/5',
};
const tierDot = {
  gold: 'bg-amber-400',
  silver: 'bg-zinc-400',
  bronze: 'bg-zinc-600',
};

export default function Hackathons() {
  return (
    <Section id="hackathons" label="Hackathons and competitions">
      <SectionHeading>Hackathons</SectionHeading>
      <div className="space-y-3">
        {hackathons.map((h, i) => (
          <motion.div
            key={h.event}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className={`rounded-lg border p-4 transition-colors hover:border-accent/20 ${tierStyle[h.tier]}`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${tierDot[h.tier]}`}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-zinc-200">
                  {h.event}
                </h3>
                {h.org && (
                  <p className="text-xs text-zinc-500">{h.org}</p>
                )}
                <div className="mt-1 flex flex-wrap items-center gap-x-2">
                  <span className="text-xs font-semibold text-accent-light">
                    {h.result}
                  </span>
                  {h.detail && (
                    <span className="text-xs text-zinc-500">
                      — {h.detail}
                    </span>
                  )}
                </div>
                {h.project && (
                  <p className="mt-1 text-xs italic text-zinc-400">
                    {h.project}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
