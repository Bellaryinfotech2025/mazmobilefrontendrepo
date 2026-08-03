import React, { useState } from 'react';
import { MdFilePresent, MdWarning, MdElectricBolt, MdAttachMoney, MdShield, MdAccessTime, MdPerson, MdDangerous, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { FaFileContract, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function TermsConditions() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: MdFilePresent,
      content: "By accessing and using Azhar's Mobile Cafe services, website, and mobile applications, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services. We reserve the right to modify these terms at any time. Your continued use of our services constitutes acceptance of the modified terms. We will notify you of significant changes via email or website notification."
    },
    {
      id: 2,
      title: "Service Description",
      icon: MdElectricBolt,
      content: "Azhar's Mobile Cafe provides mobile device repair services including but not limited to: Screen repair and replacement, Battery replacement, Software troubleshooting, Hardware repairs, Water damage restoration, Charging port repair, Speaker/microphone repair, and other device maintenance services. We service smartphones, tablets, MacBooks, iPads, smartwatches, and related devices. Services are provided at our shop and through doorstep service within Secunderabad area."
    },
    {
      id: 3,
      title: "Service Request & Booking",
      icon: MdAccessTime,
      content: "Service requests can be made through our website, mobile app, or phone. You must provide accurate device information and issue description. Booking confirmation is subject to technician availability. We aim to provide service within 24-48 hours of confirmed booking. Emergency services may incur additional charges. Cancellation must be made at least 12 hours before scheduled service. Cancellations made within 12 hours may be charged a cancellation fee."
    },
    {
      id: 4,
      title: "Pricing & Payment",
      icon: MdAttachMoney,
      content: "Prices are quoted based on diagnosis and device condition. Quotes are valid for 7 days. Final pricing may change if additional issues are discovered during service. We accept cash, credit/debit cards, digital wallets, and online transfers. Payment is required before service completion. A 50% advance payment is required to confirm booking. Refunds are not provided for completed services except in cases of service failure."
    },
    {
      id: 5,
      title: "Warranty & Liability",
      icon: MdShield,
      content: "We provide 30-day warranty on parts replaced and labor. Warranty covers defects in workmanship and parts failure only. Warranty excludes physical damage, water damage, drops, or normal wear. We use genuine and quality aftermarket parts depending on customer preference. Devices must be used normally during warranty period. We are not liable for data loss, software issues not caused by our service, or third-party app problems."
    },
    {
      id: 6,
      title: "Device Responsibility",
      icon: MdWarning,
      content: "Devices left at our facility are the sole responsibility of the customer. We are not liable for theft, loss, or damage while device is in our possession, except through our direct negligence. Devices must be free from infectious materials and hazardous substances. Customer must not store sensitive/confidential data on devices during service. Unclaimed devices may be charged storage fees after 30 days. We reserve the right to dispose of unclaimed devices after 90 days with notice."
    },
    {
      id: 7,
      title: "User Conduct",
      icon: MdPerson,
      content: "You agree not to: Provide false or misleading information, Use our services for illegal purposes, Harass or abuse our staff, Share your account credentials with others, Attempt to access unauthorized systems, Submit malware or viruses, Make false warranty claims, Engage in fraudulent activities. Violation of these terms may result in service termination and legal action."
    },
    {
      id: 8,
      title: "Intellectual Property",
      icon: MdFilePresent,
      content: "All content on our website and app, including logos, designs, text, and images, are owned by Azhar's Mobile Cafe. You may not reproduce, distribute, or use this content without permission. The Azhar's Mobile Cafe brand, trademarks, and service marks are our exclusive property. Unauthorized use is prohibited. You grant us the right to use photos/reviews you provide for promotional purposes."
    },
    {
      id: 9,
      title: "Limitation of Liability",
      icon: MdDangerous,
      content: "To the maximum extent permitted by law, Azhar's Mobile Cafe is not liable for: Indirect, incidental, or consequential damages, Loss of profits or revenue, Loss of data or business opportunities, Technical issues beyond our control, Third-party services or recommendations, Delays due to external factors. Our total liability shall not exceed the amount paid for the specific service."
    },
    {
      id: 10,
      title: "Dispute Resolution",
      icon: MdShield,
      content: "Any disputes arising from these terms shall be resolved through mutual discussion and negotiation. If unresolved, disputes will be subject to arbitration or legal proceedings in Secunderabad, Telangana. These terms and conditions are governed by Indian law. Both parties agree to settle disputes amicably before pursuing legal action."
    },
    {
      id: 11,
      title: "Service Availability",
      icon: MdElectricBolt,
      content: "Services are provided based on availability. We may suspend services due to technical issues, weather conditions, or security concerns. We are not liable for service interruptions beyond our control. Doorstep service availability depends on location and traffic conditions. Holiday schedules may affect service hours. Check our website for updated service hours and holiday closures."
    },
    {
      id: 12,
      title: "Amendments",
      icon: MdFilePresent,
      content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use constitutes acceptance. For major changes, we will provide 30 days notice via email. If you do not accept the new terms, you must stop using our services."
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-900 via-orange-800 to-red-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-40 -mt-40"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <FaFileContract className="w-8 h-8 text-orange-300 animate-pulse" />
            <span className="text-sm font-bold text-orange-300 tracking-wider">LEGAL AGREEMENT</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-100">Terms & Conditions</h1>
          <p className="text-xl text-orange-100 font-medium">Effective Date: January 1, 2026 | Last Updated: August 2026</p>
          <p className="text-orange-50 mt-6 max-w-2xl text-lg leading-relaxed">Please read these Terms and Conditions carefully. By using Azhar's Mobile Cafe services, you acknowledge and accept all terms outlined below.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Legal Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-600 rounded-xl p-6 mb-10 flex gap-4 shadow-md hover:shadow-lg transition-shadow">
          <MdDangerous className="w-7 h-7 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2 text-lg">Important Legal Information</h3>
            <p className="text-amber-800 text-lg leading-relaxed">
              These Terms and Conditions are legally binding. Please ensure you understand all terms before using our services. If you have any questions, contact us before proceeding.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-10 mb-10 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-100 rounded-xl">
              <FaFileContract className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Introduction</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg">
            These Terms and Conditions ("Terms") govern your use of Azhar's Mobile Cafe services, website, mobile application, and all related services. Azhar's Mobile Cafe is a mobile device repair service provider located in Secunderabad, Telangana, India. By booking our services or using our platforms, you accept these Terms in their entirety.
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
                className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-orange-400 hover:shadow-lg transition-all duration-300 group"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-orange-50 to-transparent transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <div className={`p-3 rounded-lg transition-all duration-300 ${isExpanded ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600'}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{section.title}</h3>
                  </div>
                  <div className="ml-4">
                    {isExpanded ? (
                      <MdExpandLess className="w-6 h-6 text-orange-600" />
                    ) : (
                      <MdExpandMore className="w-6 h-6 text-slate-600 group-hover:text-orange-600 transition-colors" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-8 py-6 border-t-2 border-slate-200 bg-gradient-to-br from-orange-50 to-slate-50 animate-fadeIn">
                    <p className="text-slate-700 leading-relaxed text-lg">{section.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 rounded-2xl shadow-2xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Need Clarification?</h2>
            <p className="text-orange-50 mb-8 text-lg">
              If you have questions about these Terms and Conditions, please reach out to our team:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-500 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-70 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <FaEnvelope className="w-5 h-5" />
                  <span className="font-bold text-sm">Email Support</span>
                </div>
                <a href="mailto:support@azharsmobilecafe.com" className="text-orange-100 hover:text-white font-medium transition-colors text-lg">
                  support@azharsmobilecafe.com
                </a>
              </div>
              <div className="bg-orange-500 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-70 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <FaPhone className="w-5 h-5" />
                  <span className="font-bold text-sm">Call Us</span>
                </div>
                <div className="space-y-2">
                  <a href="tel:8885078632" className="text-orange-100 hover:text-white font-medium transition-colors block text-lg">
                    +91 8885078632
                  </a>
                  <a href="tel:9966599969" className="text-orange-100 hover:text-white font-medium transition-colors block text-lg">
                    +91 9966599969
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Acceptance Statement */}
        <div className="mt-12 bg-white rounded-2xl border-4 border-orange-400 shadow-xl p-8 hover:shadow-2xl transition-shadow">
          <div className="flex gap-4 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">✓</div>
            <h3 className="text-2xl font-black text-slate-900">Your Acknowledgment</h3>
          </div>
          <p className="text-slate-700 text-lg leading-relaxed">
            By using Azhar's Mobile Cafe services, you explicitly acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. You also acknowledge that you have read our Privacy Policy and agree to the handling of your personal information as outlined therein. If you do not agree to these terms, please do not use our services.
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-slate-900 text-slate-400 py-10 px-4 mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-semibold">© 2026 Azhar's Mobile Cafe. All rights reserved.</p>
          <p className="text-sm mt-2">Terms & Conditions v1.0 | Last Updated: August 2026</p>
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