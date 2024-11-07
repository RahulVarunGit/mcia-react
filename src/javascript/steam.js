import { useState } from 'react';
import '../styles/Home.css';
import STEAMnav from '.././STEAM-Nav';

const steam = () => {

  return (



    <div className="container">

      <div>
        <h2 className="center-align"><b>STEAM Olympics 2025</b></h2>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm">

          <p className="center-align"><img src="/images/steam/FBT.png" alt="" width="100%" className="rounded" /></p>
        </div>

        <div className="col-sm">

          <p className="center-align"><img src="/images/steam/IWU.png" alt="" width="100%" className="rounded" /></p>
        </div>

      </div>

      <div>
        <h5 className="justify c737373"><a href="/"><b>For A Better Tomorrow (FBT)</b></a> and <a href="https://www.iwu.edu/"><b>Illinois Wesleyan University (IWU)</b></a> <b>Proudly Present the 2nd Annual STEAM Olympics!. </b></h5>
      </div>

      <div>
        <h5 className="justify c737373">We're excited to welcome students in grades 1 through 12 for an inspiring four-day event focused on exploring the worlds of Science, Technology, Engineering, Arts, and Mathematics (STEAM)! Mark your calendars for <b>February 15, 16, 22, and 23, 2025.</b></h5>
      </div>

      <div>
        <h5 className="justify c737373">The STEAM Olympics provides a unique opportunity for students of all ages to engage in hands-on experiences, learning, and friendly competition across a variety of STEAM disciplines. Through this event, young thinkers and problem-solvers can delve into subjects that foster creativity, curiosity, and innovation.</h5>
      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm">

          <h4 className="center-align"><b >Event Purpose & Impact</b></h4>
          <h5 className="justify c737373"><i >STEAM Olympics is more than a competition it's a collaborative effort between FBT and IWU to inspire the next generation while supporting impactful initiatives. Proceeds from this event will help fund scholarships and support grants for projects on both local and global scales. In particular, FBT will award financial need-based scholarships to IWU students involved in the Council of Inclusion and Awareness (CIA), promoting social justice and community engagement.</i></h5>
        </div>

      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm">

          <h4 className="center-align"><b >Event Schedule & Activities</b></h4>
          <h5 className="justify c737373"><i >Below, you ll find the details for each contest, including eligibility criteria, dates, times, and enrollment fees. To learn more about each activity, simply click on the activity name.</i></h5>
        </div>

      </div>

      <div className="row">

        <table className="table table-bordered">

          <thead>

            <tr>
              <th scope="col" className="center-align">Activity</th>
              <th scope="col" className="center-align">Grades*</th>
              <th scope="col" className="center-align">Date/Time</th>
              <th scope="col" className="center-align">Enrollment Fees</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td rowspan="4" className="center-align align-middle">3D Printing Workshop</td>
              <td className="center-align">2, 3, 4, 5<br />
                (Option #1)</td>
              <td className="center-align">Sunday, Feb 23<br />
                8:30 am -10 am</td>
              <td rowspan="4" className="center-align align-middle">$25 (before 12/ 31)<br />
                $30 (After 12/31)</td>
            </tr>

            <tr>
              <td className="center-align">2, 3, 4, 5<br />
                (Option #2)</td>
              <td className="center-align">Sunday, Feb 23<br />
                12:30 pm - 2 pm</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8<br />
                (Option #1)</td>
              <td className="center-align">Sunday, Feb 23<br />
                10:30 am - Noon</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8<br />
                (Option #2)</td>
              <td className="center-align">Sunday, Feb 23<br />
                12:30 pm - 2 pm</td>
            </tr>

            <tr>
              <td rowspan="3" className="center-align align-middle">Art Workshop</td>
              <td className="center-align">1, 2 & 3</td>
              <td className="center-align">Sunday, Feb 23 <br />
                10:30 am - Noon</td>
              <td rowspan="3" className="center-align align-middle">$25 (before 12/ 31)<br />
                $30 (After 12/31)</td>
            </tr>

            <tr>
              <td className="center-align">4,5</td>
              <td className="center-align">Sunday, Feb 23<br />
                10:30 am - Noon</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8</td>
              <td className="center-align">Sunday, Feb 23<br />
                O12:30 pm - 2 pm</td>
            </tr>

            <tr>
              <td rowspan="2" className="center-align align-middle">Design-athon</td>
              <td className="center-align align-middle">6, 7 & 8</td>
              <td rowspan="2" className="center-align align-middle">Saturday, Feb 15<br />
                1 pm - 5 pm<br />
                Sunday, Feb 16<br />
                12:30 pm - 5:30 pm</td>
              <td rowspan="2" className="center-align">$25 (before 12/ 31)<br />
                $30 (After 12/31)<br />
                Sibling discounts available

              </td>
            </tr>

            <tr>
              <td className="center-align">9, 10, 11 & 12</td>
            </tr>

            <tr>
              <td rowspan="3" className="center-align align-middle">Essay Writing</td>
              <td className="center-align">1, 2 & 3</td>
              <td className="center-align">Saturday, Feb 22<br />
                8:30 am - 10 am</td>
              <td rowspan="3" className="center-align align-middle">$25 (before 12/ 31)<br />
                $30 (After 12/31)</td>
            </tr>

            <tr>
              <td className="center-align">4,5</td>
              <td className="center-align">Saturday, Feb 22<br />
                10:30 am - Noon</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8</td>
              <td className="center-align">Saturday, Feb 22<br />
                12:30 pm - 2 pm</td>
            </tr>

            <tr>
              <td rowspan="3" className="center-align align-middle">Math Test</td>
              <td className="center-align">1, 2 & 3</td>
              <td className="center-align">Saturday, Feb 22<br />
                2:30 pm - 4 pm</td>
              <td rowspan="3" className="center-align align-middle">$25 (before 12/ 31)<br />
                $30 (After 12/31)</td>
            </tr>

            <tr>
              <td className="center-align">4,5</td>
              <td className="center-align">Saturday, Feb 22<br />
                2:30 pm - 4 pm</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8</td>
              <td className="center-align">Saturday, Feb 22<br />
                4:30 pm - 6 pm</td>
            </tr>

            <tr>
              <td rowspan="3" className="center-align align-middle">Science Fair</td>
              <td className="center-align">1, 2 & 3</td>
              <td rowspan="3" className="center-align align-middle">Sunday, Feb 23<br />
                8:30 am - 9 am (Set Up)<br />
                2 pm  - 4 pm (Demo & Judging)</td>
              <td rowspan="3" className="center-align align-middle">$100 per team <br />
                (Up to 4 students)</td>
            </tr>

            <tr>
              <td className="center-align">4,5</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8</td>
            </tr>

            <tr>
              <td rowspan="3" className="center-align align-middle">Science Test</td>
              <td className="center-align">1, 2 & 3</td>
              <td className="center-align">Saturday, Feb 22<br />
                10:30 am - Noon</td>
              <td rowspan="3" className="center-align align-middle">$25 (before 12/ 31)<br />
                $30 (After 12/31)</td>
            </tr>

            <tr>
              <td className="center-align">4,5</td>
              <td className="center-align">Saturday, Feb 22<br />
                8:30 am - 10 am</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8</td>
              <td className="center-align">Saturday, Feb 22<br />
                8:30 am - 10 am</td>
            </tr>

            <tr>
              <td rowspan="4" className="center-align align-middle">Speech & Debate Competition</td>
              <td className="center-align">1, 2 & 3</td>
              <td className="center-align">Saturday, Feb 22<br />
                12:30 pm - 2 pm</td>
              <td rowspan="4" className="center-align align-middle">$25 (before 12/ 31)<br />
                $30 (After 12/31)</td>
            </tr>

            <tr>
              <td className="center-align">4,5</td>
              <td className="center-align">Saturday, Feb 22<br />
                12:30 pm - 2 pm</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8</td>
              <td className="center-align">Saturday, Feb 22<br />
                10:30 am - Noon</td>
            </tr>

            <tr>
              <td className="center-align">9, 10, 11 & 12</td>
              <td className="center-align">Saturday, Feb 22<br />
                2:30 pm - 4 pm</td>
            </tr>

            <tr>
              <td rowspan="3" className="center-align align-middle">Spelling Bee</td>
              <td className="center-align">1, 2 & 3</td>
              <td className="center-align">Saturday, Feb 22<br />
                4:30 pm - 6 pm</td>
              <td rowspan="3" className="center-align align-middle">$25 (before 12/ 31)<br />
                $30 (After 12/31)</td>
            </tr>

            <tr>
              <td className="center-align">4,5</td>
              <td className="center-align">Saturday, Feb 22<br />
                4:30 pm - 6 pm</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8</td>
              <td className="center-align">Saturday, Feb 22<br />
                2:30 pm - 4 pm</td>
            </tr>

            <tr>
              <td rowspan="4" className="center-align align-middle">STEAM Quest</td>
              <td className="center-align">1, 2 & 3</td>
              <td className="center-align">Sunday, Feb 23<br />
                2 pm - 3:30 pm</td>
              <td rowspan="4" className="center-align align-middle">$25 (before 12/ 31)<br />
                $30 (After 12/31)</td>
            </tr>

            <tr>
              <td className="center-align">4,5</td>
              <td className="center-align">Sunday, Feb 23<br />
                2 pm - 3:30 pm</td>
            </tr>

            <tr>
              <td className="center-align">6, 7 & 8</td>
              <td className="center-align">Sunday, Feb 23<br />
                8:30 am - 10 am</td>
            </tr>

            <tr>
              <td className="center-align">9, 10, 11, 12</td>
              <td className="center-align">Sunday, Feb 23<br />
                12:30 pm - 2 pm</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm">

          <h4 className="center-align"><b >Special Activities & Tours</b></h4>
          <h5 className="justify c737373"><i >Registered participants and their families will have access to optional lab tours to experience real-world applications of STEAM fields. The following labs are available unless noted otherwise:</i></h5>
        </div>

      </div>

      <div className="row">

        <div className="col-sm">

          <ul>
            <li ><b>Physics Lab (ISU):</b> Friday, Feb 22, 6 pm - 7:30 pm</li>
            <li ><b>Biology Lab (IWU):</b> Sunday, Feb 23, 3:30 pm - 4 pm</li>
            <li ><b>Chemistry Lab (IWU):</b> Sunday, Feb 23, 4 pm - 4:30 pm</li>
            <li ><b>Physics Lab (IWU):</b> Sunday, Feb 23, 4:30 pm - 5 pm</li>
          </ul>

        </div>

      </div >

      <div className="row">

        <div className="col-sm">

          <h5 className="justify c737373"><i ><b>Please Note:</b> Dates and times are subject to change. All events and registration fees are listed in more detail within the registration form.</i></h5>
        </div>

      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm">

          <h4 className="center-align"><b >Award Ceremony & Keynote Address</b></h4>
          <h5 className="justify c737373"><i >Celebrate our participants  achievements with an award ceremony featuring a keynote address from a prominent leader in the STEM field, scheduled for Sunday, Feb 23, from 6 pm - 7:30 pm. Medals will be awarded to the top scorers per grade, and all participants will receive a <b>participation certificate</b>. This is a great way to enjoy a low-stakes challenge and celebrate your skills in different STEAM activities.</i></h5>
        </div>

      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div className="row">

        <div className="col-sm">

          <h4 className="center-align"><b >Share the Excitement!</b></h4>
          <h5 className="justify c737373"><i >Help us spread the word about STEAM Olympics by sharing our event flier! <a href="/steam"><b>Access our event flier here.</b></a> </i></h5>
        </div>

      </div>

      <p >&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <h4 className="center-align"><b >Ready to Register?</b></h4>
          <h5 className="justify c737373"><i >Sign up now to secure your spot in one or more activities. Early registration discounts apply! <a href="http://tinyurl.com/FBT-STEAM" >Register here</a>.</i></h5>
          <p >&nbsp;</p>
          <h5 className="justify c737373"><i >Join us for a fantastic celebration of creativity, learning, and innovation in STEAM!</i></h5>
        </div>

      </div>

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

    </div>





  );
}
export default steam;
