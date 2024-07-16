import { useState } from 'react';
import '../styles/Home.css';

const donateZelle = () => {

  return (
    <div className="container">

      <div>
        <h1 className="fbt-title"><img src="/images/homePage/Logo.jpg" alt="" width="40" height="40" className="rounded" />  for a <span className="fbt-title-sub">better</span> tomorrow </h1>
        <p >&nbsp;</p>
      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;</p>
      <div className="row">
        <h2 className="left-align"><b >Donate Via Zelle For Maximum Impact</b></h2>
      </div>

      <div className="row">
        <h6 >One of the best ways to support FBT is by donating through Zelle. By using Zelle, you can ensure that every dollar you contribute goes directly towards our mission, as there are no processing fees associated with Zelle transactions. This means that your entire donation will be dedicated to making a positive impact on the lives of those in need.</h6>
      </div>

      <p >&nbsp;</p>
      <div className="row">

        <p ><h4 ><b >How To Donate Via Zelle</b></h4></p>
        <p ><h6 ><b>Log into Your Bank Account:</b> Sign in to your online banking or mobile banking app, where you have Zelle available.</h6></p>
        <p ><h6 ><b>Select  Send Money :</b> Locate the option to send money using Zelle within your banking app.</h6></p>
        <p ><h6 ><b>Enter Our Zelle Email Address:</b> For the recipient, enter our Zelle email address: <span className="highlt"><b><u><i>donate@forbettertomorrow.org</i></u></b></span>.</h6></p>
        <p ><h6 ><b>Specify the Donation Amount:</b> Enter the amount you wish to donate.</h6></p>
        <p ><h6 ><b>Include a Note:</b> If you d like to provide any specific information or designations for your donation, feel free to include a note.</h6></p>
        <p ><h6 ><b>Confirm and Send:</b> Double-check the details, and when you re ready, confirm the transaction.</h6></p>
        <p ><h6 >Your generous contribution through Zelle ensures that 100% of your donation directly supports our programs and initiatives. We deeply appreciate your commitment to making a meaningful difference in the lives of those we serve.</h6></p>
        <p ><h6 >All donations are <a href="https://forbettertomorrow.org/wp-content/uploads/2018/05/FBT-501C3.pdf" className="highlt">100% tax deductible</a>.</h6></p>
        <p >&nbsp;</p>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <p className="center-align"><img src="/images/base/Zelle_Instructions.png" alt="" width="300" height="300" className="rounded" /></p>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div col className="center-align">

          <a className="btn btn-primary btn-lg btn-block" href="/donate" role="button">Other paths to donate</a>
        </div>

      </div>

      <p >&nbsp;</p>
      <div className="row">
        <h5 className="center-align"><b >A heartfelt thank you to all our supporters!</b></h5>
      </div>

    </div>




  );
}
export default donateZelle;
