import { Zap, Shield, Heart, Trophy } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'We work efficiently to deliver high-quality results on time, every time. No delays, no excuses.',
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    description: 'With 500+ successful projects and 98% client satisfaction, our results speak for themselves.',
  },
  {
    icon: Heart,
    title: 'Dedicated Support',
    description: 'Our team is always here for you with 24/7 support and ongoing maintenance for peace of mind.',
  },
  {
    icon: Trophy,
    title: 'Award-Winning Team',
    description: 'Industry-recognized experts with 50+ awards for excellence in design and marketing.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            We combine creativity, strategy, and technology to deliver exceptional results that drive real business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-white/20 transition-colors">
                <reason.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-teal-100 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their brands with CreativeFlow
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
