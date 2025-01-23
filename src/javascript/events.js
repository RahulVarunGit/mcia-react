import { useState } from 'react';
import '../styles/Home.css';

const Events = () => {

  return (
    <div className="container">

      <div>

        <div>
          <h2 className="fbt-title"><img src="/images/base/logo.png" alt="" height="80" className="rounded" />  </h2>
        </div>

      </div>

      <div className="row">
        <h3 className="center-align"><b >Upcoming Events</b></h3>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="/volleyball"><img src="/images/flyers/MCIA25-Volleyball.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/volleyball">2025 MCIA Volleyball Tournament</a></u></b></h5>
          <h5 >Where : Eastview Church</h5>
          <h5 >1500 Airport Rd, Normal IL</h5>
          <h5 >When : 15 March, 2025</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="/volleyball">Volleyball Registration</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="https://tinyurl.com/MCIA25ARTS"><img src="/images/flyers/MCIA25-Art.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="https://tinyurl.com/MCIA25ARTS">2025 Kids Art Compitition</a></u></b></h5>
          <h5 >Where : Parke Regency</h5>
          <h5 >1413 Leslie Dr</h5>
          <h5 >When : 8 Feb, 2025</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="https://tinyurl.com/MCIA25ARTS">Register here</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">
        <h3 className="center-align"><b >Past Events</b></h3>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="/republic-day"><img src="/images/flyers/MCIA-Republic-Day.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/republic-day">2025 Republic Day</a></u></b></h5>
          <h5 >Where : Normal Community Activity Center</h5>
          <h5 >1110 Douglas St, Normal, IL 61761</h5>
          <h5 >When : 18 January, 2025</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="/galleryView/2025-Republic-Day">Republic Day Gallery</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="/badminton"><img src="/images/flyers/MCIA-Badminton.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/badminton">2025 Badminton & Pickleball Tournament</a></u></b></h5>
          <h5 >Where : Bloomington Tennis & Turf Center</h5>
          <h5 >4101, Wicker Rd, Bloomington</h5>
          <h5 >When : 11 & 12 January, 2025</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="/galleryView/2025-Badminton-Pickleball">Badminton & Pickleball Gallery</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

    </div>



  );
}
export default Events;
