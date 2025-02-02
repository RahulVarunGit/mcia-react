


import Navbar from './Navbar';
import Footer from './Footer';
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
import Volleyball from './javascript/volleyball';
import Badminton from './javascript/badminton';
import Pickleball from './javascript/pickleball';
import RepublicDay from './javascript/republicDay';

import Gallery from './javascript/gallery';
import GalleryView from './javascript/galleryView';
import GalleryItem from './javascript/galleryItem';




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
            <Route path="/volleyball" element={<Volleyball />} />
            <Route path="/badminton" element={<Badminton />} />
            <Route path="/pickleball" element={<Pickleball />} />
            <Route path="/republic-day" element={<RepublicDay />} />

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/galleryView/:name" element={<GalleryView />} />
            <Route path="/galleryItem/:name" element={<GalleryItem />} />

          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
