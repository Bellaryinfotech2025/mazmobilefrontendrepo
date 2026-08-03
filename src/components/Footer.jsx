
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleNavClick = () => {
    // Scroll to top when clicking navigation links
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white mt-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Azhar's Mobile Cafe</h3>
            <p className="text-gray-300 text-sm leading-relaxed hover:text-gray-200 transition-colors">
              Your one-stop solution for fast, reliable, and affordable device care. We bring expert service right to your doorstep.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/azharmobilecafe?igsh=MWlxb21oZWtwbzh0Zg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-xl transform hover:scale-110 duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-blue-300 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/services" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> Mobile Phones
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> Tablets
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> MacBooks
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> iPads
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> Smartwatches
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-blue-300 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleNavClick} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-blue-400">→</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-blue-300 uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 group">
               
                <div className="space-y-1">
                  <a href="tel:8885078632" className="text-gray-300 hover:text-blue-400 transition-colors block font-medium">8885078632</a>
                  <a href="tel:9966599969" className="text-gray-300 hover:text-blue-400 transition-colors block font-medium">9966599969</a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                
                <a href="mailto:support@azharsmobilecafe.com" className="text-gray-300 hover:text-blue-400 transition-colors">support@azharsmobilecafe.com</a>
              </div>
              <div className="flex items-start gap-3 group">
      
                <p className="text-gray-300">Shop No. 55, Chandralok Complex, Near Paradise Circle, Secunderabad – 500003, Telangana, India.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-10 mt-10">
          {/* Legal Links */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm font-medium flex-wrap">
              <Link 
                to="/privacypolicy" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg transform hover:scale-105"
              >
                🔒 Privacy Policy
              </Link>
              <span className="hidden sm:inline text-slate-600">|</span>
              <Link 
                to="/termsconditions" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg transform hover:scale-105"
              >
                📋 Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm font-semibold">© 2026 Azhar's Mobile Cafe. All rights reserved.</p>
            <p className="text-gray-500 text-xs">Crafted with ❤️ for your device care needs | Version 1.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
}