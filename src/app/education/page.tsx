'use client'

import { BookOpen, ExternalLink, CheckCircle, GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import educationData from '@/content/education-data.json'

export default function Education() {
  const { education, certifications } = educationData

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Education & Certifications
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          My academic background and professional certifications
        </p>
      </div>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {edu.gpa && (
                  <div className="text-right">
                    <span className="text-sm text-gray-500 dark:text-gray-400">GPA</span>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{edu.gpa}</p>
                  </div>
                )}
              </div>
              
              {edu.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
              )}
              
              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Certifications</h2>
        </div>
        
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                      {cert.issuerIcon ? (
                        <Image
                          src={cert.issuerIcon}
                          alt={`${cert.issuer} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                      {cert.verified && (
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 ml-auto" />
                      )}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {cert.issuer}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {cert.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
              )}

              {cert.skills && cert.skills.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {cert.credentialId && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ID: {cert.credentialId}
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    cert.verified ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {cert.verified ? 'Verified' : 'Pending'}
                  </span>
                </div>
                
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}