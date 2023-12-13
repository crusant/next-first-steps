'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink({
  path,
  text
}: {
  path: string;
  text: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={`text-gray-900 text-sm/6 font-semibold${pathname === path ? ' text-indigo-600' : ''}`}
      href={path}
    >
      {text}
    </Link>
  );
}
