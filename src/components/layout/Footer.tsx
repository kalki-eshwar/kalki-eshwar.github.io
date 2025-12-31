import Link from 'next/link';
import { getContactInfo } from '@/utils/data';
import { getSocialIcon } from '@/components/SocialIcons';
import { getTailwindClass, COLORS } from '@/presets';

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

          {/* Support Link */}
          <div className="mt-4">
            <Link
              href="/support"
              className={`${getTailwindClass('text-red-600')} transition-colors duration-200 relative group inline-flex items-center gap-1 font-medium`}
              title="Support"
              style={{
                backgroundImage: `linear-gradient(to right, ${COLORS.primary[600]}, ${COLORS.primary[600]})`,
                backgroundSize: '0% 2px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                transition: 'background-size 200ms ease-in-out'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundSize = '100% 2px'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundSize = '0% 2px'; }}
              onFocus={(e) => { e.currentTarget.style.backgroundSize = '100% 2px'; }}
              onBlur={(e) => { e.currentTarget.style.backgroundSize = '0% 2px'; }}
              onTouchStart={(e) => { e.currentTarget.style.backgroundSize = '100% 2px'; }}
              data-analytics="button_click"
              data-analytics-label="support_footer"
              data-analytics-section="footer"
            >
              Support
            </Link> my work
          </div>

          {/* Copyright */}
          <p className={`text-sm ${getTailwindClass('text-gray-500')}`}>
            © {currentYear} Kalki Eshwar
          </p>


        </div>
      </div>
    </footer>
  );
}