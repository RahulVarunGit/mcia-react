import { useState } from 'react';
import '../styles/Home.css';
import YICUnav from '.././YICU-Nav';

const YICU = () => {

  return (




    <div className="container">
      <YICUnav ></YICUnav>
      <div>
        <p className="center-align"><img src="/images/YICU/2024/YICU2024.png" alt="YICU 2023" width="200" height="100" className="rounded"></img></p>
      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <table className="table table-borderless">

            <tbody>

              <tr className="row">
                <td className="col-md-12 center-align"><img src="/images/YICU/2024/YICU-Winners2.png" alt="2024 YICU Winners" className="rounded" width="80%"></img></td>
              </tr>

              <tr className="row">

                <td className="col-md">
                  <h5 className="col-md-12 center-align"><span className="font-weight-bold"><b>YICU Winners</b>, 10 Recipients of Individual 2024 YICU Service Awards</span></h5>
                  <h5 className="col-md-12 center-align">Top Row : Jacob Kossler, Dhruv Ravinuthala, Disha Rai, Kamorah Carter, Sohum Mehta</h5>
                  <h5 className="col-md-12 center-align">Bottom row : Emily drew, Shreya Nallamothu, Amy Dederich, Joshitha Bodavula, Shriyans gurijala</h5>
                </td>

              </tr>

              <tr className="row">
                <td className="col-md-12 center-align"><img src="/images/YICU/2024/YICU-Winners1.png" alt="2024 YICU Winners" className="rounded" width="80%"></img></td>
              </tr>

              <tr className="row">

                <td className="col-md">
                  <h5 className="col-md-12 center-align"><span className="font-weight-bold"><b>YICU Winners</b></span></h5>
                  <h5 className="col-md-12 center-align">Team Award: 2025 NCHS IT Cohort (Nikitha Philip, Dhyan Chaudhari, Megan Heidrick, Vedha Garapati, Lillian Campbell, Carson Goodwin and Logan Jaynes,)</h5>
                  <h5 className="col-md-12 center-align">Youth Mentor Award: Sudhir Pai</h5>
                  <h5 className="col-md-12 center-align">Advocate Award : Threshold to Hope Inc.</h5>
                  <h5 className="col-md-12 center-align">Ovation and Community Hero Award : Brandon Wood and Shriyans Gurijala</h5>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>


  );
}
export default YICU;
