import Link from 'next/link';
import { getContactInfo } from '@/utils/data';
import { getSocialIcon } from '@/components/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialLinks } = getContactInfo();

  return (
    <footer className="py-12 border-t border-gray-100">
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
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label={`${social.name} Profile`}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} KalkiEshwar
          </p>
        </div>
      </div>
    </footer>
  );
}