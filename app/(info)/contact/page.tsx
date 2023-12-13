import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactanos',
  description: 'Página que contiene nuestra información de contacto.'
};

export default function ContactPage() {
  return (
    <h1 className="text-gray-900 text-6xl font-bold tracking-tight">
      Contact Page
    </h1>
  );
}
