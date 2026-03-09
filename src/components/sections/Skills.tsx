'use client';

import { motion } from 'framer-motion';
import Section, { SectionHeading } from '@/components/Section';

const categories = [
  {
    name: 'Agentic / LLM Orchestration',
    icon: '🧠',
    skills: ['LangChain', 'LangGraph', 'Haystack', 'CrewAI'],
    gradient: 'from-emerald-500/20 to-emerald-900/5',
  },
  {
    name: 'LLM Inference & Fine-Tuning',
    icon: '⚡',
    skills: ['llama.cpp', 'QLoRA', 'WebLLM', 'HuggingFace Transformers', 'Transformers.js', 'Gradio'],
    gradient: 'from-cyan-500/20 to-cyan-900/5',
  },
  {
    name: 'Models Worked With',
    icon: '🤖',
    skills: ['Llama', 'Mistral', 'Qwen 2.5', 'Phi-3 Mini', 'BioMedLM', 'Gemini API'],
    gradient: 'from-violet-500/20 to-violet-900/5',
  },
  {
    name: 'Vector DBs & RAG',
    icon: '🔍',
    skills: ['ChromaDB', 'Supabase pgvector', 'RAG Pipelines', 'LangChain Retrieval'],
    gradient: 'from-amber-500/20 to-amber-900/5',
  },
  {
    name: 'Voice AI',
    icon: '🎙️',
    skills: ['Whisper STT', 'Piper TTS', 'Kokoro TTS', 'Wav2Lip', 'SpeechBrain', 'Wav2Vec2'],
    gradient: 'from-rose-500/20 to-rose-900/5',
  },
  {
    name: 'Backend',
    icon: '🔧',
    skills: ['Python', 'Django', 'FastAPI', 'Flask', 'Celery', 'Express.js', 'Node.js'],
    gradient: 'from-blue-500/20 to-blue-900/5',
  },
  {
    name: 'Frontend',
    icon: '🎨',
    skills: ['React 18/19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    gradient: 'from-pink-500/20 to-pink-900/5',
  },
  {
    name: 'DevOps & Infra',
    icon: '🚀',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Vercel', 'Nginx', 'AWS'],
    gradient: 'from-orange-500/20 to-orange-900/5',
  },
];

export default function Skills() {
  return (
    <Section id="skills" label="Technical skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className={`group rounded-xl border border-zinc-800/50 p-4 bg-gradient-to-br ${cat.gradient} hover:border-zinc-700/60 transition-all duration-300`}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="text-base" aria-hidden="true">
                {cat.icon}
              </span>
              <h3 className="text-sm font-semibold text-zinc-200">
                {cat.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="inline-block rounded-md border border-zinc-800/40 bg-black/30 px-2 py-0.5 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional: Databases, Languages */}
      <div className="mt-8 space-y-4">
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Databases
          </h3>
          <div className="flex flex-wrap gap-2">
            {['PostgreSQL', 'MongoDB', 'Supabase', 'SQLite', 'Redis', 'ChromaDB', 'IndexedDB'].map((db) => (
              <span
                key={db}
                className="inline-block rounded-md border border-zinc-800/40 bg-zinc-900/40 px-2.5 py-1 text-xs text-zinc-400"
              >
                {db}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Python', 'TypeScript', 'JavaScript', 'C++', 'C', 'SQL', 'Bash'].map((l) => (
              <span
                key={l}
                className="inline-block rounded-md border border-zinc-800/40 bg-zinc-900/40 px-2.5 py-1 text-xs text-zinc-400"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
