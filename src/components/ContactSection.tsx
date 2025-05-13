
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or interested in booking a consultation? Reach out through any of these channels
          or fill out the contact form below.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="rounded-full bg-dental-100 p-3 mb-4">
              <Phone className="h-6 w-6 text-dental-600" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+971 XX XXX XXXX</p>
            <p className="text-gray-500 text-sm">Available 9:00 AM - 6:00 PM</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="rounded-full bg-dental-100 p-3 mb-4">
              <Mail className="h-6 w-6 text-dental-600" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@dubaidentist.com</p>
            <p className="text-gray-500 text-sm">Response within 24 hours</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="rounded-full bg-dental-100 p-3 mb-4">
              <MapPin className="h-6 w-6 text-dental-600" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Dubai Healthcare City</p>
            <p className="text-gray-500 text-sm">Dubai, United Arab Emirates</p>
          </Card>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <div>
                <Button className="w-full md:w-auto bg-dental-500 hover:bg-dental-600">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Connect Professionally</h3>
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-blue-100 p-2 mr-4">
                  <Linkedin className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn Profile</h4>
                  <p className="text-gray-600 text-sm">Connect for professional updates</p>
                </div>
              </div>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors"
              >
                View Profile
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-dental-100 to-dental-50 p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Working Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Thursday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Friday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
