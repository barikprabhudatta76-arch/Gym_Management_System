import React from "react";
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  CreditCard, 
  Award, 
  Shield, 
  Clock, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Target,
  Heart,
  Zap
} from "lucide-react";

const GymAbout = () => {
  const features = [
    {
      icon: Users,
      title: "Member Management",
      description: "Comprehensive member profiles, attendance tracking, and engagement metrics all in one place."
    },
    {
      icon: Dumbbell,
      title: "Trainer Coordination",
      description: "Efficiently manage trainer schedules, certifications, and member assignments."
    },
    {
      icon: Calendar,
      title: "Class Scheduling",
      description: "Intuitive class booking system with real-time availability and waitlist management."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure automated billing, membership plans, and financial reporting."
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "QR code check-ins and secure member verification system."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reports",
      description: "Data-driven insights to optimize operations and grow your membership."
    }
  ];

  const stats = [
    { value: "500+", label: "Gyms Trust Us", icon: Award },
    { value: "50K+", label: "Active Members", icon: Users },
    { value: "1M+", label: "Monthly Check-ins", icon: Clock },
    { value: "99.9%", label: "Uptime", icon: Shield }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      bio: "Former fitness center owner with 15 years of industry experience.",
      avatar: "SM"
    },
    {
      name: "James Chen",
      role: "CTO",
      bio: "Tech innovator specializing in scalable management solutions.",
      avatar: "JC"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Operations",
      bio: "Expert in gym workflow optimization and member experience.",
      avatar: "MR"
    },
    {
      name: "David Okafor",
      role: "Customer Success",
      bio: "Dedicated to helping gyms thrive with our platform.",
      avatar: "DO"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Empowering fitness businesses with intuitive technology that simplifies management and enhances member experiences."
    },
    {
      icon: Heart,
      title: "Vision",
      description: "Creating a world where every gym can focus on what matters most - their members' fitness journeys."
    },
    {
      icon: Zap,
      title: "Values",
      description: "Innovation, reliability, and partnership drive everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-yellow-400">FLEXZONE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Transforming gym management through innovative technology since 2020
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200 flex items-center justify-center">
                Start Your Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-200">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                FlexZone was born from a simple observation: gym owners spend too much time on administration and not enough on their members. Our founder, Sarah Mitchell, experienced this firsthand while running her own fitness center.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a simple check-in solution has evolved into a comprehensive management platform trusted by over 500 gyms worldwide. We've stayed true to our mission of making gym management effortless so you can focus on fitness.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center text-gray-900 font-semibold">SM</div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold">JC</div>
                  <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold">MR</div>
                </div>
                <p className="text-sm text-gray-600">Join 500+ gyms using FlexZone</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Founded</h3>
                <p className="text-2xl font-bold text-yellow-600">2020</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Team Size</h3>
                <p className="text-2xl font-bold text-blue-600">45+</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Locations</h3>
                <p className="text-2xl font-bold text-green-600">12</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Awards</h3>
                <p className="text-2xl font-bold text-purple-600">8</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Do What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guiding principles shape every feature we build and every decision we make.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition duration-200">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed specifically for modern fitness facilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-200">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team Behind FlexZone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate experts committed to revolutionizing gym management.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition duration-200">
                <span className="text-2xl font-bold text-gray-900">{member.avatar}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to transform your gym management?</h2>
              <p className="text-xl text-gray-300 mb-6">
                Join hundreds of fitness centers already growing with FlexZone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200">
                  Schedule a Demo
                </button>
                <button className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200">
                  Contact Support
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">hello@flexzone.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Headquarters</p>
                  <p className="font-semibold">123 Fitness Ave, Suite 100, Los Angeles, CA 90001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymAbout;