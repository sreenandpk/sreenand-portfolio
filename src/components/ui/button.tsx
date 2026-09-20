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
    'inline-flex items-center justify-center font-medium text-sm rounded-lg px-4 py-2.5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-neutral-950';

  const variants = {
    primary:
      'bg-emerald-500 text-neutral-950 hover:bg-emerald-400 font-semibold shadow-sm shadow-emerald-500/10',
    secondary:
      'bg-neutral-800 text-neutral-100 hover:bg-neutral-700 border border-neutral-700/60',
    outline:
      'border border-neutral-700 text-neutral-300 hover:border-emerald-500/60 hover:text-emerald-400 bg-transparent',
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
