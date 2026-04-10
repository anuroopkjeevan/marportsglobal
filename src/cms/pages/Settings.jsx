import React from 'react';
import { User, Shield, Users, Globe, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white uppercase tracking-tighter">System <span className="text-indigo-500">Settings</span></h1>
        <p className="text-gray-400 mt-2 text-sm">Manage current admin profile, password, and admin users with manager assignment.</p>
      </div>

      <div className="flex gap-8">
        {/* Settings Sidebar */}
        <aside className="w-64 space-y-2">
          {[
            { id: 'profile', name: 'Admin Profile', icon: <User size={18}/>, active: true },
            { id: 'security', name: 'Security', icon: <Shield size={18}/> },
            { id: 'users', name: 'User Creation', icon: <Users size={18}/> },
            { id: 'config', name: 'System Config', icon: <Globe size={18}/> },
          ].map((item) => (
            <button 
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs tracking-widest uppercase transition-all ${
                item.active ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-800'
              }`}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </aside>

        {/* Settings Form */}
        <div className="flex-1 bg-[#161621] border border-gray-800 rounded-[24px] p-8">
          <h2 className="text-lg font-bold text-white uppercase tracking-widest mb-8 border-b border-gray-800 pb-4">Current Admin Profile</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">First Name</label>
              <input type="text" placeholder="First Name" className="w-full bg-[#0f0f17] border border-gray-800 rounded-xl p-3 text-white focus:ring-1 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
              <input type="text" placeholder="Last Name" className="w-full bg-[#0f0f17] border border-gray-800 rounded-xl p-3 text-white focus:ring-1 focus:ring-indigo-500 outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
              <input type="email" placeholder="Email" className="w-full bg-[#0f0f17] border border-gray-800 rounded-xl p-3 text-white focus:ring-1 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Role</label>
              <select className="w-full bg-[#0f0f17] border border-gray-800 rounded-xl p-3 text-white focus:ring-1 focus:ring-indigo-500 outline-none">
                <option>EDITOR</option>
                <option>ADMIN</option>
              </select>
            </div>
          </div>

          <button className="bg-white text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all uppercase text-xs tracking-widest">
            <Save size={16} /> Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;