import React, { useState } from 'react';
import { Award, Users, Calendar, Globe, Mic, ChevronRight, Trophy, Briefcase, Mail, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assets
import promotingLogo from '../assets/Final Logo 2020-1.png'; 
import promo from '../assets/INSA.jpg'; 
import promot from '../assets/Shipyards Assocn Logo.jpg'; 
import sponsor from '../assets/SCI Navratna Logo2015 (1).png'; 
const HeroImage = 'https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// --- Sub-Components ---

const StatCard = ({ number, label, icon }) => (
  <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-600/20 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="p-3 bg-blue-600/10 rounded-full text-blue-400">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {number}
      </div>
      <div className="text-sm text-blue-200 font-semibold uppercase tracking-widest">
        {label}
      </div>
    </div>
  </div>
);

const SpeakerCard = ({ name, title, company, description }) => (
  <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
        <Users className="w-10 h-10 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-blue-600 font-semibold text-sm mb-1">{title}</p>
      <p className="text-gray-600 text-sm mb-3">{company}</p>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

const PageSummaryCard = ({ title, description, icon, link, bgColor }) => (
  <div className={`${bgColor} rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white/20 rounded-full text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-100 mb-4">{description}</p>
        <Link to={link} className="text-white font-semibold text-sm hover:text-blue-200 flex items-center gap-1">
          Learn more <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const Home = () => {
  const featuredSpeakers = [];
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Page Summaries - UPDATED LINKS
  const pageSummaries = [
    {
      title: "Conference Topics",
      description: "Explore cutting-edge discussions on sustainable shipping, digital transformation, and maritime innovation.",
      icon: <Mic className="w-6 h-6" />,
      link: "/conference-topics/advisory-board", // Pointing to Advisory Board
      bgColor: "bg-blue-600"
    },
    {
      title: "Excellence Awards",
      description: "Celebrating maritime leadership across 30+ categories including innovation and sustainability.",
      icon: <Trophy className="w-6 h-6" />,
      link: "/awards/categories", // Pointing to Award Categories
      bgColor: "bg-blue-700"
    },
    {
      title: "Event Details",
      description: "Join us on 24th April 2026 at Lemon Tree Hotel, Trivandrum for this premier maritime event.",
      icon: <Calendar className="w-6 h-6" />,
      link: "/conference-topics/agenda", // Pointing to Agenda for event details
      bgColor: "bg-blue-800"
    },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      
      {/* 🚢 Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black/90">
        <div 
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block bg-blue-600 text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] px-6 sm:px-8 py-3 rounded-full mb-6 sm:mb-8 shadow-xl shadow-blue-500/40 border-2 border-blue-400">
  24 April 2026 | LEMON TREE HOTEL, TRIVANDRUM
</div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-none">
              MARPORTS <span className="text-blue-400 block sm:inline">GLOBAL</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-2">
              Conference & Excellence Awards 2026
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
              A premier international platform uniting maritime leaders, shipowners, port developers, 
              terminal operators, ship designers, digitalization experts, and policymakers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 lg:mb-12 px-4">
              <a 
                href="https://www.ehub.events/event/marport-global-conference-and-awards-2025/13#register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto"
              >
                <button className="group w-full px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3 md:py-4 bg-blue-600 text-white font-bold rounded-lg text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-blue-500/40">
                  <span className="flex items-center justify-center gap-2">
                    REGISTER NOW
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </a>
              
              <button className="group w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3 md:py-4 bg-white/10 text-white font-bold rounded-lg text-sm sm:text-base md:text-lg hover:bg-white/20 border border-blue-400/50 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  BECOME A SPONSOR
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 lg:mt-16 px-2">
              {[
                { number: "150+", label: "Leaders", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
                { number: "50+", label: "Countries", icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
                { number: "30+", label: "Awards", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" /> },
                { number: "20+", label: "Sponsors", icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" /> }
              ].map((stat, idx) => (
                <div key={idx} className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-blue-600/20 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-3">
                    <div className="p-2 sm:p-3 bg-blue-600/10 rounded-full text-blue-400">
                      {stat.icon}
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200 font-semibold uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🎤 Featured Speakers Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {featuredSpeakers.map((speaker, idx) => (
              <SpeakerCard key={idx} {...speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Sponsors Section */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Sponsors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Partnering with industry leaders to drive maritime innovation and sustainability
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Key Promoting Organizations</h2>
              <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
          
                <a href="https://www.shipindia.com/" target="_blank" rel="noopener noreferrer">
                  <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
                    <img src={sponsor} alt="Key Promoting Organization 2" className="object-contain w-full h-full p-2" />
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Promoting Organizations</h2>
              <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
                <a href="https://www.asianshipowners.org/" target="_blank" rel="noopener noreferrer">
                  <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
                    <img src={promotingLogo} alt="Promoting Organization 1" className="object-contain w-full h-full p-2" />
                  </div>
                </a>
                <a href="https://www.insa.in/" target="_blank" rel="noopener noreferrer">
                  <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
                    <img src={promo} alt="Promoting Organization 2" className="object-contain w-full h-full p-2" />
                  </div>
                </a>
                
                      <a href="https://www.shipyardsassociationofindia.com/" target="_blank" rel="noopener noreferrer">
                  <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
                    <img src={promot} alt="Key Promoting Organization 1" className="object-contain w-full h-full p-2" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📄 Explore More Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore <span className="text-blue-600">More</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover all aspects of MARPORTS GLOBAL 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pageSummaries.map((page, idx) => (
              <PageSummaryCard key={idx} {...page} />
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 Awards Preview */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Excellence <span className="text-blue-300">Awards</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Celebrating maritime leadership across 30+ categories
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <Trophy className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">30+ Categories</h3>
                  <p className="text-blue-200">Recognizing excellence across all maritime sectors</p>
                </div>
                <div className="p-6">
                  <Award className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Global Recognition</h3>
                  <p className="text-blue-200">Prestigious awards for industry leaders worldwide</p>
                </div>
                <div className="p-6">
                  <Calendar className="w-12 h-12 text-green-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">24 April 2026</h3>
                  <p className="text-blue-200">Awards ceremony at Lemon Tree Hotel, Trivandrum</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/awards/categories">
              <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg">
                <span className="flex items-center gap-2">
                  VIEW ALL AWARD CATEGORIES
                  <ChevronRight className="w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 📧 Contact & Registration */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-blue-300 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h2>
                <p className="text-gray-600 text-lg">Register now or contact us for sponsorship opportunities</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Registration</h3>
                  </div>
                  <p className="text-gray-700 mb-4">Secure your place at the premier maritime event of 2026</p>
                  <a href="https://www.ehub.events/event/marport-global-conference-and-awards-2025/13#register" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    REGISTER NOW
                  </a>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
                  </div>
                  <p className="text-gray-700 mb-4">For sponsorship inquiries and event information</p>
                  <a
                    href="mailto:jayadev@marportsglobal.com"
                    className="mt-auto mx-auto inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 border border-blue-600 transition-colors"
                  >
                    CONTACT TEAM
                  </a>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:col-span-2 md:max-w-md md:mx-auto w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Accommodation</h3>
                  </div>
                  <p className="text-gray-700 mb-4">For hotel stay support and special room-rate assistance</p>
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(true)}
                    className="mt-auto mx-auto inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 border border-blue-600 transition-colors"
                  >
                    CONTACT TEAM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold text-gray-900">Accommodation Support</h3>
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mb-5 text-gray-700 leading-relaxed">
              For accommodation arrangements during Marports Global, guests are invited to directly connect with the hotel
              to avail special room rates extended exclusively for Marports attendees.
            </p>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-lg font-bold text-gray-900">Mr. Gireesh</p>
              <p className="mt-1 font-medium text-gray-800">Lemon Tree Hotel Thiruvananthapuram</p>
              <p className="mt-4 flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4 text-blue-600" />
                <a href="tel:+919497526449" className="hover:text-blue-700">+91 94975 26449</a>
              </p>
              <p className="mt-2 flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4 text-blue-600" />
                <a href="mailto:sales.ltptm@lemontreehotels.com" className="hover:text-blue-700">
                  sales.ltptm@lemontreehotels.com
                </a>
              </p>
            </div>

            <p className="mt-5 text-gray-700 leading-relaxed">
              All reservations and special rate requests may be coordinated directly with the hotel.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white/70 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-2 text-white">MARPORTS GLOBAL 2026</p>
          <p className="text-lg mb-4">Conference & Excellence Awards</p>
          <p className="text-sm mb-4">24th April 2026 | Lemon Tree Hotel | Trivandrum, Kerala, India</p>
          <p className="text-sm">
            Organized by E HUB EVENTS PRIVATE LIMITED | 
            <a href="https://www.ehub.events" className="hover:text-white transition-colors ml-2">www.ehub.events</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
