
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const learnMoreRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);

  // Add fade-in effect when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.feature-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToLearnMore = () => {
    if (learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
          AI Security Screening
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
          Advanced AI-driven object frisking, gender detection, and sign recognition for a safer world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button onClick={scrollToLearnMore} className="neon-button flex items-center">
            Learn More <ArrowDown className="ml-2 h-4 w-4" />
          </button>
          <Link to="/demo" className="neon-button">
            Live Demo
          </Link>
        </div>
      </section>
      
      {/* Learn More Section */}
      <section ref={learnMoreRef} className="py-20 px-4 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-neonBlue">Security</span> Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Object Frisking */}
            <div 
              className="feature-card card"
              style={{ "--delay": "0" } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold text-neonBlue mb-4">Object Frisking</h3>
              <p className="text-gray-300 mb-6">
                Our AI-powered object frisking technology uses advanced computer vision algorithms to detect concealed objects on a person's body without physical contact, enhancing security while respecting privacy.
              </p>
              <p className="text-gray-300 mb-6">
                The system can identify weapons, contraband, and other prohibited items with over 95% accuracy even through clothing, making security screening more efficient and less intrusive.
              </p>
              <p className="text-gray-400">
                Applications include airports, government buildings, stadiums, and other high-security venues.
              </p>
            </div>
            
            {/* Gender Detection */}
            <div 
              className="feature-card card"
              style={{ "--delay": "1" } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold text-neonBlue mb-4">Gender Detection</h3>
              <p className="text-gray-300 mb-6">
                Our gender detection system uses ethically designed AI to identify individual genders from images or video feeds, allowing for demographic analysis and improved security screening protocols.
              </p>
              <p className="text-gray-300 mb-6">
                With a focus on privacy and ethical considerations, the technology achieves high accuracy while minimizing bias and respecting individual privacy rights.
              </p>
              <p className="text-gray-400">
                Useful for demographic analysis, personalized security approaches, and tailored screening processes.
              </p>
            </div>
            
            {/* Sign Recognition */}
            <div 
              className="feature-card card"
              style={{ "--delay": "2" } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold text-neonBlue mb-4">Sign Recognition</h3>
              <p className="text-gray-300 mb-6">
                Our sign recognition technology automatically identifies and interprets various security-related signs, gestures, and signals in real-time from video feeds or images.
              </p>
              <p className="text-gray-300 mb-6">
                The system can detect suspicious behavior, distress signals, and security-related gestures, enabling rapid response to potential security threats or emergencies.
              </p>
              <p className="text-gray-400">
                Ideal for surveillance systems, emergency response, and security monitoring in public spaces.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/demo" className="neon-button">
              Try Live Demo
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
