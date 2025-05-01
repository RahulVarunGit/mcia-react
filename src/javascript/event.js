import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import eventData from '../data/eventData.json';
import parse from 'html-react-parser';

const Event = () => {
    const { name } = useParams();
    var bld = "";



    eventData.events.map((event, index) => {
        if (name.localeCompare(event.link) == 0) {
            bld = bld + "<p >&nbsp;</p>";
            bld = bld + "<div className=\"row\">";
            bld = bld + "<h4 className=\"center-align\"><b ><u >" + event.name + "</u></b></h4>";
            bld = bld + "<h4 className=\"center-align\"><b ></b></h4>";
            bld = bld + "</div>";
            bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
            bld = bld + "<div>";
            bld = bld + "<h4 className=\"center-align\">Where : " + event.where + "</h4>";
            bld = bld + "<h4 className=\"center-align\"> " + event.where2 + "</h4>";
            bld = bld + "<h4 className=\"center-align\">When : " + event.when + "</h4>";
            bld = bld + "<h4 className=\"center-align \"><a className=\"btn btn-primary btn-lg\" type=\"button\" href=\"" + event.zeffyLink + "\">Register here</a></h4>";
            if (event.add != null) {
                bld = bld + event.add;
            }
            bld = bld + "</div>";
            bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
            bld = bld + "<div>";
            bld = bld + "<h4 className=\"center-align\"><b ></b></h4>";
            bld = bld + "<p className=\"center-align\"><a href=\"" + event.zeffyLink + "\"><img src=\"/images/flyers/" + event.flyer + "\" alt=\"\" width=\"80%\" className=\"rounded\" /></a></p>";
            bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
            bld = bld + "</div>";
            bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
            bld = bld + "</div>";


        }
    });




    return (
        <div className="container">
            {parse(bld)}
        </div>
    );
}
export default Event;
