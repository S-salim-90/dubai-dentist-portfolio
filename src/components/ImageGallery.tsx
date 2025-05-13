
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cosmetic', name: 'Cosmetic' },
    { id: 'restorative', name: 'Restorative' },
    { id: 'clinic', name: 'Clinic' }
  ];
  
  const galleryImages = [
    { 
      id: 1, 
      src: '/placeholder.svg', 
      alt: 'Smile transformation case', 
      category: 'cosmetic',
      title: 'Smile Transformation',
      description: 'Complete smile makeover with porcelain veneers'
    },
    { 
      id: 2, 
      src: '/placeholder.svg', 
      alt: 'Dental implant procedure', 
      category: 'restorative',
      title: 'Dental Implant',
      description: 'Single tooth replacement with titanium implant'
    },
    { 
      id: 3, 
      src: '/placeholder.svg', 
      alt: 'Modern dental clinic', 
      category: 'clinic',
      title: 'State-of-Art Facilities',
      description: 'Our modern treatment room with advanced equipment'
    },
    { 
      id: 4, 
      src: '/placeholder.svg', 
      alt: 'Teeth whitening results', 
      category: 'cosmetic',
      title: 'Professional Whitening',
      description: 'In-office teeth whitening procedure results'
    },
    { 
      id: 5, 
      src: '/placeholder.svg', 
      alt: 'Dental crown procedure', 
      category: 'restorative',
      title: 'Ceramic Crown',
      description: 'Custom-made ceramic crown for damaged molar'
    },
    { 
      id: 6, 
      src: '/placeholder.svg', 
      alt: 'Digital smile design', 
      category: 'cosmetic',
      title: 'Digital Smile Design',
      description: 'Using advanced technology to plan smile transformations'
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Image Gallery</h2>
        <p className="section-subtitle">
          Browse through high-quality images of my clinical work, facility, and successful procedures, 
          showcasing my commitment to dental excellence.
        </p>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-dental-50">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-dental-500 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages
                  .filter(img => category.id === 'all' || img.category === category.id)
                  .map((image) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div 
                          className="group relative bg-gray-100 rounded-lg overflow-hidden cursor-pointer aspect-[4/3]"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <h3 className="text-white font-semibold">{image.title}</h3>
                            <p className="text-white/80 text-sm">{image.description}</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl p-0 overflow-hidden">
                        <div className="relative">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-2 top-2 z-10 bg-black/20 hover:bg-black/40 text-white"
                            onClick={() => setSelectedImage(null)}
                          >
                            <X size={18} />
                          </Button>
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-auto max-h-[80vh] object-contain" 
                          />
                          <div className="bg-white p-4">
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                            <p className="text-gray-600">{image.description}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ImageGallery;
