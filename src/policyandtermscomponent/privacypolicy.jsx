import React, { useState } from 'react';
import { MdSecurity, MdLock, MdVisibility, MdCheckCircle, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: MdVisibility,
      content: "We collect various types of information in connection with the services we provide, including: Personal identification information (name, email, phone number, address), Device information (make, model, serial number, IMEI), Service request details (issue description, service type), Payment information (processed securely through trusted payment gateways), Location data (to provide doorstep service), and Communication records (emails, chat, phone calls)."
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: MdLock,
      content: "Your information is used to: Provide and improve our mobile repair services, Process service requests and payments, Send service updates and notifications, Contact you regarding your device service, Maintain service records and warranty information, Comply with legal obligations, Prevent fraudulent activities, Improve customer experience through analytics, Send promotional offers (only with your consent), Resolve disputes and handle complaints."
    },
    {
      id: 3,
      title: "Data Security",
      icon: FaShieldAlt,
      content: "We implement industry-standard security measures to protect your personal information. All data is encrypted during transmission using SSL/TLS protocols. We maintain secure databases with access restrictions. Payment information is never stored on our servers. We conduct regular security audits. However, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and notify us of any suspicious activity."
    },
    {
      id: 4,
      title: "Third-Party Sharing",
      icon: MdCheckCircle,
      content: "We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our operations (logistics partners, payment processors) under strict confidentiality agreements. We may disclose information if required by law or to protect our rights and safety. Third-party service providers are bound by confidentiality agreements."
    },
    {
      id: 5,
      title: "Cookies & Tracking",
      icon: MdVisibility,
      content: "Our website uses cookies to enhance user experience and analyze site traffic. Cookies help us remember your preferences and improve functionality. You can control cookie settings in your browser. We use Google Analytics to track user behavior and improve our services. Some features may not work properly if cookies are disabled. We respect Do-Not-Track signals from your browser."
    },
    {
      id: 6,
      title: "Your Rights",
      icon: MdCheckCircle,
      content: "You have the right to access your personal information. You can request correction of inaccurate data. You can request deletion of your information (subject to legal obligations). You can opt-out of promotional communications. You have the right to data portability. You can withdraw consent for data processing. To exercise these rights, contact us at support@azharsmobilecafe.com with 'Data Rights Request' in the subject line."
    },
    {
      id: 7,
      title: "Children's Privacy",
      icon: MdSecurity,
      content: "Our services are not intended for individuals under 18 years old. We do not knowingly collect information from children. If we discover we have collected information from a child, we will delete it immediately. Parents or guardians who believe their child has provided information to us should contact us immediately."
    },
    {
      id: 8,
      title: "Policy Updates",
      icon: MdCheckCircle,
      content: "We may update this privacy policy periodically to reflect changes in our practices. Updates will be posted on this page with a revised date. Significant changes will be communicated via email or prominent notification on our website. Your continued use of our services after updates constitutes acceptance of the revised policy. Review this page regularly to stay informed."
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-40 -mt-40"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <FaShieldAlt className="w-8 h-8 text-blue-400 animate-pulse" />
            <span className="text-sm font-bold text-blue-400 tracking-wider">YOUR PRIVACY MATTERS</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Privacy Policy</h1>
          <p className="text-xl text-slate-300 font-medium">Effective Date: January 1, 2026 | Last Updated: August 2026</p>
          <p className="text-slate-300 mt-6 max-w-2xl text-lg leading-relaxed">At Azhar's Mobile Cafe, we're committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-10 mb-10 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-xl">
              <MdSecurity className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Introduction</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg">
            Azhar's Mobile Cafe ("we," "our," or "us") operates a mobile device repair service. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you use our website, mobile app, and services. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-5">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSection === section.id;
            
            return (
              <div
                key={section.id}
                className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 to-transparent transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <div className={`p-3 rounded-lg transition-all duration-300 ${isExpanded ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{section.title}</h3>
                  </div>
                  <div className="ml-4">
                    {isExpanded ? (
                      <MdExpandLess className="w-6 h-6 text-blue-600" />
                    ) : (
                      <MdExpandMore className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-8 py-6 border-t-2 border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 animate-fadeIn">
                    <p className="text-slate-700 leading-relaxed text-lg">{section.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-2xl shadow-2xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Questions About Our Privacy Policy?</h2>
            <p className="text-blue-50 mb-8 text-lg">
              If you have any questions or concerns about our privacy practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <FaEnvelope className="w-5 h-5" />
                  <span className="font-bold text-sm">Email</span>
                </div>
                <a href="mailto:support@azharsmobilecafe.com" className="text-blue-100 hover:text-white font-medium transition-colors">
                  support@azharsmobilecafe.com
                </a>
              </div>
              <div className="bg-blue-500 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <FaPhone className="w-5 h-5" />
                  <span className="font-bold text-sm">Phone</span>
                </div>
                <a href="tel:8885078632" className="text-blue-100 hover:text-white font-medium transition-colors block">
                  +91 8885078632
                </a>
              </div>
              <div className="md:col-span-2 bg-blue-500 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span className="font-bold text-sm">Address</span>
                </div>
                <p className="text-blue-100">Shop No. 55, Chandralok Complex, Secunderabad – 500003, Telangana, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-slate-900 text-slate-400 py-10 px-4 mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-semibold">© 2026 Azhar's Mobile Cafe. All rights reserved.</p>
          <p className="text-sm mt-2">Privacy Policy v1.0 | Last Updated: August 2026</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}