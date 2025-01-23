import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Volleyball = () => {


    return (
        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >2025 MCIA Volleyball Tournament</u></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : Eastview Church</h4>
                <h4 className="center-align">1500 Airport Rd, Normal IL</h4>
                <h4 className="center-align">When : 15 March, 2025</h4>

                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://www.zeffy.com/ticketing/2025-mcia-set-and-spike-challenge">Register here</a></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="https://www.zeffy.com/ticketing/2025-mcia-set-and-spike-challenge"><img src="/images/flyers/MCIA25-Volleyball.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <div><hr class="hr-line"></hr></div>

        </div>



    );
}
export default Volleyball;
