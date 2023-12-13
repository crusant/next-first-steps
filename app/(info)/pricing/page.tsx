import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestros precios',
  description: 'Página que contiene el costo de nuestros servicios.'
};

export default function PricingPage() {
  return (
    <h1 className="text-gray-900 text-6xl font-bold tracking-tight">
      Pricing Page
    </h1>
  );
}
