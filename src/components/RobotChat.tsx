
import React, { useState } from 'react';

const RobotChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Chat iframe container */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 z-40 w-80 h-96 bg-white rounded-lg shadow-2xl border animate-fade-in">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/EzGv1k263RlVeolWtnpHd"
            width="100%"
            height="100%"
            className="rounded-lg"
            frameBorder="0"
            title="AI Assistant"
          />
        </div>
      )}

      {/* Robot character */}
      <div 
        className={`fixed right-4 z-50 cursor-pointer transition-all duration-300 ease-out
          ${isChatOpen ? 'bottom-[29rem]' : 'bottom-4 hover:bottom-6 md:bottom-[-1rem] md:hover:bottom-1'}
        `}
        onClick={toggleChat}
      >
        <div className="relative">
          <img 
            src="/lovable-uploads/53bc5b49-6b02-484c-969d-d8c1445dd949.png" 
            alt="Robot Assistant" 
            className={`w-16 h-16 object-contain transition-all duration-200 ${
              isChatOpen 
                ? 'hover:opacity-40 hover:scale-105 hover:rotate-3' 
                : 'hover:scale-110'
            }`}
          />
          
          {/* Hover hint */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {isChatOpen ? 'Close chat' : 'Chat with me!'}
          </div>
        </div>
      </div>
    </>
  );
};

export default RobotChat;
