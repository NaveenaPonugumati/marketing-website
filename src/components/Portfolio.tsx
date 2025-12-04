import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'EcoTech Solutions',
    category: 'Brand Identity & Web Design',
    description: 'Complete brand overhaul and website redesign for a sustainable technology company.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+250% traffic increase',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'UrbanFit Gym',
    category: 'Digital Marketing Campaign',
    description: 'Multi-channel marketing campaign that doubled membership in 6 months.',
    image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+180% membership growth',
    color: 'from-orange-500 to-pink-600',
  },
  {
    title: 'Luxe Fashion',
    category: 'E-commerce Development',
    description: 'Custom e-commerce platform with AI-powered recommendations.',
    image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+320% online sales',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'TechStart Inc',
    category: 'SEO & Content Strategy',
    description: 'Comprehensive SEO strategy that dominated search rankings.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: 'Top 3 rankings for 50+ keywords',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Foodie Delight',
    category: 'Mobile App & Branding',
    description: 'Restaurant delivery app with seamless user experience.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '100K+ downloads in 3 months',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'HealthFirst Clinic',
    category: 'Healthcare Marketing',
    description: 'Complete digital transformation for a medical practice.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+400% patient inquiries',
    color: 'from-cyan-500 to-blue-600',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent success stories and see how we've helped brands achieve remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="text-gray-700" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-teal-600 mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-semibold`}>
                  {project.results}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
