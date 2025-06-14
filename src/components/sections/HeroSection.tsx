import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="section relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/home_background.jpg')"
      }}
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                Hi, I'm <span className="text-red-500">Kalki Eshwar D</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Computer Science Student at VIT Vellore
              </p>
            </div>

            <p className="text-gray-200 leading-relaxed max-w-md mx-auto lg:mx-0">
              I'm passionate about software development, mobile applications, 
              and creating meaningful digital experiences. Currently studying 
              Computer Science and Engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/projects" className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg">
                View Projects
              </Link>
              <a
                href="/resume/Kalki_Eshwar_D_Resume.pdf"
                download="Kalki_Eshwar_D_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <Link href="/contact" className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right side - Quick stats or info */}
          <div className="lg:justify-self-end">
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200">
                <div className="text-2xl font-medium text-white">VIT</div>
                <div className="text-sm text-gray-200 mt-1">University</div>
              </div>
              <div className="text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200">
                <div className="text-2xl font-medium text-white">CS</div>
                <div className="text-sm text-gray-200 mt-1">Major</div>
              </div>
              <div className="text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200">
                <div className="text-2xl font-medium text-white">3+</div>
                <div className="text-sm text-gray-200 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg hover:border-white/30 transition-colors duration-200">
                <div className="text-2xl font-medium text-white">2</div>
                <div className="text-sm text-gray-200 mt-1">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}