import {useState} from 'react';
import '../styles/Home.css';
import YGCnav from '.././YGC-Nav'

const YGC = () => {

  return(



    <div className="container">
    <YGCnav ></YGCnav>
    <div>
    <p className="center-align"><img src="/images/ygc/logo.png"alt="YGC 2023" width="150" height="150" className="rounded center center-align" ></img></p>
    </div>

    <div>
    <h2 className="fbt-title"><img src="/images/homePage/Logo.jpg"alt="" width="40" height="40" className="rounded"/>  for a <span className="fbt-title-sub">better</span> tomorrow </h2>
    </div>

    <div>
    <h3 className="center-align c-gray"><b >Youth Global Citizen (YGC)</b></h3>
    </div>

    <p >&nbsp;&nbsp;</p>
    <div>
    <h4 className="justify c737373">Youth Global Citizen (YGC) is an experiential program for local high school students that develops leadership skills and imparts the significance of service and philanthropy.  Participants develop self-awareness, leadership skills, and learn about diversity, poverty, values, and socioeconomic disparities in our community and in our world. By the end of the program, participants will have invested over fifty hours in program activities and information sessions.</h4>
    </div>

    <div>
    <h4 className="justify c737373">However, YGC entails much more than leadership training; it also provides participants with an opportunity to use their newfound skills and awareness to help others and in so doing make a positive contribution to their community and their world.</h4>
    </div>

    <p >&nbsp;&nbsp;</p>
    <div>
    <h4 className="center-align c737373"><b >Learning Sessions</b></h4>
    </div>

    <div>
    <h4 className="justify c737373">The YGC program covers a wide range of topics during the learning sessions, which are facilitated by community members with a depth of knowledge and expertise.</h4>
    </div>

    <p >&nbsp;&nbsp;</p>
    <div>
    <h4 className="center-align c737373"><b >Learning Session Topics</b></h4>
    </div>

    <div>
    <h4 className="justify c737373">Learning session topics addressed in YGC may include:</h4>
    </div>

    <div>

    <table className="table table-borderless">

    <tr>
    <td >Self-Awareness Development</td>
    <td >Fundraising Strategies</td>
    </tr>

    <tr>
    <td >Personal Strength Identification</td>
    <td >For a Better Tomorrow Operating Model</td>
    </tr>

    <tr>
    <td >Social Justice</td>
    <td >Presentation Skills</td>
    </tr>

    <tr>
    <td >Servant Leadership</td>
    <td >Values Clarification</td>
    </tr>

    <tr>
    <td >Team Building and Collaboration</td>
    <td >Emotional Intelligence</td>
    </tr>

    </table>

    </div >

    <p >&nbsp;&nbsp;</p>
    <div>
    <h4 className="center-align c737373"><b >Project Overview</b></h4>
    </div>

    <div>
    <h4 className="justify c737373">Participants work actively to support a local non-profit organization, and this active involvement allows participants to put their developing leadership skills to immediate use. By pairing learning with action, YGC ensures that participants are knowledgeable about how they can become engaged citizens and equips participants to do so through hands-on experience in the program.</h4>
    </div>

    <p >&nbsp;&nbsp;</p>
    <div>
    <h4 className="center-align cBlue"><b ><a href="http://tinyurl.com/ygc-nom">Click here to Nominate a Student</a></b></h4>
    </div>

    </div>



  );
}
export default YGC;
