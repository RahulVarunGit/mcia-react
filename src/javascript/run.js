import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Run = () => {


    return (

        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >2025 5K Run</u></b></h4>
                <h4 className="center-align"><b ></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : 2201 Stone Mountain Blvd, Bloomington, IL US 61704</h4>
                <h4 className="center-align"></h4>
                <h4 className="center-align">When : 31 May 2025</h4>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://runsignup.com/Race/IL/Bloomington/MCIA">Register Now</a></h4>
                <h3 className="center-align cRed">Gift card for overall male and female winners.</h3>
                <h3 className="center-align highlt">FREE EVENT T-SHIRT*</h3>
                <h4 className="center-align">*for first 100 Registrations</h4>
                <h3 className="center-align cFF5833">MEDALS FOR KIDS</h3>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="https://runsignup.com/Race/IL/Bloomington/MCIA"><img src="/images/flyers/MCIA25-5K.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <div><hr class="hr-line"></hr></div>

        </div>





    );
}
export default Run;
