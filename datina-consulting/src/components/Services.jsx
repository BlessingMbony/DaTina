import React from 'react';

const Services = ({ language }) => {
  const translations = {
    en: {
      title: "Our Services",
      description: "Comprehensive solutions tailored to your business needs. We combine expertise with innovation to deliver exceptional results.",
      services: [
        {
          title: "Data Analytics",
          description: "Transform raw data into actionable insights. Our data analytics services help you make informed decisions and drive business growth.",
          icon: "ri-bar-chart-box-line",
          features: ["Predictive analytics", "Data visualization", "Business intelligence"]
        },
        {
          title: "Web Development",
          description: "Custom websites tailored to your unique business needs. We create responsive, user-friendly, and visually appealing digital experiences.",
          icon: "ri-code-s-slash-line",
          features: ["Responsive design", "E-commerce solutions", "CMS implementation"]
        },
        {
          title: "Process Automation",
          description: "Streamline operations and boost efficiency. Our automation solutions eliminate repetitive tasks and optimize workflows.",
          icon: "ri-settings-line",
          features: ["Workflow optimization", "RPA implementation", "Process reengineering"]
        },
        {
          title: "Marketing",
          description: "Enhance brand visibility and engagement. Our marketing strategies help you reach your target audience and drive conversions.",
          icon: "ri-megaphone-line",
          features: ["Digital marketing", "Content strategy", "Social media management"]
        },
        {
          title: "Business Analytics",
          description: "Comprehensive analysis to inform strategic planning. We help you identify opportunities and mitigate risks.",
          icon: "ri-line-chart-line",
          features: ["Market research", "Competitive analysis", "Performance metrics"]
        },
        {
          title: "AI Integration",
          description: "Leverage the power of artificial intelligence to automate and optimize your processes.",
          icon: "ri-robot-line",
          features: ["Machine learning", "AI-powered automation", "Predictive modeling"],
          cta: "Learn More"
        }
      ],
      learnMore: "Learn more"
    },
    fr: {
      title: "Nos Services",
      description: "Des solutions complètes adaptées aux besoins de votre entreprise. Nous combinons expertise et innovation pour offrir des résultats exceptionnels.",
      services: [
        {
          title: "Analyse de Données",
          description: "Transformez les données brutes en informations exploitables. Nos services d'analyse de données vous aident à prendre des décisions éclairées et à stimuler la croissance de votre entreprise.",
          icon: "ri-bar-chart-box-line",
          features: ["Analyse prédictive", "Visualisation de données", "Business intelligence"]
        },
        {
          title: "Développement Web",
          description: "Des sites web personnalisés adaptés aux besoins uniques de votre entreprise. Nous créons des expériences numériques réactives, conviviales et visuellement attrayantes.",
          icon: "ri-code-s-slash-line",
          features: ["Design responsive", "Solutions e-commerce", "Implémentation CMS"]
        },
        {
          title: "Automatisation des Processus",
          description: "Rationalisez les opérations et améliorez l'efficacité. Nos solutions d'automatisation éliminent les tâches répétitives et optimisent les flux de travail.",
          icon: "ri-settings-line",
          features: ["Optimisation des flux", "Implémentation RPA", "Reconception des processus"]
        },
        {
          title: "Marketing",
          description: "Améliorez la visibilité et l'engagement de votre marque. Nos stratégies marketing vous aident à atteindre votre public cible et à augmenter les conversions.",
          icon: "ri-megaphone-line",
          features: ["Marketing digital", "Stratégie de contenu", "Gestion des réseaux sociaux"]
        },
        {
          title: "Analyse Commerciale",
          description: "Analyse complète pour éclairer la planification stratégique. Nous vous aidons à identifier les opportunités et à atténuer les risques.",
          icon: "ri-line-chart-line",
          features: ["Étude de marché", "Analyse concurrentielle", "Indicateurs de performance"]
        },
        {
          title: "Intégration IA",
          description: "Tirez parti de la puissance de l'intelligence artificielle pour automatiser et optimiser vos processus.",
          icon: "ri-robot-line",
          features: ["Apprentissage automatique", "Automatisation pilotée par IA", "Modélisation prédictive"],
          cta: "En savoir plus"
        }
      ],
      learnMore: "En savoir plus"
    }
  };

  const t = translations[language];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>
        
        <div className="relative">
          <div className="carousel flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 hide-scrollbar">
            {t.services.map((service, index) => (
              <div key={index} className="carousel-item flex-shrink-0 w-full md:w-1/3 lg:w-1/4 min-w-[280px]">
                <div className="service-card bg-white rounded-lg shadow-md p-6 h-full border border-gray-100">
                  <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                    <i className={`${service.icon} ri-xl text-primary`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <i className="ri-check-line text-primary mr-2 mt-1"></i>
                        <span className="graytext">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="text-primary font-medium flex items-center hover:underline">
                    {service.cta || t.learnMore}
                    <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {t.services.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;