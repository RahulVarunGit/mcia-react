import { useState } from 'react';
import '../styles/Home.css';

const About = () => {

  return (

    <div className="container">

      <p >&nbsp;</p>
      <div className="row">
        <h4 className="center-align"><b ><u >2025 MCIA Women's Day</u></b></h4>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align">Where : 1413 Leslie Dr, Bloomington IL</h4>
        <h4 className="center-align">When : 9 March, 2025</h4>
        <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://www.zeffy.com/en-US/ticketing/mcia-womens-day">Buy Tickets</a></h4>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align"><b ></b></h4>
        <p className="center-align"><a href="https://www.zeffy.com/en-US/ticketing/mcia-womens-day"><img src="/images/flyers/ComingSoon.jpg" alt="" width="80%" className="rounded" /></a></p>
        <div><hr class="hr-line"></hr></div>

      </div>

      <div><hr class="hr-line"></hr></div>

    </div>



  );
}
export default About;
