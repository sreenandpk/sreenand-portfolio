import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-zinc-100 text-zinc-700 border border-zinc-200/80">
      {children}
    </span>
  );
}
