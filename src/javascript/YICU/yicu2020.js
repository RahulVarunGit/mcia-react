import {useState} from 'react';
import '../../styles/Home.css';
import Wip from '../.././wip';
import YICUnav from '../.././YICU-Nav';

const yicu2020 = () => {

  return(



    <div className="container">
    <YICUnav ></YICUnav>
    <div>
    <h3 className="logo"><img src="/images/base/Logo.jpg" alt="" width="40" height="40" className="rounded"/>  for a <span className="cRed">better</span> tomorrow </h3>
    <h3 className="center-align">YICU Service Awards 2020</h3>
    <h3 className="center-align">Winners</h3>
    <p >&nbsp;</p>
    </div>

    <div><hr class="hr-line"></hr></div>

    <p >&nbsp;</p>
    <div className="row">

    <div className="col-sm">

    <h4 className="center-align"><b >Individual Awards</b></h4>
    </div>

    </div>

    <div className="row">

    <div className="col-sm">

    <h6 className="center-align cGray">Shashi Salavath</h6>
    <h6 className="center-align cGray">Isha Gollapudi</h6>
    <h6 className="center-align cGray">Satvika Boyina</h6>
    </div>

    <div className="col-sm">

    <h6 className="center-align cGray">Erica Rosenberger</h6>
    <h6 className="center-align cGray">Rachel Dawson</h6>
    <h6 className="center-align cGray">Jasmyn Jordan</h6>
    </div>

    <div className="col-sm">

    <h6 className="center-align cGray">Yvin Shin</h6>
    <h6 className="center-align cGray">Gavin Cunningham</h6>
    <h className="center-align cGray">Heather Dawson</h>
    </div>

    </div>

    <div><hr className="line2"></hr></div>

    <div className="row">

    <div className="col-sm">

    <h4 className="center-align"><b >Team Award</b></h4>
    <h6 className="center-align">The Normal West Black Student Union</h6>
    </div>

    </div>

    <div><hr className="line2"></hr></div>

    <div className="row">

    <div className="col-sm">

    <h4 className="center-align"><b >Advocate Award</b></h4>
    <h6 className="center-align">Helping Hands Community Center (HHCC)</h6>
    </div>

    </div>

    <div><hr className="line2"></hr></div>

    <div className="row">

    <div className="col-sm">

    <h4 className="center-align"><b >Mentor Award</b></h4>
    <h6 className="center-align">Shri Narayan Chandak</h6>
    </div>

    </div>

    <div><hr className="line2"></hr></div>

    <div className="row">
    <h4 className="center-align"><b >FBT is excited to make a $250 donation towards the non-profits chosen by the award winners.</b></h4>
    </div>

    <div className="row">

    <div className="col-sm">

    <h4 className="center-align"><a href="https://www.facebook.com/4ABetterTomorrow/videos/376058036781953/"><b>YICU 2020 Event Video</b></a></h4>
    <p className="center-align"><a href="https://www.facebook.com/4ABetterTomorrow/videos/376058036781953/"><img src="Images/2020/YICU2020-Play.png" alt="" width="50%" className="rounded" /></a></p>
    <p >&nbsp;&nbsp;</p>
    </div>

    </div>

    <div><hr class="hr-line"></hr></div>

  
    </div>



  );
}
export default yicu2020;
