import React, { useState } from 'react';
import { Award, Users, Calendar, Globe, Mic, ChevronDown, ChevronRight, Trophy, Briefcase, Mail, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitRegistration } from '../cms/registrations/api';

// Assets
import promotingLogo from '../assets/Final Logo 2020-1.png'; 
import promo from '../assets/INSA.jpg'; 
import promot from '../assets/Shipyards Assocn Logo.jpg'; 
import sponsor from '../assets/SCI Navratna Logo2015 (1).png'; 
import so from '../assets/associate.jpg'; 
import ass2 from '../assets/asso2.jpeg'; 
import knowledge from '../assets/knowledge partner.jpeg'; 

const HeroImage = 'https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const particleDots = [
  { top: '11%', left: '3%', size: 5, delay: '0s', duration: '7.4s' },
  { top: '16%', left: '8%', size: 3, delay: '1.1s', duration: '8.1s' },
  { top: '29%', left: '11%', size: 4, delay: '2.5s', duration: '6.7s' },
  { top: '42%', left: '7%', size: 4, delay: '0.9s', duration: '8.9s' },
  { top: '58%', left: '10%', size: 5, delay: '1.7s', duration: '7.2s' },
  { top: '74%', left: '5%', size: 4, delay: '2.7s', duration: '8.6s' },
  { top: '13%', left: '88%', size: 4, delay: '0.4s', duration: '7.8s' },
  { top: '27%', left: '94%', size: 3, delay: '1.2s', duration: '8.4s' },
  { top: '44%', left: '91%', size: 5, delay: '2.1s', duration: '6.8s' },
  { top: '63%', left: '95%', size: 4, delay: '0.7s', duration: '9s' },
  { top: '79%', left: '89%', size: 3, delay: '1.6s', duration: '8.1s' },
  { top: '22%', left: '22%', size: 3, delay: '2.2s', duration: '8.3s' },
  { top: '38%', left: '34%', size: 4, delay: '1.3s', duration: '7.7s' },
  { top: '19%', left: '62%', size: 3, delay: '2.8s', duration: '9.2s' },
  { top: '53%', left: '71%', size: 5, delay: '0.2s', duration: '7.5s' },
  { top: '72%', left: '57%', size: 4, delay: '2.0s', duration: '8.7s' },
];

