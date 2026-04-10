import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight, CheckCircle, Home, Info, Calendar, Award, Image, Newspaper, Users, Clock, Shield, Trophy, Star, Building, User } from 'lucide-react';

const PageManager = () => {
  const navigate = useNavigate();
  
  const pages = [
    { 
      id: 'home', 
      name: 'Home Landing Page', 
      desc: 'Manage Hero, Stats, and Call-to-actions',
      icon: <Home size={28} />
    },
    { 
      id: 'about', 
      name: 'About Conference', 
      desc: 'Edit the 2026 Event description and mission',
      icon: <Info size={28} />
    },
    { 
      id: 'conference-topics', 
      name: 'Conference Topics Main', 
      desc: 'Manage panel discussion topics and main content',
      icon: <Calendar size={28} />
    },
    { 
      id: 'speakers', 
      name: 'Speakers & Panelists', 
      desc: 'Add or remove headshots and biographies',
      icon: <Users size={28} />
    },
    { 
      id: 'agenda', 
      name: 'Conference Agenda', 
      desc: 'Manage schedule, timings, and sessions',
      icon: <Clock size={28} />
    },
    { 
      id: 'advisory-board', 
      name: 'Advisory Board', 
      desc: 'Update board members and their profiles',
      icon: <Shield size={28} />
    },
    { 
      id: 'awards-categories', 
      name: 'Company & Organization Awards', 
      desc: 'Manage company/org award categories and details',
      icon: <Building size={28} />
    },
    { 
      id: 'awards-nomination', 
      name: 'Individual Leadership Awards', 
      desc: 'Manage individual award categories and nominations',
      icon: <User size={28} />
    },
    { 
      id: 'awards-rules', 
      name: 'Awards Rules & Regulations', 
      desc: 'Update award rules, criteria, and guidelines',
      icon: <FileText size={28} />
    },
    { 
      id: 'awards-winners', 
      name: 'Awards Winners', 
      desc: 'Showcase past and present award winners',
      icon: <Trophy size={28} />
    },
    { 
      id: 'gallery', 
      name: 'Gallery', 
      desc: 'Manage photos and media from events',
      icon: <Image size={28} />
    },
    { 
      id: 'events-news', 
      name: 'Events & News', 
      desc: 'Update announcements, news articles, and upcoming events',
      icon: <Newspaper size={28} />
    }
  ];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-[#001E3C] mb-8 uppercase tracking-tight">
        Website Page Manager ({pages.length} Pages)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pages.map(page => (
          <div key={page.id} className="bg-white border-2 border-slate-100 rounded-[24px] p-8 hover:border-blue-500 transition-all shadow-sm group">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all text-slate-400">
              {page.icon}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={14} className="text-green-500" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Live</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{page.name}</h3>
            <p className="text-sm text-slate-500 mt-2 mb-8 leading-relaxed">{page.desc}</p>
            <button 
              onClick={() => navigate(`/cms/studio/${page.id}`)} 
              className="w-full flex items-center justify-center gap-2 bg-[#001E3C] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all text-xs uppercase tracking-widest"
            >
              Enter Live Studio <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageManager;