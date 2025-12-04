import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: '10 Digital Marketing Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with these emerging trends that will shape the future of digital marketing.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marketing',
    date: 'Dec 1, 2024',
    readTime: '5 min read',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'The Psychology of Color in Brand Design',
    excerpt: 'Discover how color choices impact customer perception and drive conversions for your brand.',
    image: 'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Design',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    color: 'from-orange-500 to-pink-600',
  },
  {
    title: 'SEO Best Practices for 2024: Complete Guide',
    excerpt: 'Master the latest SEO techniques to dominate search rankings and drive organic traffic.',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SEO',
    date: 'Nov 25, 2024',
    readTime: '10 min read',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Building High-Converting Landing Pages',
    excerpt: 'Learn the essential elements that transform visitors into customers with proven conversion strategies.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Design',
    date: 'Nov 22, 2024',
    readTime: '6 min read',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'Social Media Strategy That Actually Works',
    excerpt: 'Cut through the noise with a data-driven social media strategy that delivers real results.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Social Media',
    date: 'Nov 20, 2024',
    readTime: '8 min read',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'The Future of AI in Marketing Automation',
    excerpt: 'Explore how artificial intelligence is revolutionizing marketing workflows and customer experiences.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
    date: 'Nov 18, 2024',
    readTime: '9 min read',
    color: 'from-cyan-500 to-blue-600',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert tips, industry trends, and actionable strategies to grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${post.color} text-white rounded-full text-sm font-semibold`}>
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-teal-600 font-semibold group-hover:space-x-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
