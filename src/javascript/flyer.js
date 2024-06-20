import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';

const Flyer = () => {
    const { name } = useParams();
    var flyerName = "YGC";
    //console.log("testing testing testing");
    //console.log(name);
    //console.log(name.localeCompare("ygc"));
    //test
    if (name.localeCompare("ygc") == 0) {
        flyerName = "YGC";
    } else if (name.localeCompare("kitefest") == 0) {
        flyerName = "KiteFest2024";
    } else if (name.localeCompare("nonprofitfair") == 0) {
        flyerName = "KiteFest-NonProfitFair";
    } else if (name.localeCompare("sponsor") == 0) {
        flyerName = "KiteFest-Sponsor";
    } else if (name.localeCompare("talent") == 0) {
        flyerName = "KiteFest-Talent";
    }

    var source = "/images/flyers/" + flyerName + ".jpg";
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
