import { useState } from 'react';
import '../../styles/Home.css';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import SearchBar from '../../components/SearchBar';
import steamUserData from '../../data/steamUserData.json';


const Schedule = () => {

    const [userId, setUserId] = useState("");
    const [userUrl, setUserUrl] = useState("");
    var userActStr = "";

    const handleChange = event => {
        setUserId(event.target.value);
        setUserUrl("/steam/schedule/" + event.target.value);
    }

    //const click = () => {
    //    alert(userId + ":" + userUrl);
    //}
    //<button onClick={click}>click me</button> -- this should be in return 
    //testing comment change

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
            <div className="flex-container">
                <SearchBar placeholder="Enter name..." data={steamUserData} />
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
export default Schedule;
