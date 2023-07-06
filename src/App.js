


import Navbar from './Navbar';
import Home from './javascript/Home';
import About from './javascript/about';
import YICU from './javascript/YICU';
import YGC from './javascript/YGC';
import Donate from './javascript/donate';
import Contact from './javascript/contact';
import Projects from './javascript/projects';
import KiteFest from './javascript/KiteFest';
import NotFoundPage from './javascript/NotFoundPage';
import Grant from './javascript/grant';
import MayaBookProject from './javascript/maya-book-project';
import Nirmaan from './javascript/nirmaan';
import SafePassage from './javascript/safe-passage';
import Yabal from './javascript/yabal';
import ElPorvenir from './javascript/el-porvenir';
import IHF from './javascript/IHF';
import KYC from './javascript/KYC';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;

  document.title = 'For Better Tomorrow';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/kitefest" element={<KiteFest/>}/>
            <Route path="/yicu" element={<YICU/>}/>
            <Route path="/ygc" element={<YGC/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/donate" element={<Donate/>}/>
            <Route path="/grant" element={<Grant/>}/>
            <Route path="/maya-book-project" element={<MayaBookProject/>}/>
            <Route path="/nirmaan" element={<Nirmaan/>}/>
            <Route path="/safe-passage" element={<SafePassage/>}/>
            <Route path="/yabal" element={<Yabal/>}/>
            <Route path="/el-porvenir" element={<ElPorvenir/>}/>
            <Route path="/ihf" element={<IHF/>}/>
            <Route path="/kyc" element={<KYC/>}/>
            <Route path="/*" element={<NotFoundPage/>} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
