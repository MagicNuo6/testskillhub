/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HotList from './pages/HotList';
import Discovery from './pages/Discovery';
import SkillDetail from './pages/SkillDetail';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hot" element={<HotList />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/skill/:id" element={<SkillDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

