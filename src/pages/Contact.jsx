import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['8688349726', '8885078632', '9966599969'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@azharsmobilecafe.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 9 AM - 8 PM', 'Sat: 10 AM - 6 PM', '24/7 Emergency'],
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section - Compact */}
      <section className="relative overflow-hidden bg-gradient-to-b from-azhar-dark via-azhar-brown to-azhar-red text-white py-12 sm:py-14">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Get in Touch</h1>
          <p className="text-sm sm:text-base text-gray-200">We're here to help. Reach out anytime, anywhere.</p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-8 sm:py-10">
        <div className="bg-gradient-to-r from-azhar-red/10 to-orange-500/10 border-l-4 border-azhar-red rounded-xl p-5 sm:p-6 text-center">
          <p className="text-lg sm:text-xl font-bold text-azhar-dark italic mb-2">
            "Quality repairs, genuine parts, and service that you can trust."
          </p>
          <p className="text-xs sm:text-sm text-gray-600">— Azhar's Mobile Cafe</p>
        </div>
      </section>

      {/* Contact Info Cards - Compressed */}
       

      {/* Main Contact Section */}
      <section ref={formRef} className="container mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Form */}
          <div
            className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-azhar-dark mb-2">Send Message</h2>
              <p className="text-xs sm:text-sm text-gray-600">We'll respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-azhar-dark font-bold text-xs sm:text-sm mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-azhar-red focus:outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-azhar-dark font-bold text-xs sm:text-sm mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-azhar-red focus:outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-azhar-dark font-bold text-xs sm:text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-azhar-red focus:outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-azhar-dark font-bold text-xs sm:text-sm mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your device issue..."
                  rows="4"
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-azhar-red focus:outline-none transition-all resize-none text-sm"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-azhar-red to-orange-600 text-white font-bold py-2.5 sm:py-3 rounded-lg hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={18} />
                Send Message
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold text-xs sm:text-sm">
                  ✓ Message sent! We'll be in touch soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 sm:p-4 bg-red-100 text-red-800 rounded-lg text-center font-semibold text-xs sm:text-sm">
                  ✗ Please fill all required fields.
                </div>
              )}

              <p className="text-[10px] sm:text-xs text-gray-500 text-center">
                We respect your privacy. Your information is secure.
              </p>
            </form>
          </div>

          {/* Quick Contact & Map Preview */}
          <div
            className={`flex flex-col gap-5 sm:gap-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-azhar-brown to-azhar-red text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap size={24} />
                <h3 className="text-lg sm:text-2xl font-bold">Quick Contact</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-100 mb-5">Need immediate help? Reach out directly:</p>
              
              <div className="space-y-3">
                <a
                  href="https://wa.me/8688349726?text=Hi,%20I%20need%20help%20with%20mobile%20repair%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-azhar-red px-5 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition-all text-xs sm:text-sm"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href="tel:8688349726"
                  className="flex items-center justify-center gap-2 bg-white/20 border-2 border-white text-white px-5 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-white/30 transition-all text-xs sm:text-sm"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>

              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/30">
                <p className="text-xs sm:text-sm text-gray-200">
                  📍 Secunderabad | 🕒 24/7 Available
                </p>
              </div>
            </div>

            {/* Location Preview */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-56 sm:h-64 bg-gray-200 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-azhar-red/20 to-orange-500/20 group-hover:opacity-0 transition-opacity"></div>
              <MapPin size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-azhar-red opacity-50" />
              <p className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm font-bold text-azhar-dark bg-white/90 px-3 py-2 rounded-lg">
                📍 Shop 55, Chandralok Complex, Secunderabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Real Google Maps */}
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azhar-dark mb-2">Find Us Here</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-azhar-red to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-72 sm:h-96 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1903.1840176587195!2d78.48702863870537!3d17.442090314242776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShop%20No.%2055%2C%20Chandralok%20Complex%2C%20Near%20Paradise%20Circle%2C%20Secunderabad%20%E2%80%93%20500003%2C%20Telangana%2C%20India.!5e0!3m2!1sen!2sin!4v1784811242234!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Azhar's Mobile Cafe Location"
          ></iframe>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-gradient-to-r from-azhar-dark to-azhar-brown text-white py-8 sm:py-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg sm:text-2xl font-bold mb-2">Visit Our Store</h3>
          <p className="text-xs sm:text-sm text-gray-200 mb-4">
            Shop No. 55, Chandralok Complex, Near Paradise Circle, Secunderabad - 500003
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a
              href="https://maps.google.com/?q=Shop+No.+55,+Chandralok+Complex,+Secunderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-azhar-red hover:bg-orange-600 rounded-lg font-bold transition-all text-xs sm:text-sm"
            >
              📍 Get Directions
            </a>
            <a
              href="tel:8688349726"
              className="px-6 py-2.5 border-2 border-white text-white hover:bg-white hover:text-azhar-dark rounded-lg font-bold transition-all text-xs sm:text-sm"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;