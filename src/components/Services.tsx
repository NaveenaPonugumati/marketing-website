import { Palette, Code, Megaphone, Search, Video, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Create memorable visual identities that resonate with your target audience and set you apart from competitors.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build fast, responsive, and user-friendly websites that drive conversions and deliver exceptional experiences.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Reach your audience with targeted campaigns across social media, email, and paid advertising channels.',
    color: 'from-orange-500 to-pink-600',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and organic visibility with data-driven SEO strategies that deliver results.',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'Engage your audience with compelling video content, photography, and multimedia that tells your story.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Strategy',
    description: 'Make informed decisions with comprehensive analytics and strategic insights tailored to your business goals.',
    color: 'from-cyan-500 to-blue-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and accelerate growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <button className="mt-6 text-teal-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                <span>Learn More</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
