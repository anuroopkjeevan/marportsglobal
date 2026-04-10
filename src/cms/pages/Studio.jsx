import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, ChevronLeft, Monitor, Check, ExternalLink, RotateCcw } from 'lucide-react';
import { getCmsPageById } from './pageRegistry';
import { clearCmsPageContent, fetchCmsPageContent, getCmsPageContent, updateCmsPageContent } from '../content/storage';
import { CMS_API_BASE } from '../config/apiBase';
import { StudioProvider, useStudio } from '../studio/components/StudioContext';
import SidePanel from '../studio/components/SidePanel';
import Preview from '../studio/components/Preview';

const StudioShell = ({ selectedPage, onSave, onReset, saved }) => {
  const { content } = useStudio();

  return (
    <div className="h-screen flex bg-[#090c18] text-slate-100">
      <aside className="w-[340px] border-r border-slate-800/70 bg-gradient-to-b from-[#0d1224] to-[#080b16] p-5 overflow-y-auto">
        <div className="mb-5 flex items-center justify-between">
          <button onClick={onReset.back} className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-800">
            <ChevronLeft size={14} />
            Exit
          </button>
          <button onClick={() => onSave(content)} className={`${saved ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-500'} inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors`}>
            {saved ? <Check size={14} /> : <Save size={14} />}
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>

        <div className="mb-4 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">Studio</p>
          <h1 className="mt-2 text-sm font-semibold leading-5 text-slate-100">{selectedPage.name}</h1>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <a href={selectedPage.path} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-200 hover:bg-slate-800">
            Open Live
            <ExternalLink size={13} />
          </a>
          <button onClick={onReset.reset} className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-200 hover:bg-slate-800">
            <RotateCcw size={13} />
            Reset
          </button>
        </div>

        <SidePanel pageName={selectedPage.name} />
      </aside>

      <main className="flex-1 overflow-auto bg-[radial-gradient(circle_at_center,_#18203d_0%,_#0b1022_45%,_#070a14_100%)] p-8 md:p-10">
        <div className="mx-auto h-full w-full max-w-6xl rounded-3xl border border-slate-700/60 bg-[#0a1020]/70 shadow-[0_28px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <div className="flex h-11 items-center border-b border-slate-700/60 px-4 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300">
            <Monitor size={13} className="mr-2" />
            Live Preview Canvas
          </div>
          <div className="h-[calc(100%-44px)] overflow-auto p-4">
            <div className="mx-auto h-full w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700/60 bg-white shadow-[0_28px_65px_rgba(0,0,0,0.45)]">
              <Preview pagePath={selectedPage.path} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Studio = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const selectedPage = useMemo(() => getCmsPageById(pageId), [pageId]);
  const [saved, setSaved] = useState(false);
  const [initialContent, setInitialContent] = useState({});

  React.useEffect(() => {
    if (!selectedPage) return;
    const load = async () => {
      await fetchCmsPageContent(selectedPage.id);
      const current = getCmsPageContent(selectedPage.id);
      setInitialContent(current || {});
    };
    load();
  }, [selectedPage]);

  const handleSave = async (content) => {
    if (!selectedPage) return;
    await updateCmsPageContent(selectedPage.id, content);
    try {
      await fetch(`${CMS_API_BASE}/api/page-content/${selectedPage.id}/`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });
    } catch (error) {
      // Fallback is already persisted via storage API.
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleReset = async () => {
    if (!selectedPage) return;
    await clearCmsPageContent(selectedPage.id);
    setInitialContent({});
  };

  if (!selectedPage) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold text-[#001E3C]">Page not found in CMS registry</h1>
        <button onClick={() => navigate('/cms/pages')} className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">
          Back to Page Manager
        </button>
      </div>
    );
  }

  return (
    <StudioProvider initialContent={initialContent} onContentChange={() => setSaved(false)}>
      <StudioShell
        selectedPage={selectedPage}
        saved={saved}
        onSave={handleSave}
        onReset={{ back: () => navigate('/cms/pages'), reset: handleReset }}
      />
    </StudioProvider>
  );
};

export default Studio;
