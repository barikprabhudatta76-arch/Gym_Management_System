import React from "react";
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  CreditCard, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock,
  TrendingUp,
  Shield,
  Smartphone,
  Zap,
  Play,
  ChevronRight,
  Menu,
  X,
  Activity,
  Heart,
  Award,
  BarChart3,
  QrCode,
  Camera,
  Wallet
} from "lucide-react";

const GymHome = () => {
  const features = [
    {
      icon: QrCode,
      title: "Instant Check-ins",
      description: "QR code scanning for fast, contact-free member entry",
      color: "yellow"
    },
    {
      icon: Users,
      title: "Member Management",
      description: "Comprehensive profiles, attendance, and engagement tracking",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered class bookings and trainer assignments",
      color: "green"
    },
    {
      icon: Wallet,
      title: "Automated Billing",
      description: "Secure payments, memberships, and financial reports",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live insights on attendance, revenue, and growth",
      color: "red"
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Multi-tier member access and security protocols",
      color: "indigo"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 15+ Hours Weekly",
      description: "Automate administrative tasks and reduce manual work"
    },
    {
      icon: TrendingUp,
      title: "Boost Retention 40%",
      description: "Engage members with personalized experiences"
    },
    {
      icon: CreditCard,
      title: "Cut Costs 25%",
      description: "Streamline operations and eliminate inefficiencies"
    }
  ];

  const testimonials = [
    {
      name: "Michael Torres",
      role: "Owner, PowerFit Gym",
      content: "FlexZone transformed our operations. Check-ins are seamless and we've saved countless hours on admin work. Our members love the easy booking system.",
      rating: 5,
      avatar: "MT",
      location: "Miami, FL"
    },
    {
      name: "Jennifer Lee",
      role: "Manager, Elite Fitness",
      content: "The analytics alone are worth it. We increased membership retention by 35% in just 3 months. Best decision we made for our gym.",
      rating: 5,
      avatar: "JL",
      location: "Austin, TX"
    },
    {
      name: "Robert Chen",
      role: "Director, CrossFit Matrix",
      content: "From billing to class scheduling, everything is integrated perfectly. Our staff and trainers adapted quickly to the intuitive interface.",
      rating: 5,
      avatar: "RC",
      location: "Seattle, WA"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small studios",
      features: ["Up to 200 members", "Basic check-ins", "Class scheduling", "Email support"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "99",
      description: "Ideal for growing gyms",
      features: ["Up to 1000 members", "QR check-ins", "Trainer management", "Payment processing", "Analytics dashboard", "Priority support"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For multi-location chains",
      features: ["Unlimited members", "Multi-location", "API access", "Custom reporting", "Dedicated account manager", "24/7 phone support"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Trusted by 500+ Gyms Worldwide</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Gym's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Management
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl lg:mx-0 mx-auto">
                All-in-one platform to automate check-ins, manage members, process payments, and grow your fitness business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-200 flex items-center justify-center text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-900">JD</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">MK</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">SR</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">AL</div>
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-white">1,500+</span> gym professionals
                </p>
              </div>
            </div>

            {/* Right Hero Image/Graphic */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Today's Check-ins</p>
                          <p className="text-xl font-bold">247</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Active Members</p>
                          <p className="text-xl font-bold">1,432</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Classes Today</p>
                          <p className="text-xl font-bold">12</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Revenue</p>
                          <p className="text-xl font-bold">$8.2k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 rounded-full p-3">
                  <QrCode className="w-6 h-6 text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-sm font-medium uppercase tracking-wider mb-8">
            Trusted by leading fitness brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {['PowerFit', 'Elite Fitness', 'CrossFit Matrix', 'YogaLife', 'AquaCenter'].map((brand, idx) => (
              <div key={idx} className="text-gray-400 font-bold text-xl opacity-50 hover:opacity-100 transition">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Why Choose FlexZone</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Built for Modern Fitness Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Stop wasting time on manual tasks. Focus on what matters — your members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Powerful Features</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools that work together seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">98%</p>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">500+</p>
              <p className="text-gray-300">Gyms Trust Us</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">50K+</p>
              <p className="text-gray-300">Active Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">24/7</p>
              <p className="text-gray-300">Premium Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Trusted by Gym Owners
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients say about FlexZone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-gray-900 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-3">"{testimonial.content}"</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-yellow-500 shadow-xl scale-105 lg:scale-110' : 'border border-gray-100'}`}>
                {plan.popular && (
                  <span className="bg-yellow-500 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mt-4">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition duration-200 ${
                  plan.popular 
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Gym?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
            Join 500+ fitness centers already growing with FlexZone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition duration-200 flex items-center justify-center text-lg">
              Start 14-Day Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-200 flex items-center justify-center text-lg">
              Schedule a Demo
            </button>
          </div>
          <p className="text-sm text-gray-800 mt-6 opacity-90">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-8 w-8 text-yellow-400" />
                <span className="font-bold text-xl">
                  <span className="text-yellow-400">FLEX</span>ZONE
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                The complete gym management solution for modern fitness businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-yellow-400 transition">Features</li>
                <li className="hover:text-yellow-400 transition">Pricing</li>
                <li className="hover:text-yellow-400 transition">Demo</li>
                <li className="hover:text-yellow-400 transition">Integrations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-yellow-400 transition">About</li>
                <li className="hover:text-yellow-400 transition">Blog</li>
                <li className="hover:text-yellow-400 transition">Careers</li>
                <li className="hover:text-yellow-400 transition">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-yellow-400 transition">Help Center</li>
                <li className="hover:text-yellow-400 transition">Documentation</li>
                <li className="hover:text-yellow-400 transition">API Status</li>
                <li className="hover:text-yellow-400 transition">Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 FlexZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GymHome;