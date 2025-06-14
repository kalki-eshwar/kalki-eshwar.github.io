import Link from 'next/link';
import { SocialLink } from '@/types';

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/KalkiEshwarD',
    icon: 'github',
    label: 'GitHub Profile',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/kalkieshward',
    icon: 'linkedin',
    label: 'LinkedIn Profile',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/kalkieshward',
    icon: 'twitter',
    label: 'Twitter Profile',
  },
  {
    platform: 'Email',
    url: 'mailto:hello@kalkieshward.me',
    icon: 'email',
    label: 'Send Email',
  },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <span className="font-medium text-lg text-gray-900">
                KalkiEshwar
              </span>
            </div>
            <p className="text-gray-600 text-sm max-w-md leading-relaxed">
              Software developer creating meaningful digital experiences.
              Sharing insights on technology and programming.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="font-medium text-gray-900">Links</h3>
            <nav className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} KalkiEshwar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Social Icon Component
function SocialIcon({ icon }: { icon: string }) {
  const iconClass = "w-5 h-5";
  
  switch (icon) {
    case 'github':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      );
    case 'email':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}