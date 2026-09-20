import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-emerald-400 text-sm font-semibold">404 Error</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 text-neutral-400">
        The requested URL does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
