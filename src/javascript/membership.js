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
        <h4 className="center-align">2026 MCIA Registration is open.</h4>
        <h4 className="center-align">Member enjoy <b>Exclusive Discounts</b> on ticketed events.</h4>
        <h4 className="center-align">Members-Only Access to stage performances & participation opportunities.</h4>
      </div>

      <div className="row">

        <h5 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://www.zeffy.com/en-US/ticketing/mcia-2026-annual-membership">Register here</a></h5>
      </div>

      <p >&nbsp;</p>
      <div className="row">

        <h4 className="center-align"><a href="https://www.zeffy.com/en-US/ticketing/mciamclean-county-india-association-memberships--2025">Click here if you still need 2025 membership.</a></h4>
      </div>

    </div>


  );
}
export default Membership;
