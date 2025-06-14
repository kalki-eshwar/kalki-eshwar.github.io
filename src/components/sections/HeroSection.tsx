import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Hero Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
                Hi, I'm KalkiEshwar
              </h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Software Developer & Tech Writer
              </p>
            </div>

            {/* Description */}
            <div className="max-w-lg mx-auto">
              <p className="text-gray-600 leading-relaxed">
                I create meaningful digital experiences and share insights
                about technology, programming, and software development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-medium text-gray-900">
                  5+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-gray-900">
                  50+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Projects Built
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-gray-900">
                  20+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Articles Written
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-gray-900">
                  10k+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Lines of Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}