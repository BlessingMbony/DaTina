import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Contact = ({ language }) => {
  const translations = {
    en: {
      title: "Get in Touch",
      description: "Have questions or ready to start your project? Contact us today and let's discuss how we can help you achieve your business goals.",
      formLabels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message"
      },
      submit: "Send Message",
      contactTitle: "Contact Information",
      contactItems: [
        {
          title: "Location",
          value: "Paris, France",
          icon: "ri-map-pin-line"
        },
        {
          title: "Email",
          value: "datinaconsulting@gmail.com",
          icon: "ri-mail-line"
        }
      ],
      locationTitle: "Our Location"
    },
    fr: {
      title: "Contactez-nous",
      description: "Vous avez des questions ou êtes prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui et discutons de la manière dont nous pouvons vous aider à atteindre vos objectifs commerciaux.",
      formLabels: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message"
      },
      submit: "Envoyer le Message",
      contactTitle: "Informations de Contact",
      contactItems: [
        {
          title: "Localisation",
          value: "Paris, France",
          icon: "ri-map-pin-line"
        },
        {
          title: "Email",
          value: "datinaconsulting@gmail.com",
          icon: "ri-mail-line"
        }
      ],
      locationTitle: "Notre Localisation"
    }
  };

  const t = translations[language];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">{t.formLabels.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-button border border-gray-300 focus:border-primary" 
                    placeholder={t.formLabels.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">{t.formLabels.email}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-button border border-gray-300 focus:border-primary" 
                    placeholder={t.formLabels.email}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">{t.formLabels.subject}</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-button border border-gray-300 focus:border-primary" 
                  placeholder={t.formLabels.subject}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">{t.formLabels.message}</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-button border border-gray-300 focus:border-primary" 
                  placeholder={t.formLabels.message}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary text-[#0f172a] px-8 py-3 !rounded-button font-medium hover:bg-opacity-90 transition-all w-full whitespace-nowrap"
              >
                {t.submit}
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-semibold mb-6">{t.contactTitle}</h3>
              
              <div className="space-y-6">
                {t.contactItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${item.icon} ri-lg text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">{t.locationTitle}</h3>
              <div 
                className="rounded-lg overflow-hidden h-64 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );

  
};

export default Contact;