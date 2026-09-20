import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:border-zinc-300 ${className}`}
    >
      {children}
    </div>
  );
}
