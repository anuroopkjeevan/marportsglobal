import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Page Components
import Home from './pages/Home';
import AboutPage from './pages/About'; // <--- ADD THIS IMPORT
import ConferenceTopics from './pages/panel';
import Gallery from './pages/Gallery';
import EventsAndNews from './pages/EventsAndNews';

import ExcellenceAwardsDemo from './pages/ExcellenceAwardsDemo';
import CompanyOrganizationAwards from './pages/CompanyOrganizationAwards';
import IndividualLeadershipAwards from './pages/IndividualLeadershipAwards';
import Speakers from './pages/Speakers';
import Agenda from './pages/Agenda'
import AdvisoryBoard from './pages/AdvisoryBoard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* 🚩 NEW ABOUT ROUTE */}
            <Route path="/about" element={<AboutPage />} /> 

            <Route path="/conference-topics" element={<ConferenceTopics />} />
            
            {/* Conference Topics Sub-pages */}
            <Route path="/conference-topics/speakers" element={<Speakers />} />
            <Route path="/conference-topics/agenda" element={<Agenda />} />
            <Route path="/conference-topics/advisory-board" element={<AdvisoryBoard />} /> 

            {/* Awards Pages */}
            <Route path="/awards/categories" element={<CompanyOrganizationAwards />} />
            <Route path="/awards/nomination" element={<IndividualLeadershipAwards />} />
            <Route path="/awards/rules" element={<ExcellenceAwardsDemo />} />
            <Route path="/awards/winners" element={<ExcellenceAwardsDemo />} />
            
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events-news" element={<EventsAndNews />} />

            {/* FALLBACK ROUTE */}
            <Route path="*" element={<Home />} /> 
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
