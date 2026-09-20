import React from 'react';
import Link from 'next/link';

interface SectionHeadingProps {
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
}

export function SectionHeading({
  title,
  description,
  actionText,
  actionHref,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm text-zinc-600 max-w-2xl">{description}</p>
        )}
      </div>
      {actionText && actionHref && (
        <Link
          href={actionHref}
          className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-600 rounded transition-colors shrink-0"
        >
          <span>{actionText}</span>
          <span className="ml-1">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
