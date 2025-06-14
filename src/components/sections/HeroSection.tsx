import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
                Hi, I'm Kalki Eshwar D
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Computer Science Student at VIT Vellore
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              I'm passionate about software development, mobile applications, 
              and creating meaningful digital experiences. Currently studying 
              Computer Science and Engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right side - Quick stats or info */}
          <div className="lg:justify-self-end">
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-medium text-gray-900">VIT</div>
                <div className="text-sm text-gray-600 mt-1">University</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-medium text-gray-900">CS</div>
                <div className="text-sm text-gray-600 mt-1">Major</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-medium text-gray-900">3+</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-medium text-gray-900">2</div>
                <div className="text-sm text-gray-600 mt-1">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}