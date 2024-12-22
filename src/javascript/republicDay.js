import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Flyers = () => {

    return (

        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >2025 Republic Day</u></b></h4>
            </div>

            <p >&nbsp;</p>
            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align">Where : Normal Community Activity Center</h4>
                <h4 className="center-align">1110 Douglas St, Normal, IL 61761</h4>
                <h4 className="center-align">When : 18 January, 2024</h4>
                <h4 className="center-align"><a type="button" class="btn btn-primary btn-lg" href="https://tinyurl.com/MCIA25">Register here</a></h4>
            </div>

            <div>
                <h4 className="center-align"><b ></b></h4>
                <p className="center-align"><a href="https://tinyurl.com/MCIA25"><img src="/images/flyers/MCIA-Republic-Day.jpg" alt="" width="80%" className="rounded" /></a></p>
                <div><hr class="hr-line"></hr></div>

            </div>

            <p >&nbsp;</p>
        </div>


    );
}
export default Flyers;
