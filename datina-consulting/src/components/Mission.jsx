import React from 'react';

const Mission = ({ language }) => {
  const translations = {
    en: {
      title: "Our Mission & Vision",
      description: "At DaTina Consulting, we are committed to empowering businesses through data-driven insights and innovative solutions. Our mission is to transform complex data into strategic advantages for our clients.",
      visionTitle: "Vision",
      visionText: "To be the leading data analytics and business solutions provider, recognized for our innovation, expertise, and commitment to client success.",
      missionTitle: "Mission",
      missionText: "To deliver exceptional value through data-driven insights and innovative solutions that help our clients achieve their business objectives.",
      valuesTitle: "Our Core Values",
      values: [
        {
          title: "Integrity",
          description: "We uphold the highest ethical standards in all our interactions and decisions.",
          icon: "ri-shield-check-line"
        },
        {
          title: "Innovation",
          description: "We continuously seek new and better ways to solve problems and create value.",
          icon: "ri-lightbulb-line"
        },
        {
          title: "Collaboration",
          description: "We work together with our clients to achieve shared goals and mutual success.",
          icon: "ri-team-line"
        },
        {
          title: "Excellence",
          description: "We strive for excellence in everything we do, delivering exceptional results.",
          icon: "ri-bar-chart-grouped-line"
        }
      ]
    },
    fr: {
      title: "Notre Mission et Vision",
      description: "Chez DaTina Consulting, nous nous engageons à autonomiser les entreprises grâce à des informations basées sur les données et des solutions innovantes. Notre mission est de transformer des données complexes en avantages stratégiques pour nos clients.",
      visionTitle: "Vision",
      visionText: "Être le principal fournisseur d'analyses de données et de solutions commerciales, reconnu pour notre innovation, notre expertise et notre engagement envers la réussite de nos clients.",
      missionTitle: "Mission",
      missionText: "Offrir une valeur exceptionnelle grâce à des informations basées sur les données et des solutions innovantes qui aident nos clients à atteindre leurs objectifs commerciaux.",
      valuesTitle: "Nos Valeurs Fondamentales",
      values: [
        {
          title: "Intégrité",
          description: "Nous respectons les normes éthiques les plus élevées dans toutes nos interactions et décisions.",
          icon: "ri-shield-check-line"
        },
        {
          title: "Innovation",
          description: "Nous recherchons continuellement de nouvelles et meilleures façons de résoudre les problèmes et de créer de la valeur.",
          icon: "ri-lightbulb-line"
        },
        {
          title: "Collaboration",
          description: "Nous travaillons en collaboration avec nos clients pour atteindre des objectifs communs et un succès mutuel.",
          icon: "ri-team-line"
        },
        {
          title: "Excellence",
          description: "Nous visons l'excellence dans tout ce que nous faisons, en offrant des résultats exceptionnels.",
          icon: "ri-bar-chart-grouped-line"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="py-20 bg-[#0f172a] text-white ">
      <div className="container mx-auto px-4" >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 graytext">{t.title}</h2>
            <p className="text-gray-300 mb-8">{t.description}</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-eye-line ri-lg text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 graytext">{t.visionTitle}</h4>
                  <p className="text-gray-300 ">{t.visionText}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-compass-3-line ri-lg text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 graytext">{t.missionTitle}</h4>
                  <p className="text-gray-300 ">{t.missionText}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 ">
            <h3 className="text-2xl font-semibold mb-6 graytext">{t.valuesTitle}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 graybackground">
              {t.values.map((value, index) => (
                <div key={index} className="bg-white bg-opacity-5 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <i className={`${value.icon} ri-lg text-primary`}></i>
                  </div>
                  <h4 className="font-semibold mb-2 ">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;