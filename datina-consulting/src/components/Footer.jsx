import React from 'react';

const Footer = ({ language }) => {
  const translations = {
    en: {
      description: "Empowering businesses through data-driven insights and innovative solutions.",
      servicesTitle: "Services",
      services: [
        "Data Analytics",
        "Web Development",
        "Process Automation",
        "Marketing",
        "Business Analytics"
      ],
      companyTitle: "Company",
      companyLinks: [
        "About Us",
        "Careers",
        "Case Studies",
        "Blog",
        "Contact"
      ],
      newsletterTitle: "Newsletter",
      newsletterDescription: "Subscribe to our newsletter for the latest updates and insights.",
      placeholder: "Your email",
      button: "Subscribe",
      copyright: "© 2025 DaTina Consulting. All rights reserved.",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy"
      ]
    },
    fr: {
      description: "Autonomiser les entreprises grâce à des informations basées sur les données et des solutions innovantes.",
      servicesTitle: "Services",
      services: [
        "Analyse de Données",
        "Développement Web",
        "Automatisation des Processus",
        "Marketing",
        "Analyse Commerciale"
      ],
      companyTitle: "Entreprise",
      companyLinks: [
        "À Propos",
        "Carrières",
        "Études de Cas",
        "Blog",
        "Contact"
      ],
      newsletterTitle: "Newsletter",
      newsletterDescription: "Abonnez-vous à notre newsletter pour les dernières mises à jour et informations.",
      placeholder: "Votre email",
      button: "S'abonner",
      copyright: "© 2025 DaTina Consulting. Tous droits réservés.",
      links: [
        "Politique de Confidentialité",
        "Conditions d'Utilisation",
        "Politique de Cookies"
      ]
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-primary">Da</span><span className="text-white">T</span><span className="text-primary">i</span><span className="text-white">na</span>
                <span className="text-secondary text-3xl">•</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">{t.description}</p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary hover:bg-opacity-20 transition-colors">
                <i className="ri-linkedin-fill ri-lg text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary hover:bg-opacity-20 transition-colors">
                <i className="ri-twitter-fill ri-lg text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary hover:bg-opacity-20 transition-colors">
                <i className="ri-facebook-fill ri-lg text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary hover:bg-opacity-20 transition-colors">
                <i className="ri-instagram-fill ri-lg text-white"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.servicesTitle}</h3>
            <ul className="space-y-4">
              {t.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.companyTitle}</h3>
            <ul className="space-y-4">
              {t.companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.newsletterTitle}</h3>
            <p className="text-gray-400 mb-4">{t.newsletterDescription}</p>
            
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder={t.placeholder} 
                className="px-4 py-2 rounded-l-button border-none flex-grow bg-white bg-opacity-10 text-white placeholder-gray-400"
              />
              <button 
                type="submit" 
                className="bg-primary text-[#0f172a] px-4 py-2 rounded-r-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
              >
                {t.button}
              </button>
            </form>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-visa-fill ri-lg text-gray-400"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-mastercard-fill ri-lg text-gray-400"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-paypal-fill ri-lg text-gray-400"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-apple-fill ri-lg text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">{t.copyright}</p>
            
            <div className="flex space-x-6">
              {t.links.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;