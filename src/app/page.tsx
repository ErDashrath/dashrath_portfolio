import NeuralCanvas from '@/components/NeuralCanvas';
import CursorGlow from '@/components/CursorGlow';
import Sidebar from '@/components/Sidebar';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import AllProjects from '@/components/sections/AllProjects';
import Hackathons from '@/components/sections/Hackathons';
import Certifications from '@/components/sections/Certifications';
import Writing from '@/components/sections/Writing';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative">
      {/* ── Background effects ── */}
      <NeuralCanvas />
      <CursorGlow />

      {/* ── Skip link (a11y) ── */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
      >
        Skip to content
      </a>

      {/* ── Main layout ── */}
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Skills />
            <FeaturedProjects />
            <AllProjects />
            <Hackathons />
            <Certifications />
            <Writing />
            <Contact />

            {/* ── Footer ── */}
            <footer className="mt-12 max-w-md border-t border-zinc-800/50 pt-8 pb-16 text-xs text-zinc-500 sm:pb-0">
              <p>
                Designed &amp; built by Dashrath Parekar with{' '}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-accent transition-colors"
                >
                  Next.js
                </a>
                ,{' '}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-accent transition-colors"
                >
                  Tailwind CSS
                </a>
                , and{' '}
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-accent transition-colors"
                >
                  Framer Motion
                </a>
                . Deployed on{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-accent transition-colors"
                >
                  Vercel
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
