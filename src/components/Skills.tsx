
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BadgeCheck, Stethoscope, Crosshair, Brain, Trophy, GraduationCap } from 'lucide-react';

const Skills = () => {
  const coreSkills = [
    { 
      name: 'Cosmetic Dentistry', 
      icon: BadgeCheck, 
      description: 'Expert in smile makeovers with veneers, whitening, and aesthetic restorations.',
      level: 95
    },
    { 
      name: 'Restorative Dentistry', 
      icon: Stethoscope, 
      description: 'Skilled in crowns, bridges, and tooth-colored fillings for optimal function.',
      level: 90
    },
    { 
      name: 'Implantology', 
      icon: Crosshair, 
      description: 'Advanced training in placement and restoration of dental implants.',
      level: 85
    },
    { 
      name: 'Endodontics', 
      icon: Brain, 
      description: 'Specialized in pain-free root canal treatments using modern techniques.',
      level: 88
    }
  ];

  const timeline = [
    {
      year: '2021 - Present',
      title: 'Senior Dentist',
      location: 'Premier Dental Clinic, Dubai',
      description: 'Leading cosmetic and restorative dental procedures for a diverse international clientele.'
    },
    {
      year: '2019 - 2021',
      title: 'Associate Dentist',
      location: 'Dubai Healthcare City',
      description: 'Focused on comprehensive dental care and specialized treatments.'
    },
    {
      year: '2018 - 2019',
      title: 'Residency Program',
      location: 'UAE University Dental Hospital',
      description: 'Advanced training in dental specialties and patient management.'
    },
    {
      year: '2017',
      title: 'Doctor of Dental Medicine',
      location: 'University of Sharjah',
      description: 'Graduated with honors, specializing in advanced dental procedures.'
    }
  ];

  const certifications = [
    {
      name: 'DHA Licensed Professional',
      year: '2018 - Present',
      icon: BadgeCheck
    },
    {
      name: 'Advanced Implantology Certificate',
      year: '2020',
      icon: Trophy
    },
    {
      name: 'Aesthetic Dentistry Masterclass',
      year: '2019',
      icon: GraduationCap
    },
    {
      name: 'Endodontic Specialist Training',
      year: '2021',
      icon: Brain
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-dental-50 to-white">
      <div className="section-container">
        <h2 className="section-title">Expertise & Skillsets</h2>
        <p className="section-subtitle">
          With specialized training and years of experience, I offer a comprehensive range of dental services
          focused on excellence and patient satisfaction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {coreSkills.map((skill, index) => (
            <Card key={index} className="skill-item">
              <div className="rounded-full bg-dental-100 p-3 mb-4">
                <skill.icon className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-center mb-4">{skill.description}</p>
              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-dental-700">Proficiency</span>
                  <span className="text-xs font-medium text-dental-700">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-8 text-center">Professional Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-dental-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-dental-500"></div>
                  
                  <div className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="md:w-1/2"></div>
                    <div className={`md:w-1/2 bg-white p-6 rounded-xl shadow-md ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-dental-100 text-dental-700 rounded-full mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-dental-600 mb-2">{item.location}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <cert.icon className="h-8 w-8 text-dental-600 mb-3" />
                <h4 className="font-semibold mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
