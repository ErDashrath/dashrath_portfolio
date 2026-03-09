'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { SectionHeading } from '@/components/Section';

type View = 'domain' | 'tech';

interface Project {
  name: string;
  desc: string;
  github: string;
  live: string | null;
}

const byDomain: Record<string, Project[]> = {
  'Healthcare AI': [
    { name: 'EchoLearn', desc: 'Privacy-first mental health — 100% in-browser AI', github: 'https://github.com/ErDashrath/EchoLearn', live: 'https://echo-learn-one.vercel.app/' },
    { name: 'VitalCircle', desc: 'Predictive chronic care with edge AI', github: 'https://github.com/ErDashrath/Enigma_MAYA_NET', live: null },
    { name: 'AI-HFP', desc: 'Secure healthcare AI chat interface', github: 'https://github.com/ErDashrath/AI-HFP', live: 'https://frontend-hfp.vercel.app/' },
    { name: 'Health Buddy', desc: 'Medical RAG assistant (Phi-3 + ChromaDB)', github: 'https://github.com/ErDashrath/Healthbuddy', live: 'https://healthbuddy-kappa.vercel.app/' },
  ],
  'Voice & Audio AI': [
    { name: 'SatyaSwara', desc: 'AI voice scam detection API (<200ms)', github: 'https://github.com/ErDashrath/SatyaSwara', live: null },
    { name: 'Multilingual Voice Detection', desc: 'Deepfake detection — 5 Indian languages', github: 'https://github.com/ErDashrath/Multilingual_ai_voice_detection', live: null },
    { name: 'Vani AI', desc: 'Talking face with lip-sync generation', github: 'https://github.com/ErDashrath/vani', live: null },
    { name: 'EchoAI-Avatar', desc: 'Voice chat with animated 3D avatars', github: 'https://github.com/ErDashrath/vani_avatar', live: null },
  ],
  'Education & Learning': [
    { name: 'PragatiPath', desc: 'Adaptive learning with Bayesian KT + LangGraph', github: 'https://github.com/ErDashrath/PragatiPath', live: null },
    { name: 'AI-Buddy', desc: 'English speaking practice AI', github: 'https://github.com/ErDashrath/AI-Buddy', live: 'https://ai-buddy-tau.vercel.app/' },
  ],
  'Security & Defense': [
    { name: 'Operation SainyaSecure', desc: 'Hybrid military communication system', github: 'https://github.com/ErDashrath/operation-SainyaSecure', live: 'https://operation-sainya-secure.vercel.app/' },
    { name: 'SainyaSecure', desc: 'Battlefield messenger with blockchain sync', github: 'https://github.com/ErDashrath/SainyaSecure', live: null },
    { name: 'Cyber-Honeypot', desc: 'Multi-phase cybersecurity honeypot', github: 'https://github.com/ErDashrath/Cyber-Honeypot', live: null },
  ],
  '3D & Creative': [
    { name: 'SPACEWALK', desc: 'Interactive 3D space exploration (Three.js)', github: 'https://github.com/ErDashrath/SPACEWALK', live: 'https://spacewalk-three.vercel.app/' },
  ],
  'Tools & Other': [
    { name: 'P2P TCP Communication', desc: 'Peer-to-peer messaging — no central server', github: 'https://github.com/ErDashrath/p2pProject1', live: null },
    { name: 'EasyTent Rentals', desc: 'Production business website', github: 'https://github.com/ErDashrath/EasyTent-Rentals', live: 'https://www.easytentrentals.me/' },
    { name: 'AICTE Diabetes Predictor', desc: 'ML-based diabetes prediction (Flask)', github: 'https://github.com/ErDashrath/AICTE_AiProject', live: null },
    { name: 'Attendance Automation', desc: 'OCR-based attendance tracking', github: 'https://github.com/ErDashrath/attendance-automation', live: null },
  ],
};

