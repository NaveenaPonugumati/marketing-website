import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '999',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Brand Identity Design',
      'Basic Website (5 pages)',
      'Social Media Setup',
      'Basic SEO',
      'Email Support',
      '1 Round of Revisions',
    ],
    color: 'from-blue-500 to-cyan-600',
    popular: false,
  },
  {
    name: 'Professional',
    price: '2,499',
    description: 'Ideal for growing businesses ready to scale',
    features: [
      'Everything in Starter',
      'Advanced Website (15 pages)',
      'Content Strategy',
      'Advanced SEO & Analytics',
      'Social Media Management',
      'Priority Support',
      'Unlimited Revisions',
      'Monthly Performance Reports',
    ],
    color: 'from-teal-500 to-blue-600',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Custom Web Application',
      'Multi-Channel Marketing',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Custom Integrations',
      'Video Production',
      'Quarterly Strategy Sessions',
    ],
    color: 'from-orange-500 to-pink-600',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our quality guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-teal-500 md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className={`absolute top-0 right-0 bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-bl-2xl flex items-center space-x-1`}>
                  <Star size={16} fill="currentColor" />
                  <span className="font-semibold text-sm">Most Popular</span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl font-bold text-gray-900">Custom</div>
                  ) : (
                    <div className="flex items-start">
                      <span className="text-2xl font-semibold text-gray-900 mt-2">$</span>
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2 mt-4">/project</span>
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all mb-8 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-xl transform hover:-translate-y-1`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-0.5`}>
                        <Check className="text-white" size={16} />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include a 30-day money-back guarantee</p>
          <p className="text-sm text-gray-500">Need a custom solution? Contact us for a personalized quote.</p>
        </div>
      </div>
    </section>
  );
}
