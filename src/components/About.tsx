import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">CreativeFlow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate creators, strategists, and innovators dedicated to helping brands
            reach their full potential in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Building Brands That Stand Out
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2015, CreativeFlow has grown from a small startup to a leading marketing agency
              serving clients across the globe. Our mission is simple: to create meaningful connections
              between brands and their audiences through innovative design and strategic marketing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of creativity combined with data-driven insights. Every project
              we undertake is backed by thorough research, strategic planning, and a commitment to
              excellence that has earned us recognition as industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <Target size={40} className="mb-4" />
              <h4 className="text-2xl font-bold mb-2">Our Mission</h4>
              <p className="text-teal-50">Empowering brands to achieve extraordinary growth</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform mt-8">
              <Users size={40} className="mb-4" />
              <h4 className="text-2xl font-bold mb-2">Our Team</h4>
              <p className="text-orange-50">50+ talented professionals across the globe</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <Award size={40} className="mb-4" />
              <h4 className="text-2xl font-bold mb-2">Our Awards</h4>
              <p className="text-blue-50">Recognized for excellence in digital marketing</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform mt-8">
              <TrendingUp size={40} className="mb-4" />
              <h4 className="text-2xl font-bold mb-2">Our Growth</h4>
              <p className="text-pink-50">300% YoY growth for our clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
