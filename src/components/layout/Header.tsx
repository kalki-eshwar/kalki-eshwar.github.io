import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NavigationItem } from '@/types';
import { COLOR_COMBINATIONS, getTailwindClass } from '@/presets';

const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Education', href: '/education' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <header className={`py-6 border-b ${getTailwindClass('border-gray-100')}`}>
      <nav className="container">
        <div className="flex justify-between items-center">
          {/* Logo with Profile Image */}
          <Link href="/" className={`flex items-center space-x-3 text-lg font-medium ${getTailwindClass('text-gray-900')}`}>
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="Kalki Eshwar"
                fill
                className="object-cover"
              />
            </div>
            <span>Kalki Eshwar</span>
          </Link>

          {/* Desktop Navigation - spread out more */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  isActiveRoute(item.href)
                    ? `${COLOR_COMBINATIONS.primary.default.text} font-medium`
                    : `${COLOR_COMBINATIONS.neutral.default.text} ${COLOR_COMBINATIONS.primary.hover.text}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${COLOR_COMBINATIONS.neutral.default.text} ${COLOR_COMBINATIONS.neutral.hover.text}`}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pt-4 border-t ${getTailwindClass('border-gray-100')}`}>
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm transition-colors duration-200 ${
                    isActiveRoute(item.href)
                      ? `${COLOR_COMBINATIONS.primary.default.text} font-medium`
                      : `${COLOR_COMBINATIONS.neutral.default.text} ${COLOR_COMBINATIONS.primary.hover.text}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}