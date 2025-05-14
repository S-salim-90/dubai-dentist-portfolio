
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CaseStories from "@/components/CaseStories";
import ImageGallery from "@/components/ImageGallery";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CaseStories />
      <ImageGallery />
      <Skills />
      <AboutMe />
      <ContactSection />
      
      <footer className="bg-dental-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold mb-3">Mr Smile Dental Portfolio</h3>
            <p className="text-dental-100">
              Creating confident, beautiful smiles in Dubai
            </p>
            <div className="mt-6">
              <p className="text-sm text-dental-200">
                © {new Date().getFullYear()} All Rights Reserved | DHA Licensed Professional
              </p>
              <p className="text-xs text-dental-300 mt-1">
                Patient images used with permission. All client information is confidential.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
