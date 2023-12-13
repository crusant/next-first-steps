import type { ReactNode } from 'react';
import Navbar from '@/components/navbar/Navbar';

export default function InfoLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-8">
        {children}
      </main>
    </>
  );
}
