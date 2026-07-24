import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppSupport from './components/WhatsAppSupport';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SelectionWrapper from './wrappercomponent/SelectionWrapper';

function App() {
  const [toasts, setToasts] = useState([]);

  const onShowToast = (message, type = 'info') => {
    const id = Date.now();
    const newToast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const getToastColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/createrequest" element={<SelectionWrapper onShowToast={onShowToast} />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppSupport />

        {/* Toast Notifications */}
        <div className="fixed top-5 right-5 z-[999] space-y-3 pointer-events-none">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`${getToastColor(toast.type)} text-white px-5 sm:px-6 py-3 sm:py-4 rounded-lg shadow-2xl backdrop-blur-sm flex items-center justify-between gap-4 animate-fadeIn max-w-sm pointer-events-auto`}
            >
              <p className="text-xs sm:text-sm font-semibold">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white hover:opacity-80 transition-opacity"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </Router>
  );
}

export default App;