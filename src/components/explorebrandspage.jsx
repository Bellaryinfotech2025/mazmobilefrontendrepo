import { useState, useEffect, useRef } from 'react';
import { Apple } from 'lucide-react';
import { 
  FaApple, 
  FaGoogle 
} from 'react-icons/fa';
import { 
  SiXiaomi, 
  SiSamsung, 
  SiVivo, 
  SiOneplus, 
  SiOppo, 
  SiMotorola, 
  SiHuawei, 
  SiAsus, 
  SiNokia 
} from 'react-icons/si';

const ExploreTopBrands = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brands = [
    { id: 1, name: 'Apple', logo: <FaApple size={42} />, color: '#000000' },
    { id: 2, name: 'Xiaomi', logo: <SiXiaomi size={42} />, color: '#FF6900' },
    { id: 3, name: 'Samsung', logo: <SiSamsung size={42} />, color: '#1428A0' },
    { id: 4, name: 'Vivo', logo: <SiVivo size={42} />, color: '#0066FF' },
    { id: 5, name: 'OnePlus', logo: <SiOneplus size={42} />, color: '#F50514' },
    { id: 6, name: 'Oppo', logo: <SiOppo size={42} />, color: '#009900' },
    { id: 7, name: 'Google', logo: <FaGoogle size={42} />, color: '#4285F4' },
    { id: 8, name: 'Realme', logo: <span className="text-4xl font-bold">R</span>, color: '#FFB800' },
    { id: 9, name: 'Motorola', logo: <SiMotorola size={42} />, color: '#E4000F' },
    { id: 10, name: 'iQOO', logo: <Apple size={42} />, color: '#FF6600' },
    { id: 11, name: 'Poco', logo: <SiXiaomi size={42} />, color: '#FFCC00' },
    { id: 12, name: 'Tecno', logo: <span className="text-4xl font-bold">T</span>, color: '#0066FF' },
    { id: 13, name: 'Nothing', logo: <span className="text-4xl">◉</span>, color: '#000000' },
    { id: 14, name: 'Nokia', logo: <SiNokia size={42} />, color: '#0080C0' },
    { id: 15, name: 'Honor', logo: <span className="text-4xl font-bold">H</span>, color: '#FF0066' },
    { id: 16, name: 'Asus', logo: <SiAsus size={42} />, color: '#000000' },
    { id: 17, name: 'Huawei', logo: <SiHuawei size={42} />, color: '#EE0033' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-azhar-dark mb-4">
            EXPLORE TOP BRANDS
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-azhar-red rounded-full"></div>
          </div>
        </div>

        {/* Brands Grid with Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
              onClick={() => setHoveredBrand(hoveredBrand === brand.id ? null : brand.id)}
              className={`
                group relative
                bg-white
                rounded-2xl
                p-6 md:p-8
                cursor-pointer
                transition-all duration-500 ease-out
                shadow-lg hover:shadow-2xl
                border-2 border-gray-100
                flex items-center justify-center
                min-h-32 md:min-h-40
                hover:scale-105
                transform
                ${hoveredBrand === brand.id 
                  ? 'border-azhar-dark shadow-2xl scale-105' 
                  : 'hover:border-azhar-dark'
                }
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{
                transitionDelay: `${index * 50}ms`, // Staggered animation
              }}
            >
              {/* Animated Background Gradient on Hover */}
              <div
                className={`
                  absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-10
                  transition-all duration-300
                  ${hoveredBrand === brand.id ? 'opacity-20' : 'opacity-0'}
                `}
                style={{
                  background: `linear-gradient(135deg, ${brand.color}20, ${brand.color}10)`,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center w-full">
                {/* Logo/Icon */}
                <div className={`
                  mb-3 md:mb-4 
                  transition-all duration-300 transform flex justify-center
                  ${hoveredBrand === brand.id ? 'scale-110' : 'group-hover:scale-105'}
                `}>
                  <div className="text-4xl md:text-5xl flex items-center justify-center">
                    {brand.logo}
                  </div>
                </div>

                {/* Brand Name */}
                <h3
                  className={`
                    font-bold text-xs md:text-sm
                    transition-all duration-300
                    ${hoveredBrand === brand.id
                      ? 'text-azhar-dark'
                      : 'text-gray-700 group-hover:text-azhar-dark'
                    }
                  `}
                >
                  {brand.name}
                </h3>

                {/* Hover Indicator Line */}
                <div
                  className={`
                    h-1 bg-azhar-red rounded-full
                    transition-all duration-300 transform origin-center
                    ${hoveredBrand === brand.id
                      ? 'w-6 mt-2'
                      : 'w-0 group-hover:w-4 mt-2'
                    }
                    mx-auto
                  `}
                ></div>
              </div>

              {/* Accent Color Border (Bottom) */}
              <div
                className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2
                  h-1 rounded-t-full
                  transition-all duration-300
                  ${hoveredBrand === brand.id ? 'w-full' : 'w-0'}
                `}
                style={{
                  backgroundColor: hoveredBrand === brand.id ? brand.color : 'transparent',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            We repair and service all major mobile phone brands
          </p>
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-azhar-red text-white font-bold rounded-lg hover:bg-azhar-dark transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreTopBrands;