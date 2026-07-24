import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Watch 
} from 'lucide-react';
import ExploreTopBrands from '../components/explorebrandspage';
import MagicalProcess from '../components/trackingpage'
import img1 from '../assets/image copy 6.png'
import img2 from '../assets/image copy 5.png'
import img3 from '../assets/image copy 4.png'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    img1,
    img2,
    img3,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const features = [
    { icon: Zap, title: 'Quick Service', description: 'Most repairs completed within 30-60 minutes' },
    { icon: Shield, title: 'Genuine Parts', description: 'Only original & high-quality components' },
    { icon: Clock, title: '12×7 Support', description: 'Round-the-clock customer assistance' },
    { icon: Users, title: 'Expert Technicians', description: 'Certified professionals with 5+ years experience' },
  ];

  const services = [
    { icon: Smartphone, name: 'Mobile Phones', color: 'from-blue-500 to-blue-600' },
    { icon: Tablet, name: 'Tablets', color: 'from-purple-500 to-purple-600' },
    { icon: Laptop, name: 'MacBooks & Laptops', color: 'from-gray-600 to-slate-700' },
    { icon: Watch, name: 'Smartwatches', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <main className="bg-azhar-light">
      {/* ==================== HERO CAROUSEL - COMPRESSED & MOBILE FIRST ==================== */}
      <section className="relative h-[32vh] sm:h-[36vh] md:h-[42vh] lg:h-[100vh] overflow-hidden">
        <div className="relative h-full">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dark Gradient Overlay - Adjusted for compressed height */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
            </div>
          ))}

          {/* Navigation Buttons - Adjusted sizing */}
           

          {/* Indicators - Smaller dots for compressed design */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-azhar-red w-8 sm:w-10' 
                    : 'bg-white/70 hover:bg-white w-2 sm:w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <ExploreTopBrands />

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-10 sm:py-12 md:py-14">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-azhar-dark mb-2">Why Choose Us</h2>
          <p className="text-xs sm:text-sm text-center text-gray-600">Expert service with proven results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon - Compressed */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-br from-azhar-red to-azhar-dark p-3 sm:p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <IconComponent size={28} sm:size={32} className="text-white" />
                  </div>
                </div>

                {/* Text - Compressed */}
                <h3 className="text-base sm:text-lg font-bold text-azhar-dark mb-1.5 line-clamp-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-snug">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <MagicalProcess/>
       

      {/* Video Section */}
       

      {/* CTA */}
      <section className="bg-gradient-to-r from-azhar-dark to-azhar-brown py-16 sm:py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Fix Your Device?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-gray-200">Get professional service at affordable prices</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="bg-azhar-red hover:bg-white hover:text-azhar-red font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all text-sm sm:text-lg">
              Book Service Now
            </Link>
            <a href="tel:8688349726" className="border-2 border-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white hover:text-azhar-red transition-all text-sm sm:text-lg">
              Call: 8688349726
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;