const initialRegistrationState = {
  full_name: '',
  email: '',
  phone: '',
  company_name: '',
  designation: '',
  country: '',
  city: '',
  message: '',
};

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
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState(initialRegistrationState);
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState('');
  const [isSubmittingRegistration, setIsSubmittingRegistration] = useState(false);

  const openRegistrationModal = () => {
    setRegistrationError('');
    setRegistrationSuccess('');
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
    setRegistrationError('');
    setRegistrationSuccess('');
  };

  const updateRegistrationField = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prev) => ({ ...prev, [name]: value }));
  };

  const submitRegistrationForm = async (event) => {
    event.preventDefault();

    setRegistrationError('');
    setRegistrationSuccess('');

    const values = Object.values(registrationData).map((value) => value.trim());
    if (values.some((value) => !value)) {
      setRegistrationError('All fields are mandatory.');
      return;
    }

    setIsSubmittingRegistration(true);
    try {
      await submitRegistration({
        full_name: registrationData.full_name.trim(),
        email: registrationData.email.trim(),
        phone: registrationData.phone.trim(),
        company_name: registrationData.company_name.trim(),
        designation: registrationData.designation.trim(),
        country: registrationData.country.trim(),
        city: registrationData.city.trim(),
        message: registrationData.message.trim(),
      });

      setRegistrationSuccess('Registration submitted successfully. Our team will contact you soon.');
      setRegistrationData(initialRegistrationState);
    } catch (error) {
      setRegistrationError(error.message || 'Failed to submit registration.');
    } finally {
      setIsSubmittingRegistration(false);
    }
  };
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
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3"
      className="w-full h-full object-cover"
      alt="Ship"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/40 via-[#0a3f67]/70 to-[#020c1b]/95"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-5xl">

    {/* Date Badge */}
    <div className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm md:text-lg font-bold rounded-full shadow-lg tracking-widest">
      24 APRIL 2026 | LEMON TREE HOTEL, TRIVANDRUM
    </div>

    {/* Title */}
    <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight mb-6">
      MARPORTS
      <span className="block text-cyan-400">GLOBAL</span>
    </h1>

    {/* Subtitle */}
    <p className="text-xl md:text-2xl text-gray-200 mb-4">
      Conference & Excellence Awards 2026
    </p>

    {/* Description */}
    <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto mb-10">
      A premier international platform uniting maritime leaders, shipowners,
      port developers, terminal operators, ship designers, digitalization experts,
      and policymakers worldwide.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <button
        type="button"
        onClick={openRegistrationModal}
        className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 transition"
      >
        REGISTER NOW 
      </button>

      <button type="button" onClick={() => setIsTeamModalOpen(true)} className="px-10 py-4 bg-white/10 text-white font-bold rounded-full text-lg border border-white/30 hover:bg-white/20 transition">
        BECOME A SPONSOR
      </button>

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
      {/* Key Promoting Organizations */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Key Promoting Organizations</h2>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
          <a href="https://www.shipindia.com/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
              <img src={sponsor} alt="Key Promoting Organization" className="object-contain w-full h-full p-2" />
            </div>
          </a>
        </div>
      </div>

      

      {/* Associate Partner */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Associate Partner</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="#https://ulccsltd.com" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
              <img src={so} alt="Associate Partner 1" className="object-contain w-full h-full p-2" />
            </div>
          </a>
          <a href="https://www.ieindia.org/webui/iei-home.aspx" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
              <img src={ass2} alt="Associate Partner 2" className="object-contain w-full h-full p-2" />
            </div>
          </a>
        </div>
      </div>

      {/* Supporting Organizations */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Supporting Organizations</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="https://www.asianshipowners.org/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
              <img src={promotingLogo} alt="Supporting Organization 1" className="object-contain w-full h-full p-2" />
            </div>
          </a>
          <a href="https://www.insa.in/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
              <img src={promo} alt="Supporting Organization 2" className="object-contain w-full h-full p-2" />
            </div>
          </a>
          <a href="https://www.shipyardsassociationofindia.com/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
              <img src={promot} alt="Supporting Organization 3" className="object-contain w-full h-full p-2" />
            </div>
          </a>
        </div>
      </div>

      {/* Knowledge Partner */}
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Knowledge Partner</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="https://www.irclass.org/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white shadow-lg overflow-hidden transition duration-300 hover:border-blue-700 hover:shadow-xl">
              <img src={knowledge} alt="Knowledge Partner" className="object-contain w-full h-full p-2" />
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
                  <button
                    type="button"
                    onClick={openRegistrationModal}
                    className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    REGISTER NOW
                  </button>
                </div>
         <div className="bg-blue-50 rounded-xl p-6 flex flex-col">
  <div className="flex items-center gap-3 mb-4">
    <Mail className="w-6 h-6 text-blue-600" />
    <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
  </div>
  <p className="text-gray-700 mb-4">For sponsorship inquiries and event information</p>
  <button
    type="button"
    onClick={() => setIsTeamModalOpen(true)} // Changed to trigger modal
    className="mt-auto mx-auto inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 border border-blue-600 transition-colors"
  >
    CONTACT TEAM
  </button>
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

      {isRegistrationModalOpen && (
        <div
          className="fixed inset-0 z-[220] flex items-center justify-center bg-black/60 p-4"
          onClick={closeRegistrationModal}
        >
          <div
            className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Register For MARPORTS GLOBAL 2026</h3>
                <p className="mt-1 text-gray-600">All fields are mandatory.</p>
              </div>
              <button
                type="button"
                onClick={closeRegistrationModal}
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close registration form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submitRegistrationForm} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Full Name</span>
                  <input
                    type="text"
                    name="full_name"
                    value={registrationData.full_name}
                    onChange={updateRegistrationField}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={registrationData.email}
                    onChange={updateRegistrationField}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    value={registrationData.phone}
                    onChange={updateRegistrationField}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Company Name</span>
                  <input
                    type="text"
                    name="company_name"
                    value={registrationData.company_name}
                    onChange={updateRegistrationField}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Designation</span>
                  <input
                    type="text"
                    name="designation"
                    value={registrationData.designation}
                    onChange={updateRegistrationField}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Country</span>
                  <input
                    type="text"
                    name="country"
                    value={registrationData.country}
                    onChange={updateRegistrationField}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">City</span>
                <input
                  type="text"
                  name="city"
                  value={registrationData.city}
                  onChange={updateRegistrationField}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">Message</span>
                <textarea
                  name="message"
                  value={registrationData.message}
                  onChange={updateRegistrationField}
                  className="min-h-[120px] w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </label>

              {registrationError && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  {registrationError}
                </div>
              )}

              {registrationSuccess && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                  {registrationSuccess}
                </div>
              )}

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeRegistrationModal}
                  className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingRegistration}
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmittingRegistration ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
      {/* 📧 Team Contact Modal */}
{isTeamModalOpen && (
  <div
    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
    onClick={() => setIsTeamModalOpen(false)}
  >
    <div
      className="w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-bold text-gray-900">Contact Team</h3>
        <button
          type="button"
          onClick={() => setIsTeamModalOpen(false)}
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <p className="mb-5 text-gray-700 leading-relaxed">
        For sponsorship opportunities, event speaking slots, or general inquiries, 
        please reach out to our event coordination team.
      </p>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-lg font-bold text-gray-900">Event Coordinator</p>
        <p className="mt-1 font-medium text-gray-800">MARPORTS GLOBAL 2026</p>
        <p className="mt-4 flex items-center gap-2 text-gray-700">
          <Mail className="h-4 w-4 text-blue-600" />
          <a href="mailto:jayadev@marportsglobal.com" className="hover:text-blue-700">
            jayadev@marportsglobal.com
          </a>
           <a href="mailto:jayadev@marportsglobal.com" className="hover:text-blue-700">
            +919633958465
          </a>
        </p>
      </div>

      <p className="mt-5 text-gray-700 leading-relaxed">
        Our team typically responds within 24 hours during business days.
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
