import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import { SEOProps } from '@/types';
import { getContactInfo } from '@/utils/data';
import { getSocialIcon } from '@/components/SocialIcons';

const contactSEO: SEOProps = {
  title: 'Contact - Kalki Eshwar D',
  description: 'Get in touch with Kalki Eshwar D for collaboration opportunities, project discussions, or professional inquiries.',
  canonical: 'https://kalkieshward.me/contact',
};

export default function Contact() {
  const contactData = getContactInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred form handling service
  };

  return (
    <Layout seo={contactSEO}>
      <div className="section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Get In <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and discussions about technology. 
              Feel free to reach out if you'd like to connect!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                {/* <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div> */}

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    {contactData.contactSubjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Let's Connect</h2>
              
              <div className="space-y-6">
                {/* Quick Contact */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700">{contactData.contactInfo.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{contactData.contactInfo.availability}</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Follow Me</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {contactData.socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors duration-200 group"
                      >
                        <span className="text-gray-600 group-hover:text-red-600 mr-3">
                          {getSocialIcon(social.icon)}
                        </span>
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className={`${contactData.contactInfo.currentlyAvailable ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'} rounded-lg p-6`}>
                  <div className="flex items-center mb-3">
                    <div className={`w-3 h-3 ${contactData.contactInfo.currentlyAvailable ? 'bg-green-500' : 'bg-yellow-500'} rounded-full mr-3`}></div>
                    <h3 className={`font-medium ${contactData.contactInfo.currentlyAvailable ? 'text-green-900' : 'text-yellow-900'}`}>
                      {contactData.contactInfo.currentlyAvailable ? 'Currently Available' : 'Limited Availability'}
                    </h3>
                  </div>
                  <p className={`${contactData.contactInfo.currentlyAvailable ? 'text-green-800' : 'text-yellow-800'} text-sm`}>
                    {contactData.contactInfo.availabilityMessage}
                  </p>
                </div>

                {/* Response Time */}
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Response Time:</span> {contactData.contactInfo.responseTime}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional CTAs */}
          <div className="mt-16 pt-16 border-t border-gray-100 text-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              Other Ways to <span className="text-red-600">Connect</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactData.connectionTypes.map((type, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200">
                  <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    {getSocialIcon(type.icon)}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}