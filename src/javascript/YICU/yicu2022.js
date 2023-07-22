import {useState} from 'react';
import '../../styles/Home.css';
import YICUnav from '../.././YICU-Nav';

const yicu2022 = () => {

  return(



    <div className="container">
    <YICUnav ></YICUnav>
    <div>
    <p className="center-align"><img src="/images/YICU/2022/YICU2022.png"alt="YICU 2022" width="200" height="100" className="rounded"></img></p>
    </div>

    <div><hr class="hr-line"></hr></div>

    <p >&nbsp;&nbsp;</p>
    <div className="row">

    <div className="col-sm">

    <table className="table table-borderless">

    <tbody>

    <tr className="row">
    <td className="col-md-12 center-align"><img src="/images/YICU/2022/2022-YICU-Winners.JPG"alt="2022 YICU Winners"  className="rounded" width="80%"></img></td>
    </tr>

    <tr className="row">

    <td className="col-md">
    <h4 className="col-md-12 center-align"><span className="font-weight-bold"><b>YICU Winners</b>, 13 Recipients of 2022 YICU Service Awards</span></h4>
    <h4 className="col-md-12 center-align">Sonika Tamilarasan, Lauren Cutler, Bradley Ross Jackson, Morgan Mouser, Anusha Nadkarni, Shloka Ravinuthala, Shrikar Chennuru, Claire Campbell, Willie Holton Halbert, River Stokes Dorsey, Hasna Mohamed Jamal, Manu Gadhiraju</h4>
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-12 center-align"><img src="/images/YICU/2022/2022-YICU-Nominees.JPG"alt="2022 YICU Nominees"  className="rounded" width="80%"></img></td>
    </tr>

    <tr className="row">

    <td className="col-md">
    <h4 className="col-md-12 center-align"><span className="font-weight-bold"><b>YICU Nominees</b>, young leaders who were nominated for 2022 YICU Service Awards </span></h4>
    <h4 className="col-md-12 center-align">Claire Campbell, Brooklyn Symone Caffey, Reilley Owens, Hasna Mohamed Jamal, Manu Gadhiraju, Lauren Monk, Amaya Hursey, Garrick Dickerson, Morgan Mouser, Kamaya Coleman, Anusha Nadkarni, River Stokes Dorsey, Shloka Ravinuthala, Lauren Cutler, Siddhi Hindurao, Sonika Tamilarasan, Shrikar Chennuru, Sristi Ganta</h4>
    </td>

    </tr>

    </tbody>

    </table>

    </div>

    </div>

    </div>



  );
}
export default yicu2022;
