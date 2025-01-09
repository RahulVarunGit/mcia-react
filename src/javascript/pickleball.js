import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Badminton = () => {


    return (

        <div className="container">


            <div className="row">
                <h4 className="center-align"><b ><u >2025 MCIA Pickleball Tournament</u></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : Bloomington Tennis & Turf Center</h4>
                <h4 className="center-align">4101, Wicker Rd, Bloomington</h4>
                <h4 className="center-align">When : 11 & 12 January, 2024</h4>
                <p >&nbsp;</p>
                <h4 className="center-align"><b >Pickleball Pairing</b></h4>
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
                            <h3 ><b ><a href="Https://challonge.com/MCIAPBYouth" target="_blank"><b><span className="#ca370f">Pickleball Youth Pairings</span></b></a></b></h3>
                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="div-img-text">

                        <img src="/images/base/Square.png" alt="" width="100%" className="rounded-circle"></img>
                        <div className="text-on-image">

                            <p >&nbsp;</p>
                            <p >&nbsp;</p>
                            <h3 ><b ><a href="Https://challonge.com/MCIAPBAdult" target="_blank"><b><span className="#ca370f">Pickleball Adult Pairings</span></b></a></b></h3>
                        </div>

                    </div>

                </div>

                <div className="col-md-2 ">

                </div>

            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="/badminton">Go to Badminton Page</a></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

        </div>





    );
}
export default Badminton;
