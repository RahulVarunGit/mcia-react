import {useState} from 'react';
import '../styles/Home.css';
import '../styles/grant.css';

const grant = () => {

  return(
    <div className="container">

    <div>
    <h2 className="fbt-title"><img src="/images/base/Logo.jpg"alt="" width="40" height="40" className="rounded"/>  for a <span className="fbt-title-sub">better</span> tomorrow </h2>
    <h2 className="fbt-tag-line">…Eliminating the gap between abundance and need</h2>
    <p >&nbsp;</p>
    </div>

    <div>
    <h1 className="center-align"><b >Submit a Grant</b></h1>
    </div>

    <div><hr class="hr-line"></hr></div>

    <p >&nbsp;&nbsp;</p>
    <div>
    <h4 className="center-align">Thanks for your interest in working with For A Better Tomorrow (FBT). FBT accepts grant applications in the first and the third quarter of the year. Before submitting a grant request, kindly take a few minutes to review the <a href="https://docs.google.com/document/d/1Rh1vmcKUQsfyLjP9HIa1jrgSogazw-1WlVUV4Hwu-0o/edit">FBT Grant Guidelines</a>. We love collaborating with new nonprofits and past grantees alike. We look forward to receiving and reviewing your grant applications.</h4>
    <p >&nbsp;&nbsp;</p>
    </div>

    <p >&nbsp;&nbsp;</p>
    <div className="row container2">

    <div className="col-sm-1 ">

    </div>

    <div className="col-sm-4">

    <img src="/images/base/BlueSquare2.png" alt="" width="100%" className="rounded-circle"></img>
    <div className="centered">

    <h4 className="cF8F8F8 center-align"><b ><a href="https://docs.google.com/forms/d/e/1FAIpQLSdhNobh1VopMuIDSFMtb30HetDznRQKkS6Q558jTAka2A2sWA/viewform ">Submit a Global Grant Request.</a></b></h4>
    <p >&nbsp;</p>
    </div>

    </div>

    <div className="col-sm-2 ">

    </div>

    <div className="col-sm-4">

    <img src="/images/base/BlueSquare2.png" alt="" width="100%" className="rounded-circle"></img>
    <div className="centered">

    <h4 className="cF8F8F8 center-align"><b ><a href="https://docs.google.com/forms/d/e/1FAIpQLSdSgC_GSdBKMDTNGLvJ5EZ62Ke1Lgf8mZIlRiUQeOztQK1vGQ/viewform ">Submit a Local (McLean County) Grant Request</a></b></h4>
    <p >&nbsp;</p>
    </div>

    </div>

    <div className="col-sm-1 ">

    </div>

    </div>

    <div><hr class="hr-line"></hr></div>

    </div>


  );
}
export default grant;
