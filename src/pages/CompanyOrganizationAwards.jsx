// pages/CompanyOrganizationAwards.jsx
import React from 'react';
import { 
    Award, 
    Ship, 
    Users, 
    Building, 
    Cpu, 
    Globe, 
    ArrowRight, 
    ListChecks,
    // Fix: Added missing Lucide icons
    Star, 
    Zap, 
    Trophy 
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Replicating the AwardCategory component logic
const AwardCategory = ({ title, category, icon }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <div className="flex items-start gap-4 mb-4">
      <div className="p-3 rounded-full bg-blue-50 text-blue-600 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-1">
          {category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-snug">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const CompanyOrganizationAwards = () => {
  // Data for the 'Company & Organization Awards' section, extracted from Awards.jsx
  const navigate = useNavigate();  
  const companyAwards = [
    {
      title: "Company & Organization Awards",
      icon: <Building className="w-6 h-6" />,
      awards: [
        { title: "Shipowner of the Year", category: "Corporate Excellence", icon: <Ship className="w-5 h-5" /> },
        { title: "Shipping Line of the Year", category: "Corporate Excellence", icon: <Ship className="w-5 h-5" /> },
        { title: "Port Developer of the Year", category: "Infrastructure", icon: <Building className="w-5 h-5" /> },
        { title: "Emerging Port of the Year", category: "Infrastructure", icon: <Building className="w-5 h-5" /> },
        { title: "Ship Management Company of the Year", category: "Operations", icon: <Users className="w-5 h-5" /> },
        { title: "Ship Agency of the Year", category: "Operations", icon: <Users className="w-5 h-5" /> },
        { title: "Shipyard of the Year", category: "Manufacturing", icon: <Ship className="w-5 h-5" /> },
        { title: "Maritime AI Startup of the Year", category: "Innovation", icon: <Cpu className="w-5 h-5" /> },
        { title: "Best Classification Society of the Year", category: "Regulatory Excellence", icon: <Award className="w-5 h-5" /> },
        { title: "Best Maritime Association", category: "Industry Leadership", icon: <Users className="w-5 h-5" /> },
        { title: "Best Maritime Digital Media", category: "Communications", icon: <Globe className="w-5 h-5" /> },
        { title: "Best Service Provider – Maritime", category: "Services", icon: <Users className="w-5 h-5" /> },
        { title: "Best Maritime University", category: "Education", icon: <Award className="w-5 h-5" /> },
      ]
    },
    {
      title: "Individual & Leadership Awards",
      icon: <Users className="w-6 h-6" />,
      awards: [
        { title: "CEO of the Year", category: "Leadership", icon: <Users className="w-5 h-5" /> },
        { title: "Inspiring Women Leader- Maritime Sector of the year", category: "Diversity & Inclusion", icon: <Star className="w-5 h-5" /> },
        { title: "Young Entrepreneur of the Year – Maritime", category: "Entrepreneurship", icon: <Zap className="w-5 h-5" /> },
        { title: "Best Maritime Personality", category: "Industry Recognition", icon: <Star className="w-5 h-5" /> },
      ]
    },
    {
      title: "Excellence & Achievement Awards",
      icon: <Trophy className="w-6 h-6" />,
      awards: [
        { title: "Excellence in Port Strategy", category: "Strategic Planning", icon: <Building className="w-5 h-5" /> },
        { title: "Excellence in Public Sector Leadership", category: "Government", icon: <Users className="w-5 h-5" /> },
        { title: "Excellence in Port Development", category: "Infrastructure", icon: <Building className="w-5 h-5" /> },
        { title: "Excellence in Legal Maritime Affairs", category: "Legal Excellence", icon: <Award className="w-5 h-5" /> },
        { title: "Excellence in Green Shipping Initiative", category: "Sustainability", icon: <Zap className="w-5 h-5" /> },
        { title: "Best CSR Initiative in Maritime Sector", category: "Corporate Responsibility", icon: <Star className="w-5 h-5" /> },
        { title: "Excellence in Maritime Services", category: "Service Excellence", icon: <Users className="w-5 h-5" /> },
        { title: "Best Employer of the Year", category: "Workplace Excellence", icon: <Users className="w-5 h-5" /> },
        { title: "Outstanding Contribution to the Global Maritime Industry", category: "Industry Impact", icon: <Globe className="w-5 h-5" /> },
      ]
    },
    {
      title: "Lifetime Achievement Awards",
      icon: <Award className="w-6 h-6" />,
      awards: [
        { title: "Lifetime Achievement Award – Maritime Services", category: "Career Excellence", icon: <Award className="w-5 h-5" /> },
        { title: "Lifetime Achievement Award – Entrepreneurship", category: "Entrepreneurial Legacy", icon: <Zap className="w-5 h-5" /> },
        { title: "Lifetime Achievement Award – Ship Design and Technology", category: "Technical Innovation", icon: <Ship className="w-5 h-5" /> },
        { title: "Lifetime Achievement Award – Port Management", category: "Port Leadership", icon: <Building className="w-5 h-5" /> },
      ]
    }
  ];

  // Solution: Flatten the nested 'awards' array to get a list of all individual awards
  const allIndividualAwards = companyAwards.flatMap(group => 
    group.awards.map(award => ({
        ...award,
        // Optionally add the main group title/icon if needed for display later
        groupTitle: group.title 
    }))
  );


  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-blue-600 text-white">
              <Building className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
               <span className="text-blue-600">Awards Categories</span>
            </h1>
          </div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Recognizing the **corporate excellence, infrastructure development, and operational prowess** of leading companies and institutions in the global maritime sector.
          </p>
        </div>
        
        {/* New Section Title for Categories */}
        <div className="mb-10">
            <div className="flex items-center justify-center gap-3 text-gray-900">
                <ListChecks className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold border-b-2 border-blue-600/50 pb-1">
                    Official Award Categories
                </h2>
            </div>
            <p className="text-center text-gray-500 mt-2">
                Explore the categories available for nomination within this section.
            </p>
        </div>
        
        {/* Awards Grid: Using the flattened list (allIndividualAwards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allIndividualAwards.map((award, idx) => (
            <AwardCategory key={idx} {...award} />
          ))}
        </div>
        
        {/* Call to Action - Consistent with Awards.jsx style */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

  <div className="text-center sm:text-left cursor-pointer transition-all duration-300 group-hover:translate-x-1">
    <h3 className="text-2xl font-bold text-white mb-2">
      Ready to Submit Your Nomination?
    </h3>
    <p className="text-lg text-blue-100">
      Take this opportunity to showcase excellence. Submit your nominations for these prestigious award categories before the deadline.
    </p>
  </div>

 <div className="flex-shrink-0">
  <button
    type="button"
    onClick={() => navigate("/awards/winners")}
    className="group px-6 py-3 bg-white text-blue-700 font-bold rounded-xl text-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
  >
    <span className="flex items-center gap-2">
      NOMINATION PORTAL
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </span>
  </button>
</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyOrganizationAwards;