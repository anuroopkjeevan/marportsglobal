import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Anchor, ShieldCheck, Check } from 'lucide-react';
import { loginCms } from '../auth/session';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await loginCms(email, password);
      navigate('/cms');
    } catch (authError) {
      setError(authError.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Background: Deep Navy Ocean Gradient 
       Replaces the 'one-sided blue' with a balanced, full-screen professional atmosphere.
    */
    <div className="min-h-screen w-full bg-[#001E3C] bg-gradient-to-br from-[#001E3C] via-[#001529] to-[#000814] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Subtle Background Watermark: Centered Anchor */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Anchor size={800} className="text-white" />
      </div>
      
      {/* Centered Login Card */}
      <div className="w-full max-w-[460px] bg-white rounded-[40px] p-10 md:p-14 relative z-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/10 active:scale-[0.99] transition-transform">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-20 h-20 bg-[#001E3C] rounded-3xl flex items-center justify-center shadow-2xl mb-6 ring-8 ring-blue-50/50">
            <Anchor size={36} className="text-blue-400" />
          </div>
          
          <div className="bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
            <span className="text-[10px] font-black text-blue-700 tracking-[0.2em] uppercase">Authorized Access Only</span>
          </div>
          
          <h1 className="text-3xl font-black text-[#001E3C] mb-1 tracking-tighter uppercase">
            MARPORTS <span className="text-blue-600">CMS</span>
          </h1>
          <p className="text-slate-400 text-sm font-medium">Global Administrative Gateway</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          
          {/* Email / Username Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Username or Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@marportsglobal.com"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent outline-none transition-all font-medium"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
              <button type="button" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors">Forgot?</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-12 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent outline-none transition-all font-medium"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-blue-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Actions: Remember Me & Security Status */}
          <div className="flex items-center justify-between py-2 px-1">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-lg checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer" />
                <Check size={14} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
              </div>
              <span className="text-xs text-slate-500 font-bold group-hover:text-slate-700 transition-colors">Stay logged in</span>
            </label>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <ShieldCheck size={14} className="text-blue-500" />
              Staff Secure
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#001E3C] hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.97] uppercase text-xs tracking-[0.2em]"
          >
            {loading ? 'Checking Access...' : 'Access Dashboard'} {!loading && <ArrowRight size={18} />}
          </button>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
              {error}
            </div>
          )}
        </form>

        {/* Footer Security Notice */}
        <div className="mt-10 pt-8 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <p className="text-[9px] text-slate-400 leading-relaxed text-center font-bold uppercase tracking-tight">
              NOTE: Only users with Django <span className="text-blue-600 underline">is_staff=True</span> can access the CMS. All login attempts are encrypted and logged.
            </p>
          </div>
        </div>
      </div>

      {/* Corporate Copyright */}
      <div className="absolute bottom-8 text-[10px] font-black text-slate-500/50 tracking-[0.4em] uppercase text-center w-full">
        © 2026 Marports Global • Technology & Infrastructure Division
      </div>
    </div>
  );
};

export default Login;
