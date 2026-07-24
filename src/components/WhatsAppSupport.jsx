import { MessageCircle, Phone, X, Send, MapPin, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppSupport() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "👋 Hi! Welcome to Azhar's Mobile Cafe. How can we help you today?",
      timestamp: new Date(),
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [showQuestions, setShowQuestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const phoneNumber = '9966599969';
  const whatsappNumber = '9966599969';

  const quickQuestions = [
    { text: '📍 Where is your location?', key: 'location' },
    { text: '⏰ What are your working hours?', key: 'hours' },
  ];

  const botResponses = {
    location: {
      text: "📍 We're located at:\n\nShop No. 55, Chandralok Complex\nNear Paradise Circle\nSecunderabad - 500003\nTelangana, India\n\nWould you like directions or anything else?",
      followUp: true,
    },
    hours: {
      text: "⏰ Our Working Hours:\n\n📅 Monday - Friday: 9 AM - 8 PM\n📅 Saturday: 10 AM - 6 PM\n📅 Sunday: 10 AM - 4 PM\n🌙 Emergency Service: 24/7 Available\n\nNeed anything else?",
      followUp: true,
    },
    repair: {
      text: "🔧 We repair all device types:\n✓ Mobile Phones\n✓ Tablets & iPads\n✓ MacBooks & Laptops\n✓ Smartwatches\n\nMost repairs done in 30-60 minutes! Would you like to book a repair?",
      followUp: true,
    },
    contact: {
      text: "📞 Contact Us:\n\n☎️ Call: 9966599969\n☎️ Alternate: 8885078632\n📧 Email: support@azharsmobilecafe.com\n💬 WhatsApp: 9966599969\n\nHow can we assist?",
      followUp: true,
    }
  };

  const handleQuestionClick = (key) => {
    const userMsg = quickQuestions.find(q => q.key === key)?.text;
    
    // Add user message
    setMessages(prev => [
      ...prev,
      { type: 'user', text: userMsg, timestamp: new Date() }
    ]);

    setShowQuestions(false);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          type: 'bot',
          text: botResponses[key].text,
          timestamp: new Date(),
        }
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setMessages(prev => [
      ...prev,
      { type: 'user', text: userInput, timestamp: new Date() }
    ]);

    setUserInput('');
    setShowQuestions(false);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const response = botResponses[userInput.toLowerCase().includes('location') ? 'location' 
        : userInput.toLowerCase().includes('hour') ? 'hours'
        : userInput.toLowerCase().includes('repair') ? 'repair'
        : userInput.toLowerCase().includes('contact') ? 'contact'
        : 'repair'];

      setMessages(prev => [
        ...prev,
        {
          type: 'bot',
          text: response?.text || "Thanks for your message! For more details, please call us at 9966599969 or WhatsApp us. Our team will be happy to help! 😊",
          timestamp: new Date(),
        }
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hi, I need help with mobile repair services.`,
      '_blank'
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 font-sans">
      {showChat && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-w-sm h-96 sm:max-w-md animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-azhar-brown to-azhar-red text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base">Azhar Support</h3>
                <p className="text-xs text-gray-200">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="hover:bg-white/20 p-1 rounded-lg transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm ${
                    msg.type === 'user'
                      ? 'bg-azhar-red text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words leading-relaxed">{msg.text}</p>
                  <span className={`text-[10px] mt-1 block ${msg.type === 'user' ? 'text-gray-200' : 'text-gray-500'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-2.5 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {showQuestions && !isTyping && (
            <div className="border-t border-gray-200 p-3 bg-white space-y-2">
              {quickQuestions.map((q) => (
                <button
                  key={q.key}
                  onClick={() => handleQuestionClick(q.key)}
                  className="w-full text-left text-xs sm:text-sm px-3 py-2 rounded-lg bg-azhar-red/10 text-azhar-red hover:bg-azhar-red hover:text-white transition-all font-semibold border border-azhar-red/20"
                >
                  {q.text}
                </button>
              ))}
            </div>
          )}

          {/* Input & Actions */}
          <div className="border-t border-gray-200 p-3 bg-white space-y-2">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type message..."
                className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-azhar-red focus:outline-none text-sm transition-all"
              />
              <button
                type="submit"
                className="bg-azhar-red text-white p-2 rounded-lg hover:bg-azhar-dark transition-all"
              >
                <Send size={18} />
              </button>
            </form>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20BA58] text-white py-2 px-3 rounded-lg font-bold transition-all text-xs sm:text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp
              </button>
              <button
                onClick={handleCall}
                className="flex-1 flex items-center justify-center gap-1.5 bg-azhar-red hover:bg-azhar-dark text-white py-2 px-3 rounded-lg font-bold transition-all text-xs sm:text-sm"
              >
                <Phone size={16} />
                Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-gradient-to-br from-azhar-brown to-azhar-red text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center relative group"
          title="Contact Support"
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
          {showChat ? (
            <X size={28} className="relative z-10" />
          ) : (
            <>
              <MessageCircle size={28} className="relative z-10" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></span>
            </>
          )}
        </button>

        {/* Tooltip */}
        {!showChat && (
          <div className="absolute bottom-20 right-0 bg-azhar-dark text-white px-3 py-2 rounded-lg shadow-lg text-xs sm:text-sm font-bold whitespace-nowrap animate-bounce pointer-events-none">
            💬 Chat with us!
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}