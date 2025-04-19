import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Chess = () => {


    return (
        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >2025 Chess Tournament</u></b></h4>
                <h4 className="center-align"><b ></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : Park Regency Hotel</h4>
                <h4 className="center-align">1413 Leslie Dr, Bloomington IL</h4>
                <h4 className="center-align">When : 20 April, 2025</h4>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://www.zeffy.com/en-US/ticketing/chess-tournament">Register here</a></h4>
                <p >&nbsp;</p>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://www.zeffy.com/en-US/ticketing/chess-tournament">Pairings and Standings</a></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="https:https://www.zeffy.com/en-US/ticketing/chess-tournament"><img src="/images/flyers/MCIA25-Chess.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <div><hr class="hr-line"></hr></div>

        </div>



    );
}
export default Chess;
