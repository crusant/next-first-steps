import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';

export const metadata: Metadata = {
  title: 'Primeros pasos en NEXT.JS',
  description: 'Proyecto para explicar cómo funciona NEXT.JS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
