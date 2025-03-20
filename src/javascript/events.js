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

          <p className="center-align"><a href="/talentShow"><img src="/images/flyers/ComingSoon.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/talentShow">2025 MCIA Talent Show</a></u></b></h5>
          <h5 >Where : TBD</h5>
          <h5 >When : TBD</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="/talentShow">Talent Show Registration</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="/chess"><img src="/images/flyers/MCIA25-Chess.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/chess">2025 MCIA Chess Tournament</a></u></b></h5>
          <h5 >Where : Park Regency Hotel, 1413 Leslie Dr, Bloomington IL</h5>
          <h5 >When : 20 April, 2025</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="/chess">Secure your spot</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">
        <h3 className="center-align"><b >Past Events</b></h3>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="/galleryView/2025-Volleyball"><img src="/images/flyers/MCIA25-Volleyball.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/galleryView/2025-Volleyball">2025 MCIA Set and Spike Challenge</a></u></b></h5>
          <h5 >Where : Eastview Church</h5>
          <h5 >1500 Airport Rd, Normal IL</h5>
          <h5 >When : 15 March, 2025</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="/galleryView/2025-Volleyball">Volleyball and Throwball Gallery</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="/galleryView/2025-Womens-Day"><img src="/images/flyers/MCIA25-Womens-Day.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/galleryView/2025-Womens-Day">2025 MCIA Women's Day</a></u></b></h5>
          <h5 >Where : 1413 Leslie Dr, Bloomington IL</h5>
          <h5 >When : 9 March, 2025</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="/galleryView/2025-Womens-Day">Women's Day Gallery</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="/galleryView/2025-Kids-Art-Competition"><img src="/images/flyers/MCIA25-Art.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/galleryView/2025-Kids-Art-Competition">2025 Kids Art Competition</a></u></b></h5>
          <h5 >Where : Parke Regency</h5>
          <h5 >1413 Leslie Dr</h5>
          <h5 >When : 8 Feb, 2025</h5>
          <h5 ><a type="button" class="btn btn-primary btn-lg" href="/galleryView/2025-Kids-Art-Competition">Art Competition Gallery</a></h5>
        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm-3">

          <p className="center-align"><a href="/galleryView/2025-Republic-Day"><img src="/images/flyers/MCIA-Republic-Day.jpg" alt="" width="100%" className="rounded" /></a></p>
        </div>

        <div className="col-sm-9">

          <h5 ><b ><u ><a href="/galleryView/2025-Republic-Day">2025 Republic Day</a></u></b></h5>
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

          <h5 ><b ><u ><a href="/galleryView/2025-Badminton-Pickleball">2025 Badminton & Pickleball Tournament</a></u></b></h5>
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
