import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut, ShieldCheck } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'DASHBOARD', icon: <LayoutDashboard size={18} />, path: '/cms' },
    { name: 'PAGE MANAGER', icon: <FileText size={18} />, path: '/cms/pages' },
    { name: 'SYSTEM SETTINGS', icon: <Settings size={18} />, path: '/cms/settings' },
  ];

  return (
    <aside className="w-72 h-screen bg-[#161621] border-r border-gray-800 flex flex-col sticky top-0">
      {/* Brand Logo */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)]">
          <ShieldCheck size={22} className="text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-black text-xl tracking-tighter text-white leading-none">
            ADVERRA <span className="text-indigo-500">HUB</span>
          </span>
          <span className="text-[9px] font-bold text-gray-500 tracking-[0.3em] mt-1 uppercase">Management</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 mt-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group
              ${isActive 
                ? 'bg-[#1e1e2d] text-indigo-400 border border-gray-700/50 shadow-lg' 
                : 'text-gray-500 hover:text-gray-200 hover:bg-[#1e1e2d]/50'}
            `}
          >
            <span className={({ isActive }) => isActive ? 'text-indigo-400' : 'group-hover:text-indigo-400 transition-colors'}>
              {item.icon}
            </span>
            <span className="text-[11px] font-black tracking-[0.15em] uppercase">
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Action */}
      <div className="p-6 mt-auto">
        <button className="w-full flex items-center gap-4 px-5 py-4 text-gray-600 hover:text-red-400 hover:bg-red-400/5 rounded-2xl transition-all group">
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[11px] font-black tracking-[0.15em] uppercase">Exit System</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;