import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'CreativeFlow transformed our brand completely. Their strategic approach and creative execution exceeded all our expectations. Our website traffic increased by 250% in just 3 months!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EcoTech Solutions',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Working with CreativeFlow was an absolute pleasure. They understood our vision and brought it to life with incredible attention to detail. The results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Luxe Fashion',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The team at CreativeFlow is simply outstanding. Their e-commerce solution boosted our online sales by 320%. They\'re not just service providers, they\'re true partners in our success.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Owner, UrbanFit Gym',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Their marketing campaign was exactly what we needed. Membership doubled in 6 months, and the quality of leads has been exceptional. Highly recommend CreativeFlow!',
    rating: 5,
  },
  {
    name: 'Lisa Wang',
    role: 'Director, HealthFirst Clinic',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'CreativeFlow\'s healthcare marketing expertise is unmatched. Patient inquiries increased by 400%, and they helped us build trust in our community. Absolutely fantastic!',
    rating: 5,
  },
  {
    name: 'James Martinez',
    role: 'CEO, Foodie Delight',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Our mobile app exceeded 100K downloads in the first 3 months thanks to CreativeFlow. Their UX design is world-class, and their team is incredibly professional.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <Quote className="text-teal-500 mb-4" size={32} />

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-500"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join 500+ Happy Clients</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Experience the same success and satisfaction. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all">
              View More Testimonials
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
