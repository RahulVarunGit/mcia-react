import {useState} from 'react';
import '../../styles/Home.css';
import Wip from '../.././wip';
import YGCnav from '../.././YGC-Nav';

const ygc2022 = () => {

  return(



    <div className="container">
    <YGCnav ></YGCnav>
    <div>
    <p className="center-align"><img src="/images/ygc/2022/YGC_2022.jpg"alt="YGC 2022" width="200" height="100" className="rounded center center-align"></img></p>
    </div>

    <div>
    <h3 className="center-align"><b >Class of 2022</b></h3>
    </div>

    <div><hr class="hr-line"></hr></div>

    <p >&nbsp;&nbsp;</p>
    <div className="row">

    <div className="col-sm">

    <table className="table table-borderless">

    <tbody>

    <tr className="row">
    <td className="col-md-12 center-align"><img src="/images/ygc/2022/2022-YGC-Graduates-scaled.jpg"alt="Class of 2022"  className="rounded center-align" width="70%"></img></td>
    </tr>

    <tr className="row">

    <td className="col-md">
    <h5 className="center-align"><span className="font-weight-bold">Students who graduated from For A Better Tomorrow’s summer youth leadership program - Youth Global Citizen (YGC)</span></h5>
    <h5 className="center-align">Shloka Ravinuthala, Claire Campbell, Siddhi Hindurao, Shriyans Gurijala, Reilley Owens, Prathyum Reddy Bada, Manu Gadhiraju, Mahashvin (Hash) Vinothasha, Lauren Cutler, Avery Hedican </h5>
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-12 center-align"><img src="/images/ygc/2022/2022-YGC-Team-CHCC-scaled.jpg"alt="className of 2022"  className="rounded center-align" width="70%"></img></td>
    </tr>

    <tr className="row">

    <td className="col-md">
    <h5 className="center-align"><span className="font-weight-bold">Youth Global Citizen (YGC) project team that raised $6,078.18 for CHCC.</span></h5>
    <h5 className="center-align">Arjun Kumarakrishnan, Prathyum Reddy Bada, Theresa Lage, Lauren Cutler, Shloka Ravinuthala, Shriyans Gurijala and Reilley Owens</h5>
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-12 center-align"><img src="/images/ygc/2022/2022-YGC-Team-Integrity-scaled.jpg"alt="className of 2022"  className="rounded center-align"  width="70%"></img></td>
    </tr>

    <tr className="row">

    <td className="col-md">
    <h5 className="center-align"><span className="font-weight-bold">Youth Global Citizen (YGC) project team that raised $6,775.14 for Integrity Counseling.</span></h5>
    <h5 className="center-align">Siddhi Hindurao, Kristin Manzi, Manu Gadhiraju, Avery Hedican, Claire Campbell and Mahashvin (Hash) Vinothasha</h5>
    </td>

    </tr>

    </tbody>

    </table>

    </div>

    </div>

    </div>



  );
}
export default ygc2022;
