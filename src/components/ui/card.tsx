import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-200 hover:border-neutral-700/80 ${className}`}
    >
      {children}
    </div>
  );
}
