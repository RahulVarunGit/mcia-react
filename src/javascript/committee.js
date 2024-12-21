import { useState } from 'react';
import '../styles/Home.css';

const Committee = () => {

  return (

    <div className="container">

      <div>

        <div>
          <h2 className="fbt-title"><img src="/images/base/logo.png" alt="" height="80" className="rounded" />  </h2>
          <p >&nbsp;</p>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">
        <h4 className="center-align"><b >MCIA Team and Advisory Committee</b></h4>
      </div>

      <p >&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <ul>
            <li className="list-unstyled"><h5 className="center-align"><b ><u >2025 MCIA Team</u></b></h5></li>
            <li className="list-unstyled"><h5 >Bijoya Sahu</h5></li>
            <li className="list-unstyled"><h5 >Nirmal jain</h5></li>
            <li className="list-unstyled"><h5 >Poovanesh Pandian - Sports Committee </h5></li>
            <li className="list-unstyled"><h5 >Ram Chand Venkatswamy - Outreach team</h5></li>
            <li className="list-unstyled"><h5 >Ramyasri Modugula - Communication Team</h5></li>
            <li className="list-unstyled"><h5 >Sirisha Aksana</h5></li>
            <li className="list-unstyled"><h5 >Uma Kailasam</h5></li>
            <li className="list-unstyled"><h5 >Urmy Das - President</h5></li>
          </ul>

        </div>

        <div className="col-sm">

          <ul>
            <li className="list-unstyled"><h5 className="center-align"><b ><u >Advisory Committee</u></b></h5></li>
            <li className="list-unstyled"><h5 >Ajay Rolla</h5></li>
            <li className="list-unstyled"><h5 >Sailaja Lanka </h5></li>
            <li className="list-unstyled"><h5 >Sushmita Lahri</h5></li>
          </ul>

        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

    </div>




  );
}
export default Committee;
