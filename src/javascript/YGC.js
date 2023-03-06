import {useState} from 'react';
import '../styles/Home.css';

const YGC = () => {

  return(

    <div className="container">
    <div>
      <h2	className="fbt-title">
      <img src="/images/homePage/Logo.jpg" alt="" width="40" height="40" class="rounded"/> for a <span className="fbt-title-sub">better </span>
  tomorrow
      </h2>
      <h2  className="fbt-tag-line">…Eliminating the gap between abundance and need</h2>

    </div>
    <hr	className="hr-line"></hr>

    <div>
    <h2 class="center-align"><b >YGC 2023 Announcement</b></h2>
    <p class="center-align"><img src="/images/base/coming-soon.jpg" alt="" width="100%" className="rounded" /></p>
    <hr	className="hr-line"></hr>

    <h2 class="mission">“Our mission is to promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.”</h2>
    </div>


    </div>




  );
}
export default YGC;
