'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink({
  className = '',
  path,
  children
}: {
  className?: string;
  path: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={`text-gray-900${className}${pathname === path ? ' text-indigo-600' : ''}`}
      href={path}
    >
      {children}
    </Link>
  );
}
