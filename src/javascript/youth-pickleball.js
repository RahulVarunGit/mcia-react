import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const YouthPickleball = () => {


    return (

        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >2025 MCIA Youth Pickleball</u></b></h4>
                <h4 className="center-align"><b ></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : TBD</h4>
                <h4 className="center-align"></h4>
                <h4 className="center-align">When : TBD</h4>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="/youth-pickleball">Coming Soon</a></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="/youth-pickleball"><img src="/images/flyers/ComingSoon.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <div><hr class="hr-line"></hr></div>

        </div>





    );
}
export default YouthPickleball;
