import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acerca de nosotros',
  description: 'Página que habla acerca de nosotros.'
};

export default function AboutPage() {
  return (
    <h1 className="text-gray-900 text-6xl font-bold tracking-tight">
      About Page
    </h1>
  );
}
