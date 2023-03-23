import {useState} from 'react';
import '../styles/Home.css';

const contact = () => {

  return(

    <div className="container">

    <div>
    <h1 className="center-align"><b >Contact Us</b></h1>
    </div>

    <div><hr class="hr-line"></hr></div>

    <p >&nbsp;&nbsp;</p>
    <div className="row justify-content-center">

    <div className="col-sm">

    <h3 className="center-align"><img src="/images/contact/Phone-icon.jpg"alt="Phone" width="75" height="75" className="rounded-circle"></img></h3>
    <h3 className="center-align">309-434-0101</h3>
    </div>

    <div className="col-sm">

    <h3 className="center-align"><img src="/images/contact/Mail-Icon.png"alt="Email" width="75" height="75" className="rounded-circle"></img></h3>
    <h4 className="center-align"><a href="mailto:contactus@forbettertomorrow.org">contactus@forbettertomorrow.org</a></h4>
    </div>

    </div>

    <p >&nbsp;&nbsp;</p>
    <div>
    <h4 className="center-align">Don’t hestiate to ask us something.</h4>
    <p >&nbsp;&nbsp;</p>
    <h4 className="center-align"><b >Available from 9AM to 5PM</b></h4>
    <h4 className="center-align"><iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD09zQ9PNDNNy9TadMuzRV_UsPUoWKntt8&amp;q=808+S+Eldorado+Road+Suite+1%0ABloomington+IL+61704%0AUnited+States"></iframe></h4>
    <div><hr class="hr-line"></hr></div>

    </div>

    </div>





  );
}
export default contact;
