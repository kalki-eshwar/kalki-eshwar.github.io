import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="section bg-gradient-to-br from-white via-primary-50/30 to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm{' '}
                <span className="text-gradient">KalkiEshwar</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Software Developer & Tech Writer
              </p>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate software developer who loves creating meaningful digital experiences. 
                I share my journey through code, write about technology, and explore the intersection 
                of programming and life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/work"
                className="btn-primary btn-lg w-full sm:w-auto"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="btn-outline btn-lg w-full sm:w-auto"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Projects Built
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  20+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Articles Written
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  10k+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Lines of Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}