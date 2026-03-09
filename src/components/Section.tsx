'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  id: string;
  label: string;
  children: ReactNode;
}

export default function Section({ id, label, children }: Props) {
  return (
    <motion.section
      id={id}
      aria-label={label}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-8 flex items-center gap-3">
      <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
      {children}
    </h2>
  );
}
