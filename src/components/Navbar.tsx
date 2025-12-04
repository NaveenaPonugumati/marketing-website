import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              CreativeFlow
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">
              Pricing
            </button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
