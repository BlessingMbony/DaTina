import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Hero = ({ language }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize chart
    const heroChart = echarts.init(document.getElementById('heroChart'));
    
    const heroOption = {
      animation: false,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false }
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false }
      },
      series: [
        {
          data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: 'rgba(87, 181, 231, 1)',
            width: 3
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(87, 181, 231, 0.3)' },
              { offset: 1, color: 'rgba(87, 181, 231, 0.1)' }
            ])
          }
        },
        {
          data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: 'rgba(141, 211, 199, 1)',
            width: 3
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(141, 211, 199, 0.3)' },
              { offset: 1, color: 'rgba(141, 211, 199, 0.1)' }
            ])
          }
        }
      ],
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        textStyle: { color: '#1f2937' }
      }
    };
    
    heroChart.setOption(heroOption);
    
    // Handle resize
    const handleResize = () => heroChart.resize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      heroChart.dispose();
    };
  }, []);
  
  const translations = {
    en: {
      title: "Humans Lie,",
      subtitle: "Data Doesn't.",
      description: "Let us understand your data to scale your business. Transform insights into strategic advantages with DaTina Consulting.",
      discoverServices: "Find Your Solution",
      contactUs: "Contact Us"
    },
    fr: {
      title: "Les Humains Mentent,",
      subtitle: "Les Données Non.",
      description: "Laissez-nous comprendre vos données pour développer votre entreprise. Transformez les insights en avantages stratégiques avec DaTina Consulting.",
      discoverServices: "Trouvez votre solution",
      contactUs: "Contactez-nous"
    }
  };
  
  const t = translations[language];

  return (
    <section id="home" className="hero-section pt-28 pb-20 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/AssetImages/HeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[#0f172a] bg-opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="block">{t.title}</span>
              <span className="gradient-text">{t.subtitle}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">{t.description}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#services" 
                className="bg-primary text-[#0f172a] px-8 py-3 !rounded-button font-medium hover:bg-opacity-90 transition-all text-center whitespace-nowrap"
              >
                {t.discoverServices}
              </a>
              <a 
                href="#contact" 
                className="border border-white text-white px-8 py-3 !rounded-button font-medium hover:bg-white hover:bg-opacity-10 transition-all text-center whitespace-nowrap"
              >
                {t.contactUs}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 data-chart" id="heroChart"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;