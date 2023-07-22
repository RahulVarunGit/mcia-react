import {useState} from 'react';
import '../styles/Home.css';
import YICUnav from '.././YICU-Nav';

const YICU = () => {

  return(



    <div className="container">
    <YICUnav ></YICUnav>
    <div>
    <h2 className="fbt-title"><img src="/images/base/Logo.jpg"alt="" width="40" height="40" className="rounded"/>  for a <span className="fbt-title-sub">better</span> tomorrow </h2>
    <h2 className="fbt-tag-line">…Eliminating the gap between abundance and need</h2>
    <p >&nbsp;</p>
    </div>

    <div><hr class="hr-line"></hr></div>

    <div>
    <h2 className="center-align"><b >YICU 2023 Announcement</b></h2>
    <p className="center-align"><img src="/images/base/coming-soon.jpg" alt="" width="100%" className="rounded" /></p>
    <div><hr class="hr-line"></hr></div>

    <h2 className="mission">“Our mission is to promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.”</h2>
    </div>

    </div>



  );
}
export default YICU;
