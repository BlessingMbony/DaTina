import React, { useState, useEffect, useRef } from 'react';

const Chatbot = ({ language = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const chatEndRef = useRef(null);

  // Translations
  const content = {
    en: {
      title: 'Ask DaTina AI',
      placeholder: 'Type your question here...',
      send: 'Send',
      welcome: 'Hello! How can I help you with DaTina Consulting services today?',
      redirect: 'Would you like to connect with our customer service team on WhatsApp for more personalized assistance?',
      connect: 'Connect on WhatsApp',
      close: 'Close'
    },
    fr: {
      title: 'Demandez à DaTina IA',
      placeholder: 'Tapez votre question ici...',
      send: 'Envoyer',
      welcome: 'Bonjour! Comment puis-je vous aider avec les services de DaTina Consulting aujourd\'hui?',
      redirect: 'Souhaitez-vous vous connecter avec notre équipe de service client sur WhatsApp pour une assistance plus personnalisée?',
      connect: 'Connecter sur WhatsApp',
      close: 'Fermer'
    }
  };
  
  const t = content[language];

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{ text: t.welcome, sender: 'ai' }]);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessages = [
      ...messages,
      { text: inputValue, sender: 'user' }
    ];
    setMessages(newMessages);
    setInputValue('');
    setMessageCount(prev => prev + 1);

    // Simulate AI response
    setTimeout(() => {
      let aiResponse;
      if (messageCount >= 4) {
        aiResponse = t.redirect;
      } else {
        const responses = [
          "Thank you for your question! DaTina Consulting specializes in data analytics, business intelligence, and AI integration services.",
          "Our team of experts can help you transform your data into actionable insights. Would you like to know more about a specific service?",
          "DaTina works with businesses of all sizes across multiple industries. We tailor our solutions to meet your specific needs.",
          "Our approach combines cutting-edge technology with industry expertise to deliver measurable results for your business."
        ];
        aiResponse = responses[messageCount] || responses[0];
      }
      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/33744843860`, '_blank');
    handleClose();
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Chatbot Button */}
      <div className="chatbot-button">
        <button
          onClick={handleOpen}
          className="chatbot-button__icon"
        >
          <i className="fas fa-robot"></i>
        </button>
      </div>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-modal__overlay" onClick={handleClose}></div>
          <div className="chatbot-modal__content">
            <div className="chatbot-header">
              <div className="chatbot-header__title">
                <div className="chatbot-header__icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="whitecolor">{t.title}</h3>
              </div>
              <button onClick={handleClose} className="chatbot-header__close">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chatbot-message ${message.sender === 'user' ? 'chatbot-message--user' : 'chatbot-message--ai'}`}
                >
                  <div className="chatbot-message__content">
                    {message.text}
                    {messageCount >= 5 && index === messages.length - 1 && message.sender === 'ai' && (
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="chatbot-whatsapp-button"
                      >
                        <i className="fab fa-whatsapp"></i>
                        {t.connect}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="chatbot-input__field"
              />
              <button
                onClick={handleSend}
                className="chatbot-input__button"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;