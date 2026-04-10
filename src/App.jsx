import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Public Page Components
import Home from './pages/Home';
import AboutPage from './pages/About';
import ConferenceTopics from './pages/panel';
import Gallery from './pages/Gallery';
import EventsAndNews from './pages/EventsAndNews';
import ExcellenceAwardsDemo from './pages/ExcellenceAwardsDemo';
import CompanyOrganizationAwards from './pages/CompanyOrganizationAwards';
import IndividualLeadershipAwards from './pages/IndividualLeadershipAwards';
import Speakers from './pages/Speakers';
import Agenda from './pages/Agenda';
import AdvisoryBoard from './pages/AdvisoryBoard';

// --- CMS COMPONENTS ---
import Login from './cms/pages/Login';
import CmsLayout from './cms/layouts/CmsLayout';
import Dashboard from './cms/pages/Dashboard';
import PageManager from './cms/pages/PageManager';
import Studio from './cms/pages/Studio';
import Settings from './cms/pages/Settings';
import Registrations from './cms/pages/Registrations';
import CmsPageOverride from './cms/content/CmsPageOverride';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔒 CMS LOGIN (No Header/Footer) */}
        <Route path="/cms/login" element={<Login />} />

        {/* 🛠️ CMS PROTECTED AREA (Using CmsLayout Sidebar) */}
        <Route path="/cms" element={<CmsLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pages" element={<PageManager />} />
          <Route path="registrations" element={<Registrations />} />
          <Route path="studio/:pageId" element={<Studio />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 🌐 PUBLIC WEBSITE ROUTES (With Header & Footer) */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow" data-cms-edit-root="true">
                <Routes>
                  <Route path="/" element={<CmsPageOverride pageId="home"><Home /></CmsPageOverride>} />
                  <Route path="/about" element={<CmsPageOverride pageId="about"><AboutPage /></CmsPageOverride>} />
                  <Route path="/conference-topics" element={<CmsPageOverride pageId="conference-topics"><ConferenceTopics /></CmsPageOverride>} />
                  
                  {/* Conference Topics Sub-pages */}
                  <Route path="/conference-topics/speakers" element={<CmsPageOverride pageId="speakers"><Speakers /></CmsPageOverride>} />
                  <Route path="/conference-topics/agenda" element={<CmsPageOverride pageId="agenda"><Agenda /></CmsPageOverride>} />
                  <Route path="/conference-topics/advisory-board" element={<CmsPageOverride pageId="advisory-board"><AdvisoryBoard /></CmsPageOverride>} />

                  {/* Awards Pages */}
                  <Route path="/awards/categories" element={<CmsPageOverride pageId="awards-categories"><CompanyOrganizationAwards /></CmsPageOverride>} />
                  <Route path="/awards/nomination" element={<CmsPageOverride pageId="awards-nomination"><IndividualLeadershipAwards /></CmsPageOverride>} />
                  <Route path="/awards/rules" element={<CmsPageOverride pageId="awards-rules"><ExcellenceAwardsDemo /></CmsPageOverride>} />
                  <Route path="/awards/winners" element={<CmsPageOverride pageId="awards-winners"><ExcellenceAwardsDemo /></CmsPageOverride>} />

                  <Route path="/gallery" element={<CmsPageOverride pageId="gallery"><Gallery /></CmsPageOverride>} />
                  <Route path="/events-news" element={<CmsPageOverride pageId="events-news"><EventsAndNews /></CmsPageOverride>} />

                  {/* FALLBACK */}
                  <Route path="*" element={<CmsPageOverride pageId="home"><Home /></CmsPageOverride>} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