const byTech: Record<string, Project[]> = {
  'LangChain / LangGraph / RAG': [
    { name: 'EchoLearn', desc: 'LangGraph stateful therapeutic conversations', github: 'https://github.com/ErDashrath/EchoLearn', live: 'https://echo-learn-one.vercel.app/' },
    { name: 'Health Buddy', desc: 'LangChain RAG + Phi-3 + ChromaDB', github: 'https://github.com/ErDashrath/Healthbuddy', live: 'https://healthbuddy-kappa.vercel.app/' },
    { name: 'PragatiPath', desc: 'LangGraph multi-agent orchestration + Gemini', github: 'https://github.com/ErDashrath/PragatiPath', live: null },
  ],
  'WebLLM / Browser AI': [
    { name: 'EchoLearn', desc: 'WebGPU + Qwen 2.5 in-browser inference', github: 'https://github.com/ErDashrath/EchoLearn', live: 'https://echo-learn-one.vercel.app/' },
    { name: 'VitalCircle', desc: 'BioMedLM (2.7B) via WebLLM', github: 'https://github.com/ErDashrath/Enigma_MAYA_NET', live: null },
  ],
  'Voice AI (STT / TTS / Deepfake)': [
    { name: 'SatyaSwara', desc: 'HuggingFace deepfake detection API', github: 'https://github.com/ErDashrath/SatyaSwara', live: null },
    { name: 'Multilingual Detection', desc: 'Wav2Vec2 + SpeechBrain ECAPA', github: 'https://github.com/ErDashrath/Multilingual_ai_voice_detection', live: null },
    { name: 'Vani AI', desc: 'Kokoro TTS + Wav2Lip lip sync', github: 'https://github.com/ErDashrath/vani', live: null },
    { name: 'EchoAI-Avatar', desc: 'Three.js + Web Speech API + SSE', github: 'https://github.com/ErDashrath/vani_avatar', live: null },
  ],
  'Django / FastAPI': [
    { name: 'SatyaSwara', desc: 'FastAPI production API', github: 'https://github.com/ErDashrath/SatyaSwara', live: null },
    { name: 'PragatiPath', desc: 'Django 5 + Django Ninja', github: 'https://github.com/ErDashrath/PragatiPath', live: null },
    { name: 'Health Buddy', desc: 'FastAPI REST + ChromaDB', github: 'https://github.com/ErDashrath/Healthbuddy', live: 'https://healthbuddy-kappa.vercel.app/' },
    { name: 'Operation SainyaSecure', desc: 'Django backend + P2P', github: 'https://github.com/ErDashrath/operation-SainyaSecure', live: 'https://operation-sainya-secure.vercel.app/' },
  ],
  'React / Next.js': [
    { name: 'EchoLearn', desc: 'React 18 + TypeScript + Vite', github: 'https://github.com/ErDashrath/EchoLearn', live: 'https://echo-learn-one.vercel.app/' },
    { name: 'AI-HFP', desc: 'Next.js 16 + React 19 + Shadcn', github: 'https://github.com/ErDashrath/AI-HFP', live: 'https://frontend-hfp.vercel.app/' },
    { name: 'PragatiPath', desc: 'React 18 + Vite + Recharts', github: 'https://github.com/ErDashrath/PragatiPath', live: null },
    { name: 'EasyTent Rentals', desc: 'Next.js + Tailwind + v0.dev', github: 'https://github.com/ErDashrath/EasyTent-Rentals', live: 'https://www.easytentrentals.me/' },
  ],
  'Three.js / 3D': [
    { name: 'SPACEWALK', desc: 'Planets, black holes, nebulas — 3D exploration', github: 'https://github.com/ErDashrath/SPACEWALK', live: 'https://spacewalk-three.vercel.app/' },
    { name: 'EchoAI-Avatar', desc: 'Animated 3D avatars + voice chat', github: 'https://github.com/ErDashrath/vani_avatar', live: null },
  ],
};

/* ── tiny link icons ── */
function ExternalIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
function GhIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function AllProjects() {
  const [view, setView] = useState<View>('domain');
  const data = view === 'domain' ? byDomain : byTech;

  return (
    <Section id="all-projects" label="All projects">
      {/* Header with toggle */}
      <div className="mb-8 flex items-center justify-between">
        <SectionHeading>All Projects</SectionHeading>
        <div
          className="flex gap-1 rounded-lg border border-zinc-800 p-0.5 text-xs"
          role="tablist"
          aria-label="Project view mode"
        >
          {(['domain', 'tech'] as const).map((v) => (
            <button
              key={v}
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`rounded-md px-3 py-1.5 font-medium capitalize transition-colors ${
                view === v
                  ? 'bg-accent/20 text-accent-light'
                  : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              By {v}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-8"
        >
          {Object.entries(data).map(([category, projects]) => (
            <div key={category}>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {category}
                <span className="text-xs text-zinc-600 font-normal tabular-nums">
                  ({projects.length})
                </span>
              </h3>
              <div className="space-y-1 border-l border-zinc-800/50 pl-4">
                {projects.map((p) => (
                  <div
                    key={p.name + category}
                    className="group flex items-start justify-between gap-4 rounded-lg p-2.5 -mx-2 hover:bg-white/[0.025] transition-colors"
                  >
                    <div className="min-w-0">
                      <h4 className="truncate text-sm font-medium text-zinc-300 group-hover:text-accent-light transition-colors">
                        {p.name}
                      </h4>
                      <p className="truncate text-xs text-zinc-500">
                        {p.desc}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2.5">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-accent transition-colors"
                          aria-label={`Live demo — ${p.name}`}
                        >
                          <ExternalIcon />
                        </a>
                      )}
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-accent transition-colors"
                        aria-label={`GitHub — ${p.name}`}
                      >
                        <GhIcon />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
