import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const IndependenceDay = () => {


    return (

        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >2025 MCIA Independence Day Celebration</u></b></h4>
                <h4 className="center-align"><b ></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : TBD</h4>
                <h4 className="center-align"></h4>
                <h4 className="center-align">When : TBD</h4>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="/independence-day">Coming Soon</a></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="/independence-day"><img src="/images/flyers/ComingSoon.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <div><hr class="hr-line"></hr></div>

        </div>



    );
}
export default IndependenceDay;
