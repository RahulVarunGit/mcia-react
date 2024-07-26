import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const Flyers = () => {
    const { name } = useParams();
    // var flyerName = "YGC";
    //var source = "/images/flyers/" + flyerName + ".jpg";
    var bld = "";
    var cnt = 0;

    flyerData.flyers.map((flyer, index) => {
        if (index % 3 == 0) {
            bld = bld + "<div className=\"row\">    ";
        }
        bld = bld + "<div className=\"col-sm\"> <p className=\"center-align\">  ";
        bld = bld + "<a href=\"/flyer/" + flyer.link + "\"> <img src=\"/images/flyers/" + flyer.file + "\" alt=\"\" width=\"150\" height=\"200\" class=\"rounded\"> </a>";
        bld = bld + "</p> <h5 className = \"center-align\"> <a href=\"/flyer/" + flyer.link + " \"> " + flyer.name + " </a> </h5>  </div>";
        if (index % 3 == 2) {
            bld = bld + "<p> &nbsp; </p> </div>";
        }
        cnt++;
    });
    if (cnt % 3 == 1) {
        bld = bld + "<div className=\"col-sm\"></div><div className=\"col-sm\"></div>";
        bld = bld + "</div>";
        bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
    } else if (cnt % 3 == 2) {
        bld = bld + "<div className=\"col-sm\"></div>";
        bld = bld + "</div>";
        bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
    }

    if (flyerData.flyers.length % 3 != 0) {
        bld = bld + "</div>";
    }

    return (
        <div className="container">
            <div>
                <h2 className="center-align">
                    <b>Flyers</b>
                </h2>
            </div>
            <div>
                <hr className="hr-line"></hr>
                <p>&nbsp;</p>
            </div>
            {parse(bld)}
        </div>
    );
}
export default Flyers;
