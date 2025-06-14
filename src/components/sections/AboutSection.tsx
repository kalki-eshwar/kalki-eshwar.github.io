export default function AboutSection() {
  return (
    <section className="section border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Title */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-medium text-gray-900 text-center lg:text-left">
              About <span className="text-blue-600">Me</span>
            </h2>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-2 space-y-4 text-gray-600 leading-relaxed">
            <p>
              Hello there, I'm Kalki Eshwar D. I'm currently a student at 
              Vellore Institute of Technology, Vellore, studying Computer 
              Science and Engineering. My journey in technology began with 
              a curiosity about how digital systems work and has evolved 
              into a passion for creating meaningful software solutions.
            </p>
            <p>
              I have hands-on experience working as a Flutter Developer at 
              Monclarity Solutions Pvt. Ltd., where I developed finance applications 
              using Flutter, integrated APIs to connect various services, and 
              performed comprehensive debugging and testing to ensure quality 
              assurance. I also managed projects across different teams to 
              ensure efficient and timely completion of deliverables.
            </p>
            <p>
              Additionally, I worked as a Security Compliance Intern at 
              Valsco Technology Pvt Ltd, where I created security policies 
              in adherence to data governance and compliance standards. I 
              designed security protocols across systems to ensure 
              confidentiality, integrity, and availability of information 
              systems, and developed a tiered response system for security 
              incidents and events.
            </p>
            <p>
              I'm passionate about mobile app development, cybersecurity, 
              machine learning, and creating innovative solutions to real-world 
              problems. I enjoy working on projects that challenge me to learn 
              new technologies and solve complex problems. When I'm not coding, 
              I enjoy exploring new frameworks, contributing to open-source 
              projects, and staying updated with the latest trends in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}