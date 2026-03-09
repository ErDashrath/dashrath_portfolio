'use client';

import { useState, useEffect } from 'react';

interface Props {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export default function TypeWriter({
  strings,
  speed = 80,
  deleteSpeed = 40,
  pause = 2200,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduced) {
      setText(strings[0]);
      return;
    }

    const current = strings[idx];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => (i + 1) % strings.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText(
          deleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        ),
      deleting ? deleteSpeed : speed
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx, strings, speed, deleteSpeed, pause]);

  return (
    <span className="text-accent-light font-mono">
      {text}
      <span className="animate-pulse ml-0.5 text-accent" aria-hidden="true">
        |
      </span>
    </span>
  );
}
