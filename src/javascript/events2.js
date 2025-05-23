import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import eventData from '../data/eventData.json';
import parse from 'html-react-parser';


const Events2 = () => {
    const { name } = useParams();

    var upcoming = "<div><hr className=\"hr-line\"></hr></div>";
    var completed = "<div><hr className=\"hr-line\"></hr></div>";

    eventData.events.map((event, index) => {
        if (event.type == "U") {
            upcoming = upcoming + "<div className=\"row\">";
            upcoming = upcoming + "<div className=\"col-sm-3\">";
            upcoming = upcoming + "<p className=\"center-align\"><a href=\"/event/" + event.link + "\"><img src=\"/images/flyers/" + event.flyer + "\" alt=\"\" width=\"100%\" className=\"rounded\" /></a></p>";
            upcoming = upcoming + "</div>";
            upcoming = upcoming + "<div className=\"col-sm-9\">";
            upcoming = upcoming + " <h5 ><b ><u ><a href=\"/event/" + event.link + "\">" + event.name + "</a></u></b></h5>";
            upcoming = upcoming + "<h5 >Where : " + event.where + "</h5>";
            upcoming = upcoming + "<h5 >" + event.where2 + "</h5>";
            upcoming = upcoming + "<h5 >When : " + event.when + "</h5>";
            upcoming = upcoming + "<h5 ><a type=\"button\" className=\"btn btn-primary btn-lg\" href=\"/event/" + event.link + "\">" + event.btn + "</a></h5>";
            upcoming = upcoming + "</div></div>";
            upcoming = upcoming + "<div><hr className=\"hr-line\"></hr></div>";
        } else {
            completed = completed + "<div className=\"row\">";
            completed = completed + "<div className=\"col-sm-3\">";
            completed = completed + "<p className=\"center-align\"><a href=\"/galleryView/" + event.galleryLink + "\" > <img src=\"/images/flyers/" + event.flyer + "\" alt=\"\" width=\"100%\" className=\"rounded\" /></a></p>";
            completed = completed + "</div>";
            completed = completed + "<div className=\"col-sm-9\">";
            completed = completed + " <h5 ><b ><u ><a href=\"/galleryView/" + event.galleryLink + "\" > " + event.name + "</a ></u ></b ></h5 > ";
            completed = completed + "<h5 >Where : " + event.where + "</h5>";
            completed = completed + "<h5 >" + event.where2 + "</h5>";
            completed = completed + "<h5 >When : " + event.when + "</h5>";
            console.log("---gal link : " + event.galleryLink);
            if (event.galleryLink === undefined) {
                completed = completed + "<h5 ><a type=\"button\" className=\"btn btn-primary btn-lg\" href=\"/gallery/ \">" + event.btnGallery + "</a></h5>";
            } else {
                completed = completed + "<h5 ><a type=\"button\" className=\"btn btn-primary btn-lg\" href=\"/galleryView/" + event.galleryLink + "\">" + event.btnGallery + "</a></h5>";
            }

            completed = completed + "</div></div>";
            completed = completed + "<div><hr className=\"hr-line\"></hr></div>";
        }


    });


    return (
        <div className="container">
            <div>
                <h2 className="fbt-title"><img src="/images/base/logo.png" alt="" height="80" className="rounded" />  </h2>
            </div>
            <div><hr className="hr-line"></hr></div>
            <div className="row">
                <h3 className="center-align"><b >Upcoming Events</b></h3>
            </div>
            {parse(upcoming)}
            <div className="row">
                <h3 className="center-align"><b >Past Events</b></h3>
            </div>
            {parse(completed)}

        </div>
    );
}
export default Events2;
