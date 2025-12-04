import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-24 pb-20 bg-gradient-to-br from-teal-50 via-blue-50 to-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Sparkles className="text-teal-600" size={20} />
              <span className="text-sm font-medium text-gray-700">Trusted by 500+ companies worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">
                Transform Your Brand
              </span>
              <br />
              <span className="text-gray-900">Into Something</span>
              <br />
              <span className="text-gray-900">Extraordinary</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              We craft stunning digital experiences that captivate audiences and drive measurable results.
              Let's turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg border-2 border-gray-200 transform hover:-translate-y-1 transition-all">
                View Our Work
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Industry Awards</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full h-[600px]">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl transform rotate-6 animate-float"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl transform -rotate-6 animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Creative Excellence</h3>
                  <p className="text-gray-600">Delivering results that matter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
