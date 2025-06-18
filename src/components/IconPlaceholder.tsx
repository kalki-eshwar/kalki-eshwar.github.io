interface IconProps {
    altTitle?: string;
    imageLocation?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
}

const Icon = ({ 
    altTitle = 'KE', 
    imageLocation, 
    size = 'md', 
    variant = 'primary',
    className = ''
}: IconProps) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-20 h-20'
    };

    const variantClasses = {
        primary: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 border-blue-300',
        secondary: 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 border-gray-300',
        accent: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 border-purple-300'
    };

    const baseClasses = `
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        rounded-xl mx-auto mb-2 flex items-center justify-center
        border shadow-sm hover:shadow-md transition-all duration-200
        hover:scale-105 transform
        ${className}
    `.replace(/\s+/g, ' ').trim();

    if (!imageLocation) {
        // Extract initials from altTitle for better placeholder
        const initials = altTitle
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('')
            .slice(0, 2);

        const textSizes = {
            sm: 'text-sm',
            md: 'text-lg',
            lg: 'text-xl',
            xl: 'text-2xl'
        };

        return (
            <div className={baseClasses} role="img" aria-label={altTitle}>
                <span className={`${textSizes[size]} font-bold`}>
                    {initials}
                </span>
            </div>
        );
    }

    return (
        <div className={baseClasses}>
            <img 
                src={imageLocation}
                alt={altTitle}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
                onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                        const initials = altTitle
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase())
                            .join('')
                            .slice(0, 2);
                        parent.innerHTML = `<span class="text-lg font-bold">${initials}</span>`;
                    }
                }}
            />
        </div>
    );
};

export default Icon;