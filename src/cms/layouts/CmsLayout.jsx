import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Globe, Settings, LogOut, Anchor, Bell, Search, ClipboardList } from 'lucide-react';
import { fetchCmsSession, logoutCms } from '../auth/session';

const CmsLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [sessionUser, setSessionUser] = useState(null);
  const menu = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20}/>, path: '/cms' },
    { name: 'Website Pages', icon: <Globe size={20}/>, path: '/cms/pages' },
    { name: 'Registrations', icon: <ClipboardList size={20}/>, path: '/cms/registrations' },
    { name: 'Settings', icon: <Settings size={20}/>, path: '/cms/settings' },
  ];

  useEffect(() => {
    let isMounted = true;

    const validate = async () => {
      try {
        const payload = await fetchCmsSession();
        if (!isMounted) return;
        setSessionUser(payload.user || null);
      } catch (error) {
        if (!isMounted) return;
        navigate('/cms/login');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    validate();
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logoutCms();
    } catch (error) {
      // Ignore logout errors and continue redirect.
    } finally {
      navigate('/cms/login');
    }
  };

  if (loading) {
    return <div className="min-h-screen grid place-items-center text-slate-600 font-semibold">Checking CMS session...</div>;
  }

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#001E3C] text-white flex flex-col shadow-2xl">
        <div className="p-8 border-b border-blue-900/40 flex items-center gap-3">
          <Anchor className="text-blue-400" size={28} />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight">MARPORTS</span>
            <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Global CMS</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 mt-4">
          {menu.map((item) => (
            <NavLink key={item.name} to={item.path} className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${isActive ? 'bg-blue-600 text-white' : 'text-blue-100/60 hover:bg-blue-800 hover:text-white'}`}>
              {item.icon} {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="p-6 border-t border-blue-900/40">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all text-sm font-bold">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN VIEW */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Search system..." className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex items-center gap-6">
            <Bell size={20} className="text-slate-400" />
            <div className="flex items-center gap-3 pl-6 border-l">
              <div className="text-right">
                <p className="text-sm font-bold">{sessionUser?.username || 'ADMIN'}</p>
                <p className="text-[10px] text-blue-600 font-bold uppercase">System Admin</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg border border-blue-200 flex items-center justify-center text-blue-700 font-bold">
                {(sessionUser?.username || 'A').slice(0, 1).toUpperCase()}
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CmsLayout;
