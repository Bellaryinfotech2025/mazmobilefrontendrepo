import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-azhar-dark to-[#1a1a1a] text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Azhar's Mobile Cafe</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your one-stop solution for fast, reliable, and affordable device care. We bring expert service right to your doorstep.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-azhar-red smooth-transition">Mobile Phones</Link></li>
              <li><Link to="/services" className="hover:text-azhar-red smooth-transition">Tablets</Link></li>
              <li><Link to="/services" className="hover:text-azhar-red smooth-transition">MacBooks</Link></li>
              <li><Link to="/services" className="hover:text-azhar-red smooth-transition">iPads</Link></li>
              <li><Link to="/services" className="hover:text-azhar-red smooth-transition">Smartwatches</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-azhar-red smooth-transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-azhar-red smooth-transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-azhar-red smooth-transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-azhar-red smooth-transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-azhar-red mt-1" />
                <div>
                  
                  <p className="hover:text-azhar-red smooth-transition cursor-pointer">8885078632</p>
                  <p className="hover:text-azhar-red smooth-transition cursor-pointer">9966599969</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-azhar-red mt-1" />
                <p className="text-gray-300">support@azharsmobilecafe.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-azhar-red mt-1" />
                <p className="text-gray-300">Shop No. 55, Chandralok Complex,
Near Paradise Circle,
Secunderabad – 500003, Telangana, India.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
             
            <a href="https://www.instagram.com/azharmobilecafe?igsh=MWlxb21oZWtwbzh0Zg==" className="text-gray-300 hover:text-azhar-red smooth-transition">
              <Instagram size={24} />
            </a>
             
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2026 Azhar's Mobile Cafe. All rights reserved.</p>
            <p className="text-xs mt-2">Privacy Policy | Terms & Conditions | Warranty Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
