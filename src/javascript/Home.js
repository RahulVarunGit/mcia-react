import { useState } from 'react';
import '../styles/Home.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projectData from '../data/projectData.json';
import parse from 'html-react-parser';

const Home = () => {
  const [name, setName] = useState('mario');

  const handleClick = (e) => {
    console.log('hello', 'hello', e);
    setName('luigi');
  }
  const handleClick2 = (name, e) => {
    console.log('hello ' + name);
    console.log('event:', e.target);
  }

  var bld = "";
  var cnt = 0;
  bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  bld = bld + "<div> <h4 className=\"center-align\"><b >Here are the global projects previously supported by For A Better Tomorrow:</b></h4>  </div>"
  bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  projectData.projects.map((project, index) => {
    if (project.type == "G") {
      if (cnt % 3 == 0) {
        bld = bld + "<div className=\"row\">";
      }
      bld = bld + "<div className=\"col-sm\">";
      bld = bld + "<p className=\"center-align\"><a href=\"/project/" + project.uriName + " \"><img src=\"/images/projects/" + project.logo + "\" alt=\"\" width=\"150\" height=\"150\" className=\"rounded\" /></a></p>"
      bld = bld + "<h4 className=\"center-align\"><a href=\"/project/" + project.uriName + " \"><b>" + project.name + "</b></a></h4>"
      bld = bld + "<h6 className=\"justify\">" + project.shortDesc + "</h6>";
      if (project.afs) {
        bld = bld + "<h5 classname=\"afs center-align\">Approved Financial Support : $" + project.afs + "</h5>";
      }

      bld = bld + "</div>";
      if (cnt % 3 == 2) {
        bld = bld + "</div>";
        bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
        bld = bld + "<p >&nbsp;&nbsp;</p>";
      }
      cnt++;
    }
  });

  if (cnt % 3 == 1) {
    bld = bld + "<div className=\"col-sm\"></div><div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  } else if (cnt % 3 == 2) {
    bld = bld + "<div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  }
  bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  bld = bld + "<div> <h4 className=\"center-align\"><b >Here are the local projects currently supported by For A Better Tomorrow:</b></h4>  </div>"
  bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  cnt = 0;

  projectData.projects.map((project, index) => {
    if (project.type == "L") {
      console.log(">>>" + project.name + "-" + cnt);
      if (cnt % 3 == 0) {
        bld = bld + "<div className=\"row\">";
      }
      bld = bld + "<div className=\"col-sm\">";
      bld = bld + "<p className=\"center-align\"><a href=\"/project/" + project.uriName + " \"><img src=\"/images/projects/" + project.logo + "\" alt=\"\" width=\"150\" height=\"150\" className=\"rounded\" /></a></p>"
      bld = bld + "<h4 className=\"center-align\"><a href=\"/project/" + project.uriName + " \"><b>" + project.name + "</b></a></h4>"
      bld = bld + "<h6 className=\"justify\">" + project.shortDesc + "</h6>";
      bld = bld + "</div>";
      if (cnt % 3 == 2) {
        bld = bld + "</div>";
        bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
        bld = bld + "<p >&nbsp;&nbsp;</p>";
      }
      cnt++;
    }
  });

  if (cnt % 3 == 1) {
    bld = bld + "<div className=\"col-sm\"></div><div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  } else if (cnt % 3 == 2) {
    bld = bld + "<div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  }

  return (

    <div className="container">

      <Carousel>
        <div>
          <img src="/images/carousel/c1.jpg" />
        </div>
        <div>
          <img src="/images/carousel/c2.jpg" />
        </div>
        <div>
          <img src="/images/carousel/c3.jpg" />
        </div>
        <div>
          <img src="/images/carousel/c4.jpg" />
        </div>
        <div>
          <img src="/images/carousel/c5.jpg" />
        </div>
        <div>
          <img src="/images/carousel/c6.jpg" />
        </div>
        <div>
          <img src="/images/carousel/c7.jpg" />
        </div>
      </Carousel>

      <div>

        <div>
          <h2 className="fbt-title"><img src="/images/homePage/Logo.jpg" alt="" width="40" height="40" className="rounded" />  for a <span className="fbt-title-sub">better</span> tomorrow </h2>
          <h2 className="fbt-tag-line">…Eliminating the gap between abundance and need</h2>
          <p >&nbsp;</p>
        </div>

        <h4 >For A Better Tomorrow (FBT) promotes social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders. FBT believes in hope and hope for a better tomorrow. FBT demonstrates in thought and action a firm commitment to social  justice and diversity.</h4>
      </div>

      <p >&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <h4 className="center-align"><a href="about/"><strong>Accountability</strong></a></h4>
          <h4 className="center-align"><a href="https://forbettertomorrow.org/about/" target="_self" aria-label="link to https://forbettertomorrow.org/about/"><i className="fa fa-check-circle"></i></a></h4>
        </div>

        <div className="col-sm">

          <h4 className="center-align"><a href="about/"><strong>Sustainable Philanthropy</strong></a></h4>
          <h4 className="center-align"><a href="https://forbettertomorrow.org/services/projects/" target="_self" aria-label="link to https://forbettertomorrow.org/services/projects/"><i className="fa fa-cubes"></i></a></h4>
        </div>

        <div className="col-sm">

          <h4 className="center-align"><a href="about/"><strong>Nurturing Future Generations</strong></a></h4>
          <h4 className="center-align"><a href="https://forbettertomorrow.org/services/ygc/" target="_self" aria-label="link to https://forbettertomorrow.org/services/ygc/"><i className="fa fa-users"></i></a></h4>
        </div>

      </div>

      <p >&nbsp;&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align"><b >Programs and events organized by For A Better Tomorrow to advance its mission</b></h4>
      </div>


      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/kite-fest-150x150.png" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="https://forbettertomorrow.org/events/kitefest/"><b>Kite Fest</b></a></h4>
          <h6 className="center-align">Kite Fest is an annual family oriented event that raises funds for local and global nonprofits. Join in on the kite flying fun. Come enjoy a live band, dance performances, face painting, kids activities food and, above all, kite flying.</h6>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/NS3_2991-150x150.jpg" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="events/yicu/"><b>YICU Service Awards</b></a></h4>
          <h6 className="center-align">Why I See You (YICU) Service Awards banquet recognizes and celebrates community service and leadership in McLean County. Proceeds from the event benefit the diverse efforts supported by FBT, including Youth Global Citizen (YGC).</h6>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/IMG_6972-150x150.jpg" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="https://forbettertomorrow.org/services/ygc/"><b>Youth Global Citizen</b></a></h4>
          <h6 className="center-align">Youth Global Citizen (YGC) is an experiential learning program that teaches young adults leadership skills and the significance of service and philanthropy. YGC cultivates leaders with diverse perspectives to serve and lead.</h6>
        </div>

      </div>

      {parse(bld)}

    </div>



  );
}
export default Home;
