import React, { useEffect, useMemo, useState } from 'react';
import { Users, Globe, UserCheck, Calendar } from 'lucide-react';
import { fetchCmsDashboard } from '../auth/session';
import { getCmsPageById } from './pageRegistry';

const POLL_MS = 10000;

const formatRelativeTime = (iso) => {
  if (!iso) return 'just now';
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffSec = Math.max(Math.floor((now - then) / 1000), 0);
  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}h ago`;
  const diffDay = Math.floor(diffHour / 24);
  return `${diffDay}d ago`;
};

const Dashboard = () => {
  const [data, setData] = useState({
    stats: {
      managedPages: 0,
      updatedLast24h: 0,
      staffUsers: 0,
      daysToEvent: 0,
    },
    recentPages: [],
    serverTime: null,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const payload = await fetchCmsDashboard();
        if (!alive) return;
        setData(payload);
        setError('');
      } catch (loadError) {
        if (!alive) return;
        setError(loadError.message || 'Failed to refresh dashboard');
      }
    };

    load();
    const timer = setInterval(load, POLL_MS);
    return () => {
      alive = false;
      clearInterval(timer);
    };
  }, []);

  const stats = useMemo(
    () => [
      { label: 'Managed Pages', value: String(data.stats.managedPages), icon: <Globe />, color: 'text-blue-600' },
      { label: 'Updated (24h)', value: String(data.stats.updatedLast24h), icon: <UserCheck />, color: 'text-green-600' },
      { label: 'CMS Staff Users', value: String(data.stats.staffUsers), icon: <Users />, color: 'text-amber-600' },
      { label: 'Days to Event', value: String(data.stats.daysToEvent), icon: <Calendar />, color: 'text-slate-600' },
    ],
    [data.stats],
  );

  return (
    <div className="p-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-[#001E3C]">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">
          Live CMS statistics refreshed every 10 seconds.
          {data.serverTime ? ` Last sync: ${new Date(data.serverTime).toLocaleTimeString()}` : ''}
        </p>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className={`${s.color} mb-4`}>{s.icon}</div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
            <h3 className="text-4xl font-bold text-slate-900 mt-1">{s.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-sm font-bold uppercase tracking-wider">Recent Page Updates</h2>
        </div>
        <div className="p-0">
          {data.recentPages.length === 0 && (
            <div className="p-4 text-sm text-slate-500">No page updates yet.</div>
          )}
          {data.recentPages.map((row) => {
            const page = getCmsPageById(row.page_id);
            return (
              <div key={row.page_id} className="flex justify-between p-4 border-b border-slate-50 hover:bg-slate-50 text-sm">
                <span className="font-mono text-blue-600">{page?.path || row.page_id}</span>
                <span className="font-bold text-slate-700">{formatRelativeTime(row.updatedAt)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
