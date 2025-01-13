import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';

const Flyer = () => {
    const { name } = useParams();

    var flyerName = "YGC.jpg";

    flyerData.flyers.map((flyer, index) => {
        if (name.localeCompare(flyer.link) == 0) {
            flyerName = flyer.file;
        }
    });

    console.log(flyerName);

    var source = "/images/flyers/" + flyerName;

    return (
        <div className="container">
            <div>
                <div>
                    <p className="center-align rounded"><img src={source} alt="" width="100%" /></p>
                </div>
            </div>
        </div>
    );
}
export default Flyer;
