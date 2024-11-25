import { useState } from 'react';
import '../../styles/Home.css';
import { useParams } from 'react-router-dom';
import steamEventData from '../../data/steamEventData.json';
import steamUserData from '../../data/steamUserData.json';

const UserSchedule = () => {
    const { id } = useParams();

    var currentUserId = 0;
    var currentUserName = "";
    var currentUserActivities = [];

    steamUserData.steamUsers.map((user, index) => {
        if (id.localeCompare(user.id) == 0) {
            currentUserId = user.id;
            currentUserName = user.name;
            currentUserActivities = Array.from(user.activities);
        }
    });


    currentUserActivities.map((actId) => {
        alert(actId);
    });

    if (currentUserId != 0) {
        alert("found");

    }

    steamEventData.steamEvents.map((event, index) => {

    });

    //flyerData.flyers.map((flyer, index) => {
    //    if (name.localeCompare(flyer.link) == 0) {
    //        flyerName = flyer.file;
    //    }
    //});

    //console.log(flyerName);

    //var source = "/images/flyers/" + flyerName;

    return (
        <div className="container">
            <div>
                <div>
                    <h5>test</h5>
                </div>
            </div>
        </div>
    );
}
export default UserSchedule;
