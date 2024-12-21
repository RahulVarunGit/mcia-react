import { useState } from 'react';
import '../styles/Home.css';

const Membership = () => {

  return (

    <div className="container">

      <p >&nbsp;</p>
      <div className="row">
        <h4 className="center-align"><b ><u >MCIA Registration</u></b></h4>
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
    </div>




  );
}
export default Membership;
