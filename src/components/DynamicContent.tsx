import Link from 'next/link';
import { ReactElement } from 'react';
import { COLORS, getTailwindClass } from '@/presets';

interface DynamicContentProps {
  content: string;
  className?: string;
}

export default function DynamicContent({ content, className = '' }: DynamicContentProps): ReactElement {
  // Parse the content and replace link patterns with actual Link components
  const parseContent = (text: string): (string | ReactElement)[] => {
    const linkPattern = /\[link:([^:]+):([^\]]+)\]/g;
    const parts: (string | ReactElement)[] = [];
    let lastIndex = 0;
    let match;
    let keyCounter = 0;

    while ((match = linkPattern.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      const [, linkType, linkText] = match;
      const linkUrl = getLinkUrl(linkType, linkText);
      const isExternal = linkUrl.startsWith('http');

      if (isExternal) {
        parts.push(
          <a
            key={keyCounter++}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${getTailwindClass('text-red-600')} hover:${getTailwindClass('text-red-700')} hover:underline active:underline focus:underline transition-colors duration-200 inline-flex items-center gap-1`}
            title={`Visit ${linkText} (opens in new tab)`}
          >
            {linkText}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        );
      } else {
        parts.push(
          <Link
            key={keyCounter++}
            href={linkUrl}
            className={`${getTailwindClass('text-red-600')} hover:${getTailwindClass('text-red-700')} transition-colors duration-200 relative group`}
            title={`Go to ${linkText}`}
            style={{
              backgroundImage: `linear-gradient(to right, ${COLORS.primary[600]}, ${COLORS.primary[600]})`,
              backgroundSize: '0% 2px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left bottom',
              transition: 'background-size 200ms ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundSize = '100% 2px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundSize = '0% 2px';
            }}
            onFocus={(e) => {
              e.currentTarget.style.backgroundSize = '100% 2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.backgroundSize = '0% 2px';
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.backgroundSize = '100% 2px';
            }}
          >
            {linkText}
          </Link>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const getLinkUrl = (linkType: string, linkText: string): string => {
    switch (linkType) {
      case 'work':
        // Create anchor links to specific work experiences
        if (linkText.includes('Foradian')) {
          return '/work#foradian-technologies';
        } else if (linkText.includes('Monclarity')) {
          return '/work#monclarity-solutions-pvt-ltd';
        } else if (linkText.includes('Valsco')) {
          return '/work#valsco-technologies';
        }
        return '/work';
      
      case 'education':
        // Link to education page with specific anchor if needed
        if (linkText.includes('Vellore Institute of Technology')) {
          return '/education#vit';
        }
        return '/education';
      
      case 'projects':
        // Link to projects page
        if (linkText.includes('latest projects')) {
          return '/projects';
        }
        return '/projects';
      
      case 'achievements':
        // If a specific achievement is referenced, create an anchor link
        if (linkText && linkText.trim() !== '' && linkText !== 'Achievements') {
          const slug = linkText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          return `/achievements#${slug}`;
        }
        return '/achievements';
      
      case 'articles':
        return '/articles';
      
      case 'contact':
        return '/contact';
      
      default:
        return '#';
    }
  };

  const parsedContent = parseContent(content);

  return (
    <span className={className}>
      {parsedContent.map((part, index) => 
        typeof part === 'string' ? part : <span key={index}>{part}</span>
      )}
    </span>
  );
}
