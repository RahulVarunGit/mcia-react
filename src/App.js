

import Navbar from './Navbar';
import Home from './javascript/Home';
import About from './javascript/about';
import YICU from './javascript/YICU';
import YGC from './javascript/YGC';
import KiteFest from './javascript/KiteFest';
import NotFoundPage from './javascript/NotFoundPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
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
            <Route path="/*" element={<NotFoundPage/>} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
