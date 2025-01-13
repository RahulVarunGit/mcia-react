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
          <h2 className="fbt-title"><img src="/images/base/logo.png" alt="" height="120" className="rounded" />  </h2>
          <p >&nbsp;</p>
        </div>

        <h4 >MCIA was established in 1979 to provide a means of bringing social and cultural events to the then small Indian community. Since then, MCIA has done significant work for social and cultural development in the Bloomington-Normal community. It continues to play a large role in serving, leading and representing the Indian community.</h4>
      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align">2025 MCIA Registration is open.</h4>
        <h4 className="center-align">Member enjoy <b>Exclusive Discounts</b> on ticketed events.</h4>
        <h4 className="center-align">Members-Only Access to stage performances & participation opportunities.</h4>
        <div className="row">

          <div className="col-md-4 ">

          </div>

          <div className="col-md-4">

            <div className="div-img-text">

              <img src="/images/base/Square.png" alt="" width="100%" className="rounded-circle"></img>
              <div className="text-on-image">

                <p >&nbsp;</p>
                <p >&nbsp;</p>
                <h3 ><b ><a href="/membership"><b><span className="#ca370f">Join Now</span></b></a></b></h3>
              </div>

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

            <img src="/images/base/Square.png" alt="" width="100%" className="rounded-circle"></img>
            <div className="text-on-image">

              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <h3 ><b ><a href="/Events"><b><span className="#ca370f">View upcoming</span></b></a></b></h3>
              <h3 ><b ><a href="/Events"><b><span className="#ca370f">MCIA events</span></b></a></b></h3>
            </div>

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
