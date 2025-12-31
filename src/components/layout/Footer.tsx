import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getContactInfo } from '@/utils/data';
import { getSocialIcon } from '@/components/SocialIcons';
import { getTailwindClass } from '@/presets';
import { Analytics } from '@/utils/analytics';
import AnalyticsToggle from '@/components/AnalyticsToggle';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialLinks } = getContactInfo();

  return (
    <footer className={`py-12 border-t ${getTailwindClass('border-gray-100')}`}>
      <div className="container">
        <div className="text-center space-y-6">
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${getTailwindClass('text-gray-500')} ${getTailwindClass('hover:text-gray-700')} transition-colors duration-200`}
                aria-label={`${social.name} Profile`}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className={`text-sm ${getTailwindClass('text-gray-500')}`}>
            © {currentYear} Kalki Eshwar
          </p>

          {/* Analytics toggle (privacy control) */}
          <div className="mt-2">
            <AnalyticsToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}