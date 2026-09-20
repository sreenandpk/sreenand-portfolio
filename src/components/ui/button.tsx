import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium text-sm rounded-lg px-4 py-2.5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-white';

  const variants = {
    primary:
      'bg-zinc-900 text-white hover:bg-zinc-800 font-semibold shadow-xs',
    secondary:
      'bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 border border-zinc-200/80',
    outline:
      'border border-zinc-300 text-zinc-800 hover:bg-zinc-100/60 hover:text-zinc-900 bg-white',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
