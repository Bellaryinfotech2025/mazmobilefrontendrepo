import { useState, useEffect, useRef } from 'react';
import { FiSmartphone, FiTablet, FiCpu, FiWatch, FiZap, FiBattery, FiCamera, FiTool, FiDroplet, FiVolume2 } from 'react-icons/fi';
import { MdPhoneAndroid, MdLaptopMac } from 'react-icons/md';
import ExploreTopBrands from '../components/explorebrandspage';
import img1 from '../assets/image copy.png'
import img2 from '../assets/image copy 2.png'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef({});

  const services = [
    {
      id: 'mobile',
      name: 'Mobile Phones',
      image: img1,
      icon: MdPhoneAndroid,
      color: 'from-blue-500 to-blue-600',
      repairs: [
        { icon: FiZap, name: 'Screen Replacement' },
        { icon: FiBattery, name: 'Battery Replacement' },
        { icon: FiCamera, name: 'Camera Repair' },
        { icon: FiTool, name: 'Charging Port' },
        { icon: FiDroplet, name: 'Water Damage' },
        { icon: FiVolume2, name: 'Speaker/Mic' },
      ]
    },
    {
      id: 'tablets',
      name: 'Tablets',
      image: img2,
      icon: FiTablet,
      color: 'from-purple-500 to-purple-600',
      repairs: [
        { icon: FiZap, name: 'Screen Replacement' },
        { icon: FiBattery, name: 'Battery Replacement' },
        { icon: FiTool, name: 'Charging Issues' },
        { icon: FiCamera, name: 'Camera Repair' },
        { icon: FiDroplet, name: 'Water Damage' },
        { icon: FiVolume2, name: 'Speaker Issues' },
      ]
    },
     
    {
      id: 'ipads',
      name: 'iPads',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&h=800&fit=crop',
      icon: FiTablet,
      color: 'from-cyan-500 to-blue-500',
      repairs: [
        { icon: FiZap, name: 'Screen Replacement' },
        { icon: FiBattery, name: 'Battery Replacement' },
        { icon: FiCamera, name: 'Camera Repair' },
        { icon: FiCpu, name: 'Logic Board' },
        { icon: FiDroplet, name: 'Water Damage' },
        { icon: FiVolume2, name: 'Speaker/Audio' },
      ]
    },
    {
      id: 'smartwatch',
      name: 'Smartwatches',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&h=800&fit=crop',
      icon: FiWatch,
      color: 'from-orange-500 to-red-500',
      repairs: [
        { icon: FiZap, name: 'Screen Replacement' },
        { icon: FiBattery, name: 'Battery Replacement' },
        { icon: FiTool, name: 'Band Replacement' },
        { icon: FiCamera, name: 'Sensor Issues' },
        { icon: FiDroplet, name: 'Water Damage' },
        { icon: FiVolume2, name: 'Speaker Issues' },
      ]
    },
  ];

  useEffect(() => {
    const observers = {};

    services.forEach((service) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => ({ ...prev, [service.id]: true }));
          }
        },
        { threshold: 0.15 }
      );

      if (cardRefs.current[service.id]) {
        observer.observe(cardRefs.current[service.id]);
      }

      observers[service.id] = observer;
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-azhar-dark to-azhar-brown text-white py-8 sm:py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1.5">Our Services</h1>
          <p className="text-xs sm:text-sm text-gray-200">Professional repairs for all your devices</p>
        </div>
      </section>

      <ExploreTopBrands/>

      {/* Services Grid */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards[service.id];

            return (
              <div
                key={service.id}
                ref={(el) => (cardRefs.current[service.id] = el)}
                className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isVisible ? `${idx * 100}ms` : '0ms'
                }}
              >
                {/* Image Section - Slightly Increased Height */}
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                    <div className={`bg-gradient-to-br ${service.color} p-2 sm:p-3 rounded-lg flex-shrink-0`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{service.name}</h2>
                  </div>
                </div>

                {/* Repairs Grid - Compressed */}
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-azhar-dark mb-3 flex items-center gap-2">
                    <FiZap size={18} className="text-azhar-red" />
                    Available Repairs
                  </h3>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {service.repairs.map((repair, repairIdx) => {
                      const RepairIcon = repair.icon;
                      return (
                        <div
                          key={repairIdx}
                          className={`group relative p-2.5 sm:p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-5 border border-gray-200 hover:border-azhar-red hover:bg-opacity-10 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
                          style={{
                            transitionDelay: isVisible ? `${repairIdx * 30}ms` : '0ms'
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 sm:p-2 rounded-md bg-gradient-to-br ${service.color} text-white flex-shrink-0`}>
                              <RepairIcon size={16} sm:size={18} />
                            </div>
                            <p className="text-[11px] sm:text-xs font-semibold text-azhar-dark line-clamp-2">
                              {repair.name}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Buttons - Compressed */}
                  
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section - Compressed */}
       

      <style>{`
        @media(max-width: 640px) {
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
};

export default Services;