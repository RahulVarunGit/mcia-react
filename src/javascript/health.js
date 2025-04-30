import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Health = () => {


    return (
        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >MCIA 2025 Free Ladies Health and Wellness Event</u></b></h4>
                <h4 className="center-align"><b ></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : 1111 Trinity Lane, Bloomington, IL 61704, USA</h4>
                <h4 className="center-align"></h4>
                <h4 className="center-align">When : 16 May 2025</h4>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://www.zeffy.com/en-US/ticketing/free-ladies-health-and-wellness-event">Register here</a></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="https://www.zeffy.com/en-US/ticketing/free-ladies-health-and-wellness-event"><img src="/images/flyers/ComingSoon.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <div><hr class="hr-line"></hr></div>

        </div>




    );
}
export default Health;
