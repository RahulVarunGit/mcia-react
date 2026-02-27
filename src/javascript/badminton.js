import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Badminton = () => {


    return (
        <div className="container">


            <div className="row">
                <h4 className="center-align"><b ><u >2026 MCIA Badminton Tournament</u></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : Evans Junior High, Bloomingotn IL</h4>

                <h4 className="center-align">When : 10:30 AM to 6PM, Feb 28, 2026</h4>
                <h4 className="center-align">       10 AM to 2PM, Mar 1, 2026</h4>
                <p >&nbsp;</p>
                <div><hr className="hr-line"></hr></div>
                <div>
                    <h4 className="center-align"><a class="" href="https://docs.google.com/document/d/1Ky6I5NxW009ncPlnHdRxC-asyjK1JFRZBRUXgJ-zIJg/edit?tab=t.0">Tournament Rules</a></h4>
                </div>
                <div>
                    <h4 className="center-align"><a type="button" className="btn btn-primary btn-lg" href="https://near.tl/sm/et0hz1LJ_">Sign Waiver</a></h4>
                </div>



                <div><hr class="hr-line"></hr></div>
                <h4 className="center-align"><b >Badminton Pairing</b></h4>
            </div>

            <p >&nbsp;</p>
            <div className="row">

                <div className="col-md-4 ">

                    <div className="div-img-text">

                        <img src="/images/base/Square.png" alt="" width="100%" className="rounded-circle"></img>
                        <div className="text-on-image">

                            <p >&nbsp;</p>
                            <p >&nbsp;</p>

                            <h3 ><b ><a href="https://challonge.com/MCIAMD2026" target="_blank"><b><span className="#ca370f">Mens Doubles</span></b></a></b></h3>
                            <h3 ><b ><a href="https://challonge.com/MCIAMD2026" target="_blank"><b><span className="#ca370f">Pairings</span></b></a></b></h3>
                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="div-img-text">

                        <img src="/images/base/Square.png" alt="" width="100%" className="rounded-circle"></img>
                        <div className="text-on-image">

                            <p >&nbsp;</p>
                            <p >&nbsp;</p>
                            <h3 ><b ><a href="https://challonge.com/MCIAWD2026" target="_blank"><b><span className="#ca370f">Womens Doubles</span></b></a></b></h3>
                            <h3 ><b ><a href="https://challonge.com/MCIAWD2026" target="_blank"><b><span className="#ca370f">Pairings</span></b></a></b></h3>
                        </div>

                    </div>

                </div>

                <div className="col-md-4 ">

                    <div className="div-img-text">

                        <img src="/images/base/Square.png" alt="" width="100%" className="rounded-circle"></img>
                        <div className="text-on-image">

                            <p >&nbsp;</p>
                            <p >&nbsp;</p>
                            <h3 ><b ><a href="https://challonge.com/MCIAXD2026" target="_blank"><b><span className="#ca370f">Mixed Doubles</span></b></a></b></h3>
                            <h3 ><b ><a href="https://challonge.com/MCIAXD2026" target="_blank"><b><span className="#ca370f">Pairings</span></b></a></b></h3>
                        </div>

                    </div>

                </div>

            </div>

            <p >&nbsp;</p>
            <div className="row">
                <div className="col-md-2 ">



                </div>

                <div className="col-md-4 ">

                    <div className="div-img-text">

                        <img src="/images/base/Square.png" alt="" width="100%" className="rounded-circle"></img>
                        <div className="text-on-image">

                            <p >&nbsp;</p>
                            <p >&nbsp;</p>

                            <h3 ><b ><a href="https://challonge.com/MCIAYouth2026" target="_blank"><b><span className="#ca370f">Youth Doubles</span></b></a></b></h3>
                            <h3 ><b ><a href="https://challonge.com/MCIAYouth2026" target="_blank"><b><span className="#ca370f">Pairings</span></b></a></b></h3>
                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="div-img-text">

                        <img src="/images/base/Square.png" alt="" width="100%" className="rounded-circle"></img>
                        <div className="text-on-image">

                            <p >&nbsp;</p>
                            <p >&nbsp;</p>
                            <h3 ><b ><a href="https://challonge.com/MCIAKids2026" target="_blank"><b><span className="#ca370f">Kids Doubles</span></b></a></b></h3>
                            <h3 ><b ><a href="https://challonge.com/MCIAKids2026" target="_blank"><b><span className="#ca370f">Pairings</span></b></a></b></h3>
                        </div>

                    </div>

                </div>

                <div className="col-md-2 ">



                </div>

            </div>


            <div><hr class="hr-line"></hr></div>



        </div>



    );
}
export default Badminton;
