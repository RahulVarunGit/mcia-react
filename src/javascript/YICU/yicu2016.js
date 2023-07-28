import {useState} from 'react';
import '../../styles/Home.css';
import Wip from '../.././wip';
import YICUnav from '../.././YICU-Nav';

const yicu2016 = () => {

  return(



    <div className="container">
    <YICUnav ></YICUnav>
    <div>
    <h2 className="logo"><img src="/images/base/Logo.jpg" alt="" width="40" height="40" className="rounded" />  for a <span className="cRed">better</span> tomorrow </h2>
    <h2 className="center-align">YICU Service Awards 2016</h2>
    <h2 className="center-align">Nominees</h2>
    <p >&nbsp;</p>
    </div>

    <div><hr class="hr-line"></hr></div>

    <p >&nbsp;</p>
    <div className="row">

    <div className="col-sm">

    <p className="center-align"><img src="/images/YICU/2016/2016-YICU-Nominees.jpg" alt="" width="80%" className="rounded" /></p>
    <h4 className="center-align"><b>Top Row Left to Right : </b> Kaylin Richards, Camron Hinman, Peris Story, Alex Hopper, Alicia Ramos, Chloe Cope, Grace Gauley and Sankalp Amaravadi. </h4>
    <h4 className="center-align"><b>Bottom Row Left to Right :</b>Priyamsa Mikkilineni, Dhruv Rebba, Aaron Martin, Oviya Sougoumarane, Fiona Ward Shaw, Ryan Sparks, Krista Barth, Shannon Doherty and Riley Davis.</h4>
    <h4 className="center-align"><b>Not in the picture:</b> Antoinese Watson, Bronwen Boyd, Dana Lopez, Dominic Moore, Jacob Labertew, Jordan Cherry, Kate Lorenz, Raylissa Rusk and Whitney Irmeger</h4>
    </div>

    </div>

    <div><hr class="hr-line"></hr></div>

    <div>
    <h2 className="logo"><img src="/images/base/Logo.jpg" alt="" width="40" height="40" className="rounded" />  for a <span className="cRed">better</span> tomorrow </h2>
    <h2 className="center-align">YICU Service Awards 2016</h2>
    <h2 className="center-align">Winners</h2>
    <p >&nbsp;</p>
    </div>

    <div><hr class="hr-line"></hr></div>

    <p >&nbsp;</p>
    <div className="row">

    <div className="col-sm">

    <p className="center-align"><img src="/images/YICU/2016/2016-YICU-Winners.jpg" alt="" width="80%"  className="rounded" /></p>
    <h4 className="center-align"><b>Left to right:</b> Alex Hopper, Alicia Ramos, Antoinese Watson (Not in the picture), Bronwen Boyd (Not in the picture), Camron Hinman, Dhruv Rebba, Dominic Moore (Not in the picture), Jordan Cherry (Not in the picture), Kaylin Richards and Oviya Sougomarane</h4>
    </div>

    </div>

    <div><hr class="hr-line"></hr></div>

    </div>



  );
}
export default yicu2016;
