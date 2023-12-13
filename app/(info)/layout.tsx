import type { ReactNode } from 'react';

export default function InfoLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <main className="mx-auto max-w-7xl px-8">
        {children}
      </main>
    </>
  );
}
