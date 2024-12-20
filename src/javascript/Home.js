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


  return (

    <div className="container">

      <div>

        <div>
          <h2 className="fbt-title"><img src="/images/base/Logo.png" alt="" height="120" className="rounded" />  </h2>
          <p >&nbsp;</p>
        </div>

        <h4 >MCIA was established in 1979 to provide a means of bringing social and cultural events to the then small Indian community. Since then, MCIA has done significant work for social and cultural development in the Bloomington-Normal community. It continues to play a large role in serving, leading and representing the Indian community.</h4>
      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align">2025 MCIA Registration is open. Register before Dec 31, 2024 to avail 10% discount.</h4>
        <h4 className="center-align">Member enjoy <b>Exclusive Discounts</b> on ticketed events.</h4>
        <h4 className="center-align">Members-Only Access to stage performances & participation opportunities.</h4>
      </div>

      <div>
        <h4 className="center-align"><b ></b></h4>
        <p className="center-align"><a href="https://www.zeffy.com/en-US/ticketing/mciamclean-county-india-association-memberships--2025"><img src="/images/flyers/MCIA-Registration.jpg" alt="" width="80%" className="rounded" /></a></p>
        <div><hr class="hr-line"></hr></div>

      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;&nbsp;</p>
    </div>



  );
}
export default Home;
