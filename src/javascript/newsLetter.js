import {useState} from 'react';
import '../styles/Home.css';

const NewsLetter = () => {

  return(

    <div className="container">

    <div>
    <h1 className="fbt-title"><img src="/images/homePage/Logo.jpg"alt="" width="40" height="40" className="rounded"/>  for a <span className="fbt-title-sub">better</span> tomorrow </h1>
    <h1 className="fbt-tag-line">…Eliminating the gap between abundance and need</h1>
    <p >&nbsp;</p>
    </div>

    <div className="row">

    <div className="col-sm">

    <h3 className="center-align"><b >News Letters</b></h3>
    </div>

    </div>

    <div className="center-align">
    <a className="btn btn-primary" href="http://eepurl.com/df3ucr" role="button">Join our mailing list</a>
    </div>

    
    <p >&nbsp;</p>
    <div className="row">

    <div className="col-sm">

    <h4 className="center-align"><b ></b></h4>
    <h4 className="center-align"><i  className="fa fa-newspaper-o cFont35"></i></h4>
    <h4 className="center-align cBlue"><a href="https://us17.campaign-archive.com/home/?u=faa074c9464527b3f9b8f1adb&id=1fb80dc979"><span >Current and past issues</span></a></h4>
    <p >&nbsp;</p>
    </div>

    </div>

    <p >&nbsp;</p>
    <div><hr class="hr-line"></hr></div>

    <h3 className="cursiveGray">“Our mission is to promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.”</h3>
    </div>




  );
}
export default NewsLetter;
