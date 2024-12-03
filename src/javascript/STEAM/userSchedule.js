import { useState } from 'react';
import '../../styles/Home.css';
import { useParams } from 'react-router-dom';
import steamEventData from '../../data/steamEventData.json';
import steamUserData from '../../data/steamUserData.json';
import parse from 'html-react-parser';

const UserSchedule = () => {

    const [userId, setUserId] = useState("");
    const [userUrl, setUserUrl] = useState("");
    var userActStr = "";

    const handleChange = event => {
        setUserId(event.target.value);
        setUserUrl("/steam/schedule/" + event.target.value);
    }



    const { id } = useParams();

    var currentUserId = 0;
    var currentUserName = "";
    var currentUserActivities = [];
    var userActStr = "";
    var actStr = "";

    steamUserData.steamUsers.map((user, index) => {
        if (id.toUpperCase().localeCompare(user.id.toUpperCase()) == 0) {
            currentUserId = user.id;
            currentUserName = user.name;
            currentUserActivities = Array.from(user.activities);
        }
        console.log("entered" + currentUserId);
    });

    currentUserActivities.push("G001");
    currentUserActivities.push("G002");

    if (currentUserId == 0) {
        userActStr = "<div><h5 className=\"center-align\"><b >Student ID " + id.toUpperCase() + " not found. </b></h5></div>"
    }
    else {
        //userActStr = "<div className=\"row\"><table className=\"table table-borderless  \"><thead></thead><tbody><tr>";
        //userActStr = userActStr + "<td  className=\"text-center  \"><b>Student ID :</b></td>";
        //userActStr = userActStr + "<td  className=\"text-center  \"><b>" + currentUserId + "</b></td>";
        //userActStr = userActStr + "</tr><tr>"
        //userActStr = userActStr + "<td  className=\"text-center  \"><b>Student Name :</b></td>";
        //userActStr = userActStr + "<td  className=\"text-center \"><b>" + currentUserName + "</b></td>";
        //userActStr = userActStr + "</tr></tbody></table></div>";
        userActStr = "<div><h5 className=\"center-align\">Student ID: " + currentUserId + "</h5></div>";
        userActStr = userActStr + "<div><h5 className=\"center-align\">Student Name: " + currentUserName + "</h5></div>";

        actStr = "<div className=\"row\"><table className=\"table table-bordered  \"><thead>";
        actStr = actStr + "<tr>";
        actStr = actStr + "<th  className=\"center-align align-middle \">" + "Registered Activity" + "</th>"
        actStr = actStr + "<th  className=\"center-align align-middle \">" + "Activity Date" + "</th>"
        actStr = actStr + "<th  className=\"center-align align-middle \">" + "Start Time" + "</th>"
        actStr = actStr + "<th  className=\"center-align align-middle \">" + "End Time" + "</th>"
        actStr = actStr + "</tr>";
        actStr = actStr + "</thead><tbody>";
        currentUserActivities.map((actId) => {
            //alert(actId);


            steamEventData.steamEvents.map((event, index) => {
                if (actId.toUpperCase().localeCompare(event.activity) == 0) {

                    actStr = actStr + "<tr>";
                    actStr = actStr + "<td  className=\"center-align align-middle \">" + event.name + "</td>"
                    actStr = actStr + "<td  className=\"center-align align-middle \">" + event.date + "</td>"
                    actStr = actStr + "<td  className=\"center-align align-middle \">" + event.startTime + "</td>"
                    actStr = actStr + "<td  className=\"center-align align-middle \">" + event.stopTime + "</td>"
                    actStr = actStr + "</tr>";
                }
            });
        });
    }
    actStr = actStr + "</tbody></table></div>"
    actStr = actStr + "<h6 className=\"center-align\"><a type=\"button\" class=\"btn btn-primary\" href=\"/steam/schedule\">Clear</a></h6>"
    actStr = actStr + "<div><hr className=\"hr-line\"></hr></div>";
    actStr = actStr + "<div><h5 className=\"center-align\"><b >Enter another user id:</b></h5></div>";


    userActStr = userActStr + actStr;
    console.log(actStr);

    if (currentUserId != 0) {
        //alert("found");

    }



    //flyerData.flyers.map((flyer, index) => {
    //    if (name.localeCompare(flyer.link) == 0) {
    //        flyerName = flyer.file;
    //    }
    //});

    //console.log(flyerName);

    //var source = "/images/flyers/" + flyerName;

    return (


        <div className="container">

            <div className="row">

                <div className="col-sm">

                    <p className="center-align"><img src="/images/steam/FBT.png" alt="" width="40%" className="rounded" /></p>
                </div>

                <div className="col-sm">

                    <p className="center-align"><img src="/images/steam/IWU.png" alt="" width="40%" className="rounded" /></p>
                </div>

            </div>

            <div>
                <h4 className="center-align"><b><u>STEAM Olympics 2025 - Schedule</u></b></h4>
            </div>
            <h6 ></h6>
            <p >&nbsp;</p>
            {parse(userActStr)}
            <div className="center-align">
                <lable className="justify c737373"><b >User ID  </b></lable>
                <input type="text" name="user" id="user" value={userId} onChange={handleChange}></input>
                <p ></p>
                <h6 className="center-align"><a type="button" class="btn btn-primary" href={userUrl}>Get user schedule</a></h6>
            </div>

            <p ></p>
            <div><hr class="hr-line"></hr></div>

            <div className="row">

                <div className="col-sm">

                    <h4 className="center-align"><b >Full Event Schedule</b></h4>
                </div>

            </div>

            <div>
                <h2 class="center-align"><b ></b></h2>
                <p class="center-align"><img src="/images/steam/2025/Schedule.png" alt="" width="100%" border="2" className="rounded" /></p>
            </div>

            <div><hr class="hr-line"></hr></div>

        </div>


    );
}
export default UserSchedule;
