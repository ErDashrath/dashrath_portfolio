'use client';

import Section, { SectionHeading } from '@/components/Section';

export default function About() {
  return (
    <Section id="about" label="About me">
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4 text-zinc-400 leading-relaxed">
        <p>
          I&rsquo;m an AI Engineer focused on building{' '}
          <span className="text-zinc-200 font-medium">
            agentic systems, LLMOps pipelines, and RAG architectures
          </span>{' '}
          that ship to production. Currently interning at{' '}
          <a
            href="https://frontend-hfp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:text-accent transition-colors font-medium"
          >
            HealthFirst Priority
          </a>
          , where I fine-tune 7B+ LLMs with QLoRA, build RAG pipelines with
          95% context accuracy, and architect distributed inference systems
          across edge nodes.
        </p>
        <p>
          My sweet spot is the intersection of{' '}
          <span className="text-zinc-200 font-medium">
            LLM infrastructure and applied AI
          </span>{' '}
          &mdash; from quantizing and serving models on low-resource devices to
          orchestrating multi-agent workflows with{' '}
          <span className="text-zinc-200">LangGraph</span> and{' '}
          <span className="text-zinc-200">LangChain</span>. I&rsquo;ve built
          voice AI systems detecting deepfakes across 5 Indian languages,
          privacy-first mental health platforms running entirely in-browser, and
          adaptive learning engines powered by Bayesian knowledge tracing.
        </p>
        <p>
          When I&rsquo;m not shipping AI products, I{' '}
          <a
            href="https://dashraththinks.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:text-accent transition-colors font-medium"
          >
            write about consciousness and philosophy
          </a>{' '}
          on Substack &mdash; exploring the signal beyond the noise in human
          thought.
        </p>
        {/* Key stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: '18+', label: 'Projects' },
            { value: '4×', label: 'Hackathon Finalist' },
            { value: '5', label: 'Certifications' },
            { value: '7', label: 'Live Deployments' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-3 text-center"
            >
              <div className="text-xl font-bold text-accent tabular-nums font-variant-numeric">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
