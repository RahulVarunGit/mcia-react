import {useState} from 'react';
import '../styles/Home.css';

const About = () => {

  return(

    <div className="container">

  <div>
  <h1 className="fbt-title"><img src="/images/homePage/Logo.jpg"alt="" width="40" height="40" className="rounded"/>  for a <span className="fbt-title-sub">better</span> tomorrow </h1>
  <h1 className="fbt-tag-line">…Eliminating the gap between abundance and need</h1>
  <p >&nbsp;</p>
  </div>

  <div><hr class="hr-line"></hr></div>

  <p >&nbsp;</p>
  <div className="row">

  <div className="col-sm">

  <p className="center-align"><i className="fa fa-check-circle bigFont"></i></p>
  <h2 className="center-align"><b>Accountability</b></h2>
  <p >&nbsp;</p>
  <h3 className="center-align-light text-justify ">Promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.</h3>
  </div>

  <div className="col-sm">

  <p className="center-align"><i className="fa fa-cubes bigFont"></i></p>
  <h2 className="center-align"><b>Sustainable Philanthropy</b></h2>
  <p >&nbsp;</p>
  <h3 className="center-align-light text-justify ">We believe in hope and hope for a better tomorrow.We demonstrate in thought and action a firm commitment to social justice and diversity.</h3>
  </div>

  <div className="col-sm">

  <p className="center-align"><i  className="fa fa-users bigFont"></i></p>
  <h2 className="center-align"><b>Nurturing Future Generations</b></h2>
  <p >&nbsp;</p>
  <h3 className="center-align-light text-justify ">We believe in hope and hope for a better tomorrow.We demonstrate in thought and action a firm commitment to social justice and diversity.</h3>
  </div>

  </div>

  <div><hr class="hr-line"></hr></div>

  <p >&nbsp;</p>
  <div className="row">
  <h2 ><b >Our Beliefs and Behaviors</b></h2>
  </div>

  <div className="row">

  <ul>
  <li className="bullet"><h4 >We believe in hope and hope for a better tomorrow.</h4></li>
  <li className="bullet"><h4 >We demonstrate in thought and action a firm commitment to social justice and diversity.</h4></li>
  <li className="bullet"><h4 >We seek to provide support that is both sustainable and culturally sensitive.</h4></li>
  <li className="bullet"><h4 >We espouse transparency and integrity in all we do.</h4></li>
  <li className="bullet"><h4 >We collaborate in all endeavors and seek to empower others.</h4></li>
  <li className="bullet"><h4 >We impart the importance of servant leadership to others, including youth.</h4></li>
  </ul>

  </div>

  <p >&nbsp;</p>
  <div className="row">
  <h2 ><b >Five Tenets of FBT Giving</b></h2>
  </div>

  <div className="row">

  <ul>
  <li className="bullet"><h4 >We comprehensively vet all projects, ensuring they are non-political and non-religious;</h4></li>
  <li className="bullet"><h4 >We create sustainability;</h4></li>
  <li className="bullet"><h4 >We require representation by a liaison personally known to the board at the site of all global projects;</h4></li>
  <li className="bullet"><h4 >We provide support using local vendors to enhance local economies;</h4></li>
  <li className="bullet"><h4 >We ensure that at least 98% of total funds raised go directly toward the projects we support.</h4></li>
  </ul>

  </div>

  <div><hr class="hr-line"></hr></div>

  <h1 className="mission">“Our mission is to promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.”</h1>
  </div>





  );
}
export default About;
