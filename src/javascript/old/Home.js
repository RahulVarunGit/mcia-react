import { useState } from 'react';
import '../styles/Home.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projectData from '../data/projectData.json';

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

      <p >&nbsp;</p>
      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align"><b >Here are the global projects previously supported by For A Better Tomorrow:</b></h4>
      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/Maya-Book-Project.jpg" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="/maya-book-project"><b>Maya Book Project</b></a></h4>
          <h6 className="center-align">The book is an extremely important resource for educators and students. Its message about protecting the environment and caring for the forests is so important for students. The book reinforces reading and writing in K’iche’, English, and Spanish, and it connects students to the roots of their culture and ancestors. It is a family story of someone from the students’ own community and culture.</h6>
          <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$8,400</span></span></h5>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/El-Porvenir.jpg" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="/el-porvenir/"><b>El Porvenir</b></a></h4>
          <h6 className="center-align">El Porvenir works to provide water and sanitation to communities in Nicaragua. They likewise facilitate watershed management programs, which “promotes water flow, increases food security, and reduces the impact of climate change.” To this end, this project is intended to support the water distribution system for Regadillo, Nicaragua.</h6>
          <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$12,500</span></span></h5>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/SafePassage.jpg" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="/safe-passage/"><b>Safe Passage</b></a></h4>
          <h6 className="center-align">Safe Passage, a school in Guatemala that serves 500 low income students.  The school is located within the parameters of the largest active garbage dump in Central America. FBT fund the installation of an air filtration system at the school, which the board approved.  This effort will ensure that the students and staff have a healthy environment in which to learn and teach.</h6>
          <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$8,500</span></span></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/Yabal.jpg" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="/yabal"><b>Yabal Guatemala</b></a></h4>
          <h6 className="center-align">Yabal Guatemala promotes the empowerment of indigenous women and their families in rural Guatemalan highland communities through a focus on their economic self-sufficiency.</h6>
          <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$7,500</span></span></h5>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/IHF.jpg" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="/ihf"><b>Integral Heart Foundation</b></a></h4>
          <h6 className="center-align">Our school is currently home to 80 children with 6 learning programs, a Teacher-Training Program and serves 1,500 meals and snacks every month. Since 2011,  our programs have delivered classNamees and support to over 1,200 students and their families in  Guatemala.</h6>
          <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$8,400</span></span></h5>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/KYC.jpg" alt="" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="/kyc"><b>Kenya Konnect Youth Consortium</b></a></h4>
          <h6 className="center-align">KYC implements HIV/AIDS Prevention, Sexual and Reproductive Health Services, peacebuilding, environmental conservation, and economic strengthening programs targeting young people.</h6>
          <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">7,230</span></span></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align"><b >Here are the local projects currently supported by For A Better Tomorrow:</b></h4>
      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/Sunny.jpg" alt="Sunnyside Community Garden and Food Forest" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="https://www.facebook.com/westbloomingtonactivegarden/"><b>Sunnyside Community Garden and Food Forest</b></a></h4>
          <h6 className="center-align">The mission of Sunnyside Community Garden and Food Forest is to provide fresh, organic produce to low-income families in West Bloomington and to facilitate learning opportunities for children and adults through gardening, harvesting, and marketing food grown on site, using sustainable practices.</h6>
          <h5 className="center-align"><span className="afs"></span></h5>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/Charm.jpg" alt="CHARM, Inc. Neighborhood Block Party" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="https://www.facebook.com/FamilyCharm35/"><b>CHARM, Inc. Neighborhood Block Party</b></a></h4>
          <h6 className="center-align">Social Service in Bloomington, Illinois</h6>
          <h5 className="center-align"><span className="afs"></span></h5>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/project-oz.png" alt="Projet OZ" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="https://www.projectoz.org/"><b>Projet OZ</b></a></h4>
          <h6 className="center-align">Our mission is to make a positive difference for young people. We care what happens to young people. We care what happens to families. We care about making our community a safe, healthy, happy place to live.</h6>
          <h5 className="center-align"><span className="afs"></span></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/dreams-are-possible.jpg" alt="Dreams are Possible" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="https://dreamsarepossible.org/"><b>Dreams are Possible</b></a></h4>
          <h6 className="center-align">Dreams are possible is one of the nonprofit beneficiaries from Kite Fest 2019. Mary and Feli have served our community for many years. Kite Fest and For A Better Tomorrow were glad to have supported Dreams are Possible and Labyrinth Outreach Service for Women (YWCA), two nonprofit founded by Mary and Feli.</h6>
          <h5 className="center-align"><span className="afs"></span></h5>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/projects/Path-1.png" alt="PATH" width="150" height="150" className="rounded" /></p>
          <h4 className="center-align"><a href="https://www.pathcrisis.org/"><b>PATH</b></a></h4>
          <h6 className="center-align">PATH runs a 24/7 hotline with phones being answered by well-trained volunteers. In 2018, they want to expand opportunities for people to reach out for help. They offer telephone response; by dialing 2-1-1 people can talk about problems or needs and we can link callers to solutions. However, young adults do a lot of texting and we want to offer this as an option. They purchased software to make this a reality with the funds from the Kite Fest 2018.</h6>
          <h5 className="center-align"><span className="afs"></span></h5>
        </div>

      </div>

      <p >&nbsp;&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align"><b >Programs and events organized by For A Better Tomorrow to advance its mission</b></h4>
      </div>

      <p >&nbsp;</p>
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

    </div>



  );
}
export default Home;
