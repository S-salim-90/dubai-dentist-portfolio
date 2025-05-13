
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CaseStories = () => {
  const cases = [
    {
      id: 1,
      title: "Full Smile Makeover",
      category: "Cosmetic Dentistry",
      description: "Patient presented with severely discolored and misaligned teeth affecting their confidence. Treatment included professional whitening, 8 porcelain veneers, and minor orthodontic adjustment.",
      challenge: "Multiple dental issues requiring comprehensive treatment plan while maintaining natural appearance.",
      solution: "Phased treatment approach over 3 months to gradually transform smile while ensuring comfort.",
      result: "Dramatic improvement in smile aesthetics with natural-looking results that boosted patient confidence.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Implant Restoration",
      category: "Implantology",
      description: "Patient with missing molars causing difficulty eating and speaking. Treatment involved dental implants with custom crowns to restore function and aesthetics.",
      challenge: "Bone loss in the implant area requiring careful placement and possibly bone grafting.",
      solution: "3D imaging guided precision implant placement with minimal invasive technique.",
      result: "Successful integration of implants with surrounding tissue and full restoration of chewing function.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Complex Root Canal Therapy",
      category: "Endodontics",
      description: "Emergency patient with severe tooth pain and infection. Treatment involved advanced root canal therapy to save the natural tooth and prevent extraction.",
      challenge: "Calcified canals and curved root structure making standard approach difficult.",
      solution: "Utilized microscope-assisted endodontic treatment with specialized instruments.",
      result: "Complete pain relief with successful preservation of the natural tooth structure.",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
  ];

  return (
    <section id="cases" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Case Stories</h2>
        <p className="section-subtitle">
          Explore real patient transformations and discover how my comprehensive approach to dentistry
          creates confident, healthy smiles.
        </p>
        
        <div className="grid gap-8 md:gap-12">
          {cases.map((caseItem, index) => (
            <Card key={caseItem.id} className="case-card overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 p-6 lg:p-8 bg-dental-50">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-dental-100 text-dental-700 rounded-full mb-2">
                      {caseItem.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold mb-2">{caseItem.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{caseItem.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900">Challenge:</h4>
                      <p className="text-gray-600">{caseItem.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Solution:</h4>
                      <p className="text-gray-600">{caseItem.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Result:</h4>
                      <p className="text-gray-600">{caseItem.result}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3 bg-white">
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="sm:w-1/2 p-4 flex flex-col">
                      <h4 className="text-center text-sm font-medium mb-2">Before</h4>
                      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={caseItem.beforeImage} 
                          alt={`${caseItem.title} before treatment`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="sm:w-1/2 p-4 flex flex-col">
                      <h4 className="text-center text-sm font-medium mb-2">After</h4>
                      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={caseItem.afterImage} 
                          alt={`${caseItem.title} after treatment`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="ghost" className="text-dental-600 hover:text-dental-700 hover:bg-dental-50">
            View More Cases
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStories;
