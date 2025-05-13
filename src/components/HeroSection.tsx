
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-dental-50 to-dental-100 -z-10" 
        aria-hidden="true"
      />
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg 
          className="absolute right-0 top-0 h-full w-full transform translate-x-1/3 -translate-y-1/4 text-dental-100 opacity-20" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M45.2,-51.2C58.8,-39.7,70.5,-26.1,73.8,-10.7C77.1,4.7,72.1,21.9,62.1,35.3C52.1,48.7,37.2,58.3,20.1,66.3C3,74.3,-16.3,80.7,-32.3,74.8C-48.2,68.9,-60.7,50.8,-69,30.8C-77.3,10.7,-81.4,-11.3,-74.8,-29.5C-68.3,-47.7,-51.1,-62.1,-33.2,-72.6C-15.3,-83.2,3.3,-89.9,19,-84.1C34.6,-78.4,47.4,-60.2,45.2,-51.2Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-10 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Creating Confident
            <span className="block text-dental-600">Beautiful Smiles</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-xl">
            DHA-licensed dentist with 4 years of expertise in cosmetic dentistry, 
            restorative procedures, and patient-centered care in Dubai, UAE.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-dental-500 hover:bg-dental-600">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-dental-500 text-dental-600 hover:bg-dental-50">
              View Cases
            </Button>
          </div>
          <div className="mt-10 flex items-center">
            <div className="mr-6">
              <p className="font-bold text-3xl text-dental-600">4+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="mr-6">
              <p className="font-bold text-3xl text-dental-600">500+</p>
              <p className="text-gray-600">Happy Patients</p>
            </div>
            <div>
              <p className="font-bold text-3xl text-dental-600">DHA</p>
              <p className="text-gray-600">Licensed</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-dental-500/20 rounded-full blur-2xl"></div>
            <img
              src="/placeholder.svg"
              alt="Professional dentist with patient"
              className="relative z-10 rounded-2xl shadow-xl max-w-full h-auto object-cover"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
