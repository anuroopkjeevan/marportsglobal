import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ChevronRight, UserPlus, Mic, Calendar, Building, Award, Code, ChevronDown, Info } from 'lucide-react';
import MarportsLogo from '../assets/MARPORT_GLOBAL_Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State for mobile dropdowns (remaining dropdowns)
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);
  const [isConferenceTopicsOpen, setIsConferenceTopicsOpen] = useState(false);

  const toggleDropdown = (name) => {
    if (name === "Awards") {
      setIsAwardsOpen(!isAwardsOpen);
      setIsConferenceTopicsOpen(false);
    } else if (name === "Conference Topics") {
      setIsConferenceTopicsOpen(!isConferenceTopicsOpen);
      setIsAwardsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", to: "/", icon: <Mic className="w-5 h-5" /> },
    { name: "About", to: "/about", icon: <Info className="w-5 h-5" /> }, // SINGLE LINK
    { 
      name: "Conference Topics", 
      icon: <Calendar className="w-5 h-5" />,
      // Main link path for the Conference Topics page
      to: "/conference-topics",
      subLinks: [
        { name: "Speakers And Panelists", to: "/conference-topics/speakers" },
        { name: "Agenda", to: "/conference-topics/agenda" },
        { name: "Advisory Board", to: "/conference-topics/advisory-board" },
      ]
    },
    { 
      name: "Awards", 
      icon: <Award className="w-5 h-5" />,
      subLinks: [
        { name: "Award Categories", to: "/awards/categories" },
        { name: "Rules and Regulations", to: "/awards/rules" },
        { name: "Winners", to: "/awards/winners" },
      ]
    },
    { name: "Gallery", to: "/gallery", icon: <Code className="w-5 h-5" /> }, 
    { name: "Events & News", to: "/events-news", icon: <Building className="w-5 h-5" /> },
  ];
  
  const NavLink = ({ to, children }) => (
    <Link 
      to={to} 
      className="text-gray-900 hover:text-blue-600 transition-colors duration-300 text-lg font-medium relative group py-2 flex items-center gap-1"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );

  const getOpenState = (name) => {
    if (name === "Awards") return isAwardsOpen;
    if (name === "Conference Topics") return isConferenceTopicsOpen;
    return false;
  }

  return (
    <header className="bg-white sticky top-0 z-[100] shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"> 
                  <img src={MarportsLogo} alt="Logo" className="w-full h-full object-contain" />
              </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <div className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors duration-300 text-lg font-medium cursor-pointer py-2">
                    {/* Make the main link clickable to the conference topics page */}
                    {link.to ? (
                      <Link to={link.to} className="hover:text-blue-600">
                        {link.name}
                      </Link>
                    ) : (
                      <span>{link.name}</span>
                    )}
                    <ChevronDown size={18} className="group-hover:rotate-180 transition-transform duration-300" />
                    
                    <div className="absolute top-full left-0 hidden group-hover:block w-56 pt-2">
                      <div className="bg-white border border-gray-100 shadow-xl rounded-xl py-2 overflow-hidden">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.to}
                            className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink to={link.to}>{link.name}</NavLink>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.ehub.events/event/marport-global-conference-and-awards-2025/13#register"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg text-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 whitespace-nowrap"
            >
              <UserPlus size={20} />
              REGISTER NOW
              <ChevronRight size={20} />
            </a>
          </div>

          <button className="lg:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className="text-blue-600" /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
            <div className="flex flex-col space-y-1 px-4 py-2">
              {navLinks.map((link) => {
                const isOpen = getOpenState(link.name);

                return (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        {/* Main link for mobile - clickable to the conference topics page */}
                        {link.to ? (
                          <Link 
                            to={link.to} 
                            className="flex-1 py-3 px-3 hover:bg-gray-100 rounded-lg transition-colors text-lg font-medium flex items-center gap-4 text-gray-800"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="text-blue-600">{link.icon}</span>
                            {link.name}
                          </Link>
                        ) : (
                          <span className="flex-1 py-3 px-3 text-lg font-medium flex items-center gap-4 text-gray-800">
                            <span className="text-blue-600">{link.icon}</span>
                            {link.name}
                          </span>
                        )}
                        <button onClick={() => toggleDropdown(link.name)} className="p-3 hover:bg-gray-100 rounded-lg">
                          <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                        </button>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="ml-12 flex flex-col space-y-1 pb-2">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.to}
                              className="py-2 text-gray-600 font-medium hover:text-blue-600 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link to={link.to} className="py-3 px-3 hover:bg-gray-100 rounded-lg transition-colors text-lg font-medium flex items-center gap-4 text-gray-800" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-blue-600">{link.icon}</span> 
                      {link.name}
                    </Link>
                  )}
                </div>
              )})}
              
              <a
                href="https://www.ehub.events/event/marport-global-conference-and-awards-2025/13#register"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus size={20} />
                REGISTER NOW
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
