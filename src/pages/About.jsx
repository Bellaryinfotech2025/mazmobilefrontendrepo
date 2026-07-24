import { Award, Target, Heart, Users, Zap, Shield, Clock, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import img from '../assets/image copy 3.png'

const About = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: 'Azhar Khan',
      role: 'Founder & Lead Technician',
      image: '👨‍💼',
      bio: '10+ years expertise in mobile repair'
    },
    {
      name: 'Mazahar Pathan',
      role: 'Technical Head',
      image: '👨‍🔧',
      bio: 'Complex device repair specialist'
    },
    {
      name: 'Support Team',
      role: 'Customer Service',
      image: '👥',
      bio: '24/7 customer assistance'
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers', icon: Heart },
    { number: '1000+', label: 'Devices Repaired', icon: Zap },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Customer Support', icon: Clock },
  ];

  const highlights = [
    { icon: Zap, title: 'Lightning Fast', desc: '30-60 min repairs' },
    { icon: Shield, title: 'Genuine Parts', desc: '100% original components' },
    { icon: TrendingUp, title: 'Affordable', desc: 'Transparent pricing' },
    { icon: Award, title: '90-Day Warranty', desc: 'Quality guaranteed' },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section - Compact */}
      <section className="relative overflow-hidden bg-gradient-to-b from-azhar-dark via-azhar-brown to-azhar-red text-white py-12 sm:py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 leading-tight">
            Azhar's Mobile Cafe
          </h1>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
            Your trusted partner for expert device care & repairs since 2020
          </p>
        </div>
      </section>

      {/* Story & Image Section - Single Image */}
      <section className="container mx-auto px-4 py-10 sm:py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 bg-azhar-red bg-opacity-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4">
                <span className="text-azhar-red font-bold text-xs sm:text-sm">OUR STORY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azhar-dark mb-4">
                Trusted Expert Repair Services
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
              Started with a simple mission to provide fast, affordable, and reliable mobile device repairs. With over 10 years of combined expertise, we've become the go-to service for device repairs across Secunderabad.
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              We believe everyone deserves quality repairs without breaking the bank. From screen replacements to complex hardware issues, our certified technicians handle every device with precision and care.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 bg-azhar-red rounded-full"></span>
                <span className="text-azhar-dark font-semibold">Only genuine parts used</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 bg-azhar-red rounded-full"></span>
                <span className="text-azhar-dark font-semibold">Expert technicians on hand</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 bg-azhar-red rounded-full"></span>
                <span className="text-azhar-dark font-semibold">Transparent pricing always</span>
              </div>
            </div>
          </div>

          {/* Single Image */}
          <div ref={sectionRef} className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img
              src={img}
              alt="Azhar's Mobile Cafe Workshop"
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <p className="text-white font-bold text-sm sm:text-base">Our expert workshop</p>
              <p className="text-gray-200 text-xs sm:text-sm">Where quality meets expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Compact */}
      <section className="bg-gradient-to-r from-azhar-dark to-azhar-brown text-white py-8 sm:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center group"
                  style={{
                    animation: animate ? `slideUp 0.6s ease-out ${idx * 100}ms forwards` : 'none',
                    opacity: animate ? 1 : 0,
                  }}
                >
                  <div className="flex justify-center mb-2">
                    <IconComponent size={24} className="text-orange-400 group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.number}</div>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section - Compressed Grid */}
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azhar-dark mb-2">Why Choose Us</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-azhar-red to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`group bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-azhar-red hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  animate ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: animate ? `${idx * 75}ms` : '0ms'
                }}
              >
                <div className="mb-3 flex justify-center">
                  <div className="p-2.5 sm:p-3 bg-azhar-red bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all">
                    <IconComponent size={20} className="text-azhar-red" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-azhar-dark mb-1 text-center">{item.title}</h3>
                <p className="text-xs text-gray-600 text-center">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section - Compact */}
       

      {/* CTA Section - Compact */}
       
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default About;