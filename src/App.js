


import Navbar from './Navbar';
import Home from './javascript/Home';
import About from './javascript/about';
import Membership from './javascript/membership';
import Committee from './javascript/committee';
import Events from './javascript/events';
import Youth from './javascript/youth';
import Sponsors from './javascript/sponsors';

import Contact from './javascript/contact';
import NotFoundPage from './javascript/NotFoundPage';
import Flyers from './javascript/flyers';
import Flyer from './javascript/flyer';
import Badminton from './javascript/badminton';
import RepublicDay from './javascript/republicDay';




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;

  document.title = 'MCIA';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/events" element={<Events />} />
            <Route path="/youth" element={<Youth />} />
            <Route path="/sponsors" element={<Sponsors />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/flyers" element={<Flyers />} />
            <Route path="/flyer/:name" element={<Flyer />} />
            <Route path="/badminton" element={<Badminton />} />
            <Route path="/republic-day" element={<RepublicDay />} />

          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
