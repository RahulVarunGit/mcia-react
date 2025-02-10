import { useState } from 'react';
import '../styles/Home.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
          <h2 className="fbt-title"><img src="/images/base/MCIA-Logo-2.jpg" alt="" width="60%" className="rounded" />  </h2>
          <p >&nbsp;</p>
        </div>

        <h4 >MCIA was established in 1979 to provide a means of bringing social and cultural events to the then small Indian community. Since then, MCIA has done significant work for social and cultural development in the Bloomington-Normal community. It continues to play a large role in serving, leading and representing the Indian community.</h4>
      </div>

      <p >&nbsp;</p>
      <div>
        <h2 className="fbt-title"><img src="/images/base/501c3.jpg" alt="" height="120" className="rounded" />  </h2>
        <h4 >As of Jan 23 2025 MCIA is now officially recognized as 501(c)(3) nonprofit organization by the IRS. <a href="/about"> Click here to learn more.</a></h4>
        <p >&nbsp;</p>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align"><b >2025 MCIA Registration is open.</b></h4>
        <h4 className="center-align">Join today to enjoy exclusive discounts on ticketed events, members-only access to stage performances, and special participation opportunities.</h4>
        <div className="row">

          <div className="col-md-4 ">

          </div>

          <div className="col-md-4">

            <div className="div-img-text">

              <a href="/membership"><img src="/images/base/JoinCommunity.jpg" alt="" width="100%" className="rounded-circle"></img></a>
            </div>

          </div>

          <div className="col-md-4 ">

          </div>

        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align">MCIA has plans for lot of activities in 2025</h4>
        <h4 className="center-align">Member enjoy <b>Exclusive Discounts</b> on ticketed events.</h4>
        <h4 className="center-align">View planned events. And keep watching for more... </h4>
      </div>

      <div className="row">

        <div className="col-md-4 ">

        </div>

        <div className="col-md-4">

          <div className="div-img-text">

            <a href="/Events"><img src="/images/base/Explore.jpg" alt="" width="100%" className="rounded-circle"></img></a>
          </div>

        </div>

        <div className="col-md-4 ">

        </div>

      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

    </div>




  );
}
export default Home;
