import { useState } from 'react';
import '../styles/Home.css';

const contact = () => {

  return (

    <div className="container">

      <div className="row">
        <h4 className="center-align"><b ><u >Contact Us</u></b></h4>
      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;&nbsp;</p>
      <div className="row justify-content-center">

        <div className="col-sm">

          <h3 className="center-align"><img src="/images/contact/address.jpg" alt="Phone" width="75" height="75" className="rounded-circle"></img></h3>
          <h3 className="center-align">PO Box 375 Bloomington IL 61702-0375</h3>
        </div>

      </div>

      <div className="row justify-content-center">

        <div className="col-sm">

          <h3 className="center-align"><img src="/images/contact/phone.jpg" alt="Phone" width="75" height="75" className="rounded-circle"></img></h3>
          <h3 className="center-align">309-433-4231</h3>
        </div>

      </div>

      <div className="row justify-content-center">

        <div className="col-sm">

          <h3 className="center-align"><img src="/images/contact/mail.jpg" alt="Email" width="75" height="75" className="rounded-circle"></img></h3>
          <h4 className="center-align"><a href="mailto:ourmcia@gmail.com">outmcia@gmail.com</a></h4>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

    </div>



  );
}
export default contact;
