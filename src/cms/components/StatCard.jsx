import React from 'react';

const StatCard = ({ label, value, icon, colorClass, borderClass }) => {
  return (
    <div className="bg-[#161621] border border-gray-800 rounded-[32px] p-8 relative overflow-hidden group transition-all hover:border-gray-700">
      {/* The Neon Accent Line at bottom */}
      <div className={`absolute bottom-0 left-10 right-10 h-[2px] border-b-2 ${borderClass} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
      
      <div className="flex justify-between items-start mb-8">
        <div className={`p-4 rounded-2xl bg-[#0f0f17] border border-gray-800 ${colorClass} shadow-inner`}>
          {icon}
        </div>
        
        {/* Decorative element for Adverra Look */}
        <div className="w-2 h-2 rounded-full bg-gray-800"></div>
      </div>

      <div className="space-y-1">
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.25em]">
          {label}
        </p>
        <h3 className="text-5xl font-black text-white tracking-tighter">
          {value}
        </h3>
      </div>
      
      {/* Subtle Background Glow */}
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 blur-[40px] opacity-10 rounded-full ${colorClass.replace('text', 'bg')}`}></div>
    </div>
  );
};

export default StatCard;