import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dashrath Parekar — AI Engineer',
  description:
    'AI Engineer specializing in agentic systems, LLMOps, and RAG pipelines. Building production AI at HealthFirst Priority.',
  keywords: [
    'AI Engineer',
    'LLMOps',
    'RAG',
    'Agentic Systems',
    'LangChain',
    'LangGraph',
    'Machine Learning',
    'Dashrath Parekar',
  ],
  authors: [{ name: 'Dashrath Parekar' }],
  openGraph: {
    title: 'Dashrath Parekar — AI Engineer',
    description:
      'AI Engineer building agentic systems, LLMOps pipelines, and RAG architectures.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="bg-[#0a0a0a] text-zinc-300 antialiased font-sans">
        {children}
        <Script
          src="https://avatar.nomineelife.com/echoai-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
