import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Badminton = () => {


    return (

        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >2025 Badminton & Pickleball Tournament</u></b></h4>
            </div>

            <p >&nbsp;</p>
            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : Bloomington Tennis & Turf Center</h4>
                <h4 className="center-align">4101, Wicker Rd, Bloomington</h4>
                <h4 className="center-align">When : 11 & 12 January, 2024</h4>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://forms.gle/KKY3K41YfTTRnsmJ7">Register here</a></h4>
            </div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="https://forms.gle/KKY3K41YfTTRnsmJ7"><img src="/images/flyers/MCIA-Badminton.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <p >&nbsp;</p>
        </div>



    );
}
export default Badminton;
