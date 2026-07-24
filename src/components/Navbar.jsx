import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Mobile Phones', path: '/services#mobile' },
    { name: 'Tablets', path: '/services#tablets' },
    { name: 'MacBooks', path: '/services#macbooks' },
    { name: 'iPads', path: '/services#ipads' },
    { name: 'Smartwatches', path: '/services#smartwatch' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex justify-between items-center">
          {/* Logo - Compressed */}
          <Link to="/" className="flex items-center gap-2 min-w-fit">
            <div className="w-9 sm:w-10 h-9 sm:h-10 bg-gradient-to-br from-azhar-brown to-azhar-red rounded-full flex items-center justify-center flex-shrink-0">
               <img src={logo} alt='logo' className="w-full h-full"/>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold gradient-text leading-tight">Azhar's</h1>
              <p className="text-[10px] sm:text-xs text-azhar-brown leading-tight">Mobile Cafe</p>
            </div>
          </Link>

          {/* Desktop Menu - Compressed */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className="text-xs xl:text-sm text-azhar-dark font-semibold hover:text-azhar-red smooth-transition whitespace-nowrap">
              Home
            </Link>
            <Link to="/about" className="text-xs xl:text-sm text-azhar-dark font-semibold hover:text-azhar-red smooth-transition whitespace-nowrap">
              About
            </Link>
            
            {/* Services Dropdown - Compressed */}
            <div className="relative group">
              <button className="text-xs xl:text-sm text-azhar-dark font-semibold hover:text-azhar-red smooth-transition flex items-center gap-1.5 whitespace-nowrap">
                Services
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-3 py-2 text-xs text-azhar-dark hover:bg-azhar-light hover:text-azhar-red first:rounded-t-lg last:rounded-b-lg smooth-transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="text-xs xl:text-sm text-azhar-dark font-semibold hover:text-azhar-red smooth-transition whitespace-nowrap">
              Contact
            </Link>
            <Link to="/createrequest" className="btn-primary text-xs px-5 sm:px-6 py-1.5 sm:py-2 font-semibold rounded-full">
              Create a Request
          </Link>
            <Link to="/createrequest" className="btn-primary text-xs px-5 sm:px-6 py-1.5 sm:py-2 font-semibold rounded-full">
              Track your Request
           </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-azhar-dark" /> : <Menu size={24} className="text-azhar-dark" />}
          </button>
        </div>

        {/* Mobile Menu - Compressed */}
        {isOpen && (
          <div className="lg:hidden mt-2 pb-3 border-t border-gray-100 pt-3">
            <Link to="/" className="block py-1.5 text-xs text-azhar-dark hover:text-azhar-red font-semibold smooth-transition">
              Home
            </Link>
            <Link to="/about" className="block py-1.5 text-xs text-azhar-dark hover:text-azhar-red font-semibold smooth-transition">
              About
            </Link>
            
            {/* Mobile Services Dropdown - Compressed */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="block py-1.5 text-xs text-azhar-dark hover:text-azhar-red font-semibold w-full text-left flex justify-between items-center smooth-transition"
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesOpen && (
              <div className="bg-azhar-light rounded-lg mt-1.5 ml-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-3 py-1.5 text-xs text-azhar-dark hover:text-azhar-red smooth-transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/contact" className="block py-1.5 text-xs text-azhar-dark hover:text-azhar-red font-semibold smooth-transition">
              Contact
            </Link>
            <Link to="/createrequest" className="btn-primary block text-center text-xs mt-2.5 py-1.5 font-semibold rounded-full">
              Create your Request
            </Link>
            <Link to="/createrequest" className="btn-primary block text-center text-xs mt-2.5 py-1.5 font-semibold rounded-full">
              Track your Request
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}