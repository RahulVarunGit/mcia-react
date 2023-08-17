import {useState} from 'react';
import '../styles/Home.css';
import YGCnav from '.././YGC-Nav'

const YGC = () => {

  return(




    <div className="container">

    <div>
    <h2 className="fbt-title"><img src="/images/homePage/Logo.jpg"alt="" width="40" height="40" className="rounded"/>  for a <span className="fbt-title-sub">better</span> tomorrow </h2>
    <h2  className="fbt-tag-line">…Eliminating the gap between abundance and need</h2>
    <p >&nbsp;</p>
    </div>

    <div>
    <h2 className="center-align c-gray"><b >YGC</b></h2>
    </div>

    <p >&nbsp;&nbsp;</p>
    <div>
    <h4 className="center-align c-gray"><b >We are bringing together high school students that believe in working together to positively impact our community and world. </b></h4>
    </div>

    <div className="row">

    <div className="col-sm-4 ">

    </div>

    <div className="col-sm-4 bg-info border">

    <p ></p>
    <h3 className="center-align c-white"   ><a href="https://tinyurl.com/ygc-overview"><b><span className="c-gray">Program Overview</span></b></a></h3>
    <p ></p>
    </div>

    <div className="col-sm-4 ">

    </div>

    </div>

    <div>
    <h4 className="center-align c-gray"><b >Students will gain valuable personal leadership and project management knowledge and skills while building a network of peers and leading a project for a non-profit group in our community.</b></h4>
    </div>

    <p >&nbsp;&nbsp;</p>
    </div>




  );
}
export default YGC;
