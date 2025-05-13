
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-dental-500/20 rounded-full blur-xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Professional portrait" 
                className="relative rounded-2xl shadow-lg w-full h-auto object-cover"
                style={{ minHeight: "500px" }}
              />
              
              <div className="absolute bottom-6 right-6">
                <Button className="bg-dental-500 hover:bg-dental-600 shadow-lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-serif font-bold mb-6">About Me</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl mb-6 leading-relaxed">
                With over 4 years of experience as a DHA-licensed dentist in Dubai, I am passionate about 
                transforming smiles and improving patients' quality of life through exceptional dental care.
              </p>
              
              <p className="mb-6">
                My journey in dentistry began with a profound interest in both the artistic and scientific 
                aspects of dental medicine. After completing my education with honors, I committed myself to 
                continuous learning and mastering advanced techniques in cosmetic and restorative dentistry.
              </p>
              
              <p className="mb-6">
                I believe in a patient-centered approach, taking time to understand each individual's unique 
                needs and concerns. My goal is not just to treat dental issues but to educate patients about 
                their oral health and create long-term relationships built on trust and exceptional results.
              </p>
              
              <p className="mb-6">
                When I'm not transforming smiles, I enjoy exploring Dubai's cultural scene, volunteering in 
                community dental health programs, and staying updated with the latest advancements in dental 
                technology and techniques through international conferences and specialized training.
              </p>
              
              <div className="flex gap-4 mt-8">
                <Button variant="outline" className="border-dental-500 text-dental-600 hover:bg-dental-50">
                  <FileText className="mr-2 h-4 w-4" />
                  Professional Statement
                </Button>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-dental-50 rounded-xl">
                <h3 className="font-bold text-3xl text-dental-600 mb-1">4+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-dental-50 rounded-xl">
                <h3 className="font-bold text-3xl text-dental-600 mb-1">500+</h3>
                <p className="text-gray-600">Successful Cases</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-dental-50 rounded-xl">
                <h3 className="font-bold text-3xl text-dental-600 mb-1">5+</h3>
                <p className="text-gray-600">Specializations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
