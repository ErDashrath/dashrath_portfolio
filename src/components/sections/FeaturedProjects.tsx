'use client';

import { motion } from 'framer-motion';
import Section, { SectionHeading } from '@/components/Section';

const featured = [
  {
    title: 'EchoLearn — Privacy-First Mental Health AI',
    description:
      '27-feature mental health platform running 100% in-browser — zero server calls. WebGPU-powered local AI inference, LangGraph stateful therapeutic conversations, AES-GCM encrypted storage, DASS-21 clinical assessment, and voice therapy with 5 ASMR voices.',
    tech: ['React 18', 'TypeScript', 'WebLLM', 'WebGPU', 'LangGraph', 'Transformers.js', 'Piper WASM'],
    live: 'https://echo-learn-one.vercel.app/',
    github: 'https://github.com/ErDashrath/EchoLearn',
    badge: 'Zero-Server · In-Browser AI',
  },
  {
    title: 'SatyaSwara — AI Voice Scam Detection',
    description:
      'Production API detecting AI-generated voice scams in <200ms response time. Built to combat hyper-realistic synthetic speech with global model loading, memory-safe 4s truncation, and dynamic confidence scoring.',
    tech: ['FastAPI', 'HuggingFace', 'librosa', 'PyTorch'],
    live: null,
    github: 'https://github.com/ErDashrath/SatyaSwara',
    badge: '🏆 Top 2% — India AI Buildathon (10,000+ teams)',
  },
  {
    title: 'PragatiPath — Adaptive Learning Platform',
    description:
      'Full Bayesian Knowledge Tracing implementation with LangGraph multi-agent orchestration for personalized exam prep (JEE, NEET, CAT, GATE). 179+ questions, adaptive difficulty engine, optional Deep Knowledge Tracing neural service.',
    tech: ['Django 5', 'React 18', 'LangGraph', 'Gemini API', 'PostgreSQL', 'NumPy'],
    live: null,
    github: 'https://github.com/ErDashrath/PragatiPath',
    badge: 'Multi-Agent AI · Bayesian KT',
  },
  {
    title: 'VitalCircle — Predictive Chronic Care',
    description:
      'AI Stability Score engine with WebLLM running BioMedLM (2.7B) directly in-browser for privacy-preserving health suggestions. Hybrid architecture escalates complex cases from local AI to peer/doctor networks.',
    tech: ['Django', 'WebLLM', 'BioMedLM', 'Supabase', 'Docker', 'React'],
    live: null,
    github: 'https://github.com/ErDashrath/Enigma_MAYA_NET',
    badge: '🏆 Top 7 — Enigma Hackathon (200+ teams)',
  },
  {
    title: 'AI-HFP — Healthcare AI Chat Interface',
    description:
      'Secure AI chat with server-side API proxy pattern — credentials never reach client. Streaming SSE responses, clinical glassmorphism UI with dark/light themes, and Zustand state management.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Shadcn/ui', 'Zustand'],
    live: 'https://frontend-hfp.vercel.app/',
    github: 'https://github.com/ErDashrath/AI-HFP',
    badge: 'Production Healthcare AI',
  },
];

export default function FeaturedProjects() {
  return (
    <Section id="projects" label="Featured projects">
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="space-y-5">
        {featured.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="group relative rounded-xl border border-zinc-800/50 bg-zinc-900/40 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-zinc-900/70 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.15)]"
          >
            {/* Badge */}
            <div className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light">
              {p.badge}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold leading-tight text-zinc-100">
              {p.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {p.description}
            </p>

            {/* Links */}
            <div className="mt-3 flex items-center gap-4">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-accent transition-colors"
                  aria-label={`GitHub for ${p.title} (opens in new tab)`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-accent transition-colors"
                  aria-label={`Live demo for ${p.title} (opens in new tab)`}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>

            {/* Tech */}
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
              {p.tech.map((t) => (
                <li key={t}>
                  <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-light/80">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
