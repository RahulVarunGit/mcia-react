


import Navbar from './Navbar';
import Home from './javascript/Home';
import About from './javascript/about';
import NewsLetter from './javascript/newsLetter';
import Board from './javascript/board';
import Committee from './javascript/committee';
import Report from './javascript/report';
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
import DEMO from './javascript/demo';
import STEAM from './javascript/steam';
import YICU2016 from './javascript/YICU/yicu2016';
import YICU2017 from './javascript/YICU/yicu2017';
import YICU2018 from './javascript/YICU/yicu2018';
import YICU2019 from './javascript/YICU/yicu2019';
import YICU2020 from './javascript/YICU/yicu2020';
import YICU2021 from './javascript/YICU/yicu2021';
import YICU2022 from './javascript/YICU/yicu2022';
import YICU2023 from './javascript/YICU/yicu2023';
import YICU2024 from './javascript/YICU/yicu2024';
import YGC2016 from './javascript/YGC/ygc2016';
import YGC2017 from './javascript/YGC/ygc2017';
import YGC2018 from './javascript/YGC/ygc2018';
import YGC2019 from './javascript/YGC/ygc2019';
import YGC2020 from './javascript/YGC/ygc2020';
import YGC2021 from './javascript/YGC/ygc2021';
import YGC2022 from './javascript/YGC/ygc2022';
import YGC2023 from './javascript/YGC/ygc2023';
import YGC2024 from './javascript/YGC/ygc2024';
import YGC2025 from './javascript/YGC/ygc2025';
import YGC2026 from './javascript/YGC/ygc2026';
import YGC2027 from './javascript/YGC/ygc2027';
import Flyers from './javascript/flyers';
import Flyer from './javascript/flyer';
import ProjectsNew from './javascript/projectsNew';
import Project from './javascript/project';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsLetter" element={<NewsLetter />} />
            <Route path="/board" element={<Board />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/report" element={<Report />} />
            <Route path="/kitefest" element={<KiteFest />} />
            <Route path="/yicu" element={<YICU />} />
            <Route path="/ygc" element={<YGC />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/grant" element={<Grant />} />
            <Route path="/maya-book-project" element={<MayaBookProject />} />
            <Route path="/nirmaan" element={<Nirmaan />} />
            <Route path="/safe-passage" element={<SafePassage />} />
            <Route path="/yabal" element={<Yabal />} />
            <Route path="/el-porvenir" element={<ElPorvenir />} />
            <Route path="/ihf" element={<IHF />} />
            <Route path="/kyc" element={<KYC />} />
            <Route path="/demo" element={<DEMO />} />
            <Route path="/steam" element={<STEAM />} />
            <Route path="/yicu2016" element={<YICU2016 />} />
            <Route path="/yicu2017" element={<YICU2017 />} />
            <Route path="/yicu2018" element={<YICU2018 />} />
            <Route path="/yicu2019" element={<YICU2019 />} />
            <Route path="/yicu2020" element={<YICU2020 />} />
            <Route path="/yicu2021" element={<YICU2021 />} />
            <Route path="/yicu2022" element={<YICU2022 />} />
            <Route path="/yicu2023" element={<YICU2023 />} />
            <Route path="/yicu2024" element={<YICU2024 />} />
            <Route path="/ygc2016" element={<YGC2016 />} />
            <Route path="/ygc2017" element={<YGC2017 />} />
            <Route path="/ygc2018" element={<YGC2018 />} />
            <Route path="/ygc2019" element={<YGC2019 />} />
            <Route path="/ygc2020" element={<YGC2020 />} />
            <Route path="/ygc2021" element={<YGC2021 />} />
            <Route path="/ygc2022" element={<YGC2022 />} />
            <Route path="/ygc2023" element={<YGC2023 />} />
            <Route path="/ygc2024" element={<YGC2024 />} />
            <Route path="/ygc2025" element={<YGC2025 />} />
            <Route path="/ygc2026" element={<YGC2026 />} />
            <Route path="/ygc2027" element={<YGC2027 />} />
            <Route path="/flyers" element={<Flyers />} />
            <Route path="/flyer/:name" element={<Flyer />} />
            <Route path="/projectsNew" element={<ProjectsNew />} />
            <Route path="/project/:name" element={<Project />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
