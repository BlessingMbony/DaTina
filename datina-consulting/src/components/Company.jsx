import React, { useEffect } from 'react';

const Company = ({ language }) => {
  const translations = {
    en: {
      title: "Why Choose DaTina",
      description: "We simplify complexity and deliver exceptional results. Our approach is data-driven, client-focused, and results-oriented.",
      sectionTitle: "Simplify Your Business Processes",
      quote: "\"You remember when Steve Jobs turned so many buttons to one on a phone? Do the same to your business.\"",
      features: [
        {
          title: "Expertise & Experience",
          description: "Our team brings years of industry experience and specialized knowledge to every project.",
          icon: "ri-award-line"
        },
        {
          title: "Client-Centric Approach",
          description: "We prioritize your needs and goals, ensuring solutions that align with your business objectives.",
          icon: "ri-customer-service-2-line"
        },
        {
          title: "Data-Driven Results",
          description: "Our strategies are backed by comprehensive data analysis and proven methodologies.",
          icon: "ri-line-chart-line"
        }
      ],
      stats: [
        { value: "98%", label: "Client Satisfaction Rate" },
        { value: "10+", label: "Projects Completed" },
        { value: "35%", label: "Average Efficiency Increase" },
        { value: "5+", label: "Years of Experience" }
      ]
    },
    fr: {
      title: "Pourquoi Choisir DaTina",
      description: "Nous simplifions la complexité et offrons des résultats exceptionnels. Notre approche est axée sur les données, centrée sur le client et orientée vers les résultats.",
      sectionTitle: "Simplifiez Vos Processus Métier",
      quote: "\"Vous vous souvenez quand Steve Jobs a réduit tant de boutons à un seul sur un téléphone ? Faites de même pour votre entreprise.\"",
      features: [
        {
          title: "Expertise et Expérience",
          description: "Notre équipe apporte des années d'expérience dans le secteur et des connaissances spécialisées à chaque projet.",
          icon: "ri-award-line"
        },
        {
          title: "Approche Centrée sur le Client",
          description: "Nous donnons la priorité à vos besoins et objectifs, en veillant à ce que les solutions correspondent à vos objectifs commerciaux.",
          icon: "ri-customer-service-2-line"
        },
        {
          title: "Résultats Basés sur les Données",
          description: "Nos stratégies sont soutenues par une analyse complète des données et des méthodologies éprouvées.",
          icon: "ri-line-chart-line"
        }
      ],
      stats: [
        { value: "98%", label: "Taux de Satisfaction Client" },
        { value: "10+", label: "Projets Réalisés" },
        { value: "35%", label: "Augmentation Moyenne de l'Efficacité" },
        { value: "5+", label: "Années d'Expérience" }
      ]
    }
  };

  const t = translations[language];

  useEffect(() => {
    const animateCounters = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter-value');
          counters.forEach(counter => {
            // Reset counter to 0
            counter.textContent = '0' + (counter.textContent.includes('%') ? '%' : '+');
            
            // Get target value
            const target = parseInt(counter.getAttribute('data-target')) || 0;
            const duration = 2000;
            const increment = target / (duration / 16);
            let count = 0;
            
            // Start counting animation
            const updateCounter = () => {
              count += increment;
              if (count < target) {
                counter.textContent = Math.floor(count) + (counter.textContent.includes('%') ? '%' : '+');
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
              }
            };
            
            // Trigger animation
            counter.classList.remove('animated');
            void counter.offsetWidth; // Trigger reflow
            counter.classList.add('animated');
            updateCounter();
          });
        }
      });
    };

    const observer = new IntersectionObserver(animateCounters, { 
      threshold: 0.5 
    });

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    return () => {
      if (statsContainer) {
        observer.unobserve(statsContainer);
      }
    };
  }, [language]);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="p-1 bg-gradient-to-r from-primary to-secondary rounded-lg blog-image">
              <img 
                src="/AssetImages/WhyUsImage.jpeg" 
                alt="Data Analysis Meeting" 
                className="rounded-lg object-cover w-full h-full object-top"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">{t.sectionTitle}</h3>
              <p className="text-gray-600 mb-6 italic">{t.quote}</p>
              
              <div className="space-y-6">
                {t.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${feature.icon} ri-lg text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-center stats-container">
          {t.stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1 min-w-[200px] max-w-[300px]">
              <div 
                className="text-4xl font-bold text-primary mb-2 counter-value" 
                data-target={stat.value.replace(/[^0-9]/g, '')}
              >
                0{stat.value.includes('%') ? '%' : '+'}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .counter-value {
          display: inline-block;
          min-width: 60px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .counter-value.animated {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Company;