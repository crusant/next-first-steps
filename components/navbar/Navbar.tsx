import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import ActiveLink from './active-link/ActiveLink';

const routes = [
  {
    path: '/about',
    text: 'About'
  },
  {
    path: '/pricing',
    text: 'Pricing'
  },
  {
    path: '/contact',
    text: 'Contact'
  }
];

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between mx-auto max-w-7xl px-8 py-6">
        <Link
          className="flex p-1.5 m-[-0.375rem]"
          href="/"
        >
          <HomeIcon size="medium" />
        </Link>
        <div className="flex gap-12">
          {routes.map((route) => (
            <ActiveLink
              key={route.path}
              path={route.path}
              text={route.text}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}
