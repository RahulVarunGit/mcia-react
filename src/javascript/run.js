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
                <h4 className="center-align">Where : TBD</h4>
                <h4 className="center-align"></h4>
                <h4 className="center-align">When : 30 May 2025</h4>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="">Registeration Coming Soon</a></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="https:https://www.zeffy.com/en-US/ticketing/chess-tournament"><img src="/images/flyers/ComingSoon.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <div><hr class="hr-line"></hr></div>

        </div>





    );
}
export default Run;
