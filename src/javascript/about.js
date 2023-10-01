import {useState} from 'react';
import '../styles/Home.css';

const About = () => {

  return(

    <div className="container">

<div>
<h2 className="fbt-title"><img src="/images/homePage/Logo.jpg"alt="" width="40" height="40" className="rounded"/>  for a <span className="fbt-title-sub">better</span> tomorrow </h2>
<h2 className="fbt-tag-line">…Eliminating the gap between abundance and need</h2>
<p >&nbsp;</p>
</div>

<div className="row">

<div className="col-sm">

<p className="center-align"><a href="/newsLetter"><img src="/images/base/news-icon.png" alt="" width="150" height="150" className="rounded"  /></a></p>
<h3 className="center-align"><a href="/newsLetter"><b >News Letters</b></a></h3>
</div>

<div className="col-sm">

<p className="center-align"><a href="/board"><img src="/images/base/board.png" alt="" width="150" height="150" className="rounded" /></a></p>
<h3 className="center-align"><a href="/board"><b >Board Members</b></a></h3>
</div>

<div className="col-sm">

<p className="center-align"><a href="/committee"><img src="/images/base/committee.jpg" alt="" width="150" height="150" className="rounded" /></a></p>
<h3 className="center-align"><a href="/committee"><b >Committees</b></a></h3>
</div>

</div>

<div><hr class="hr-line"></hr></div>

<div className="row">

<div className="col-sm">

<p className="center-align"><i className="fa fa-check-circle bigFont"></i></p>
<h3 className="center-align"><b>Accountability</b></h3>
<p >&nbsp;</p>
<h4 className="center-align-light text-justify ">Promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.</h4>
</div>

<div className="col-sm">

<p className="center-align"><i className="fa fa-cubes bigFont"></i></p>
<h3 className="center-align"><b>Sustainable Philanthropy</b></h3>
<p >&nbsp;</p>
<h4 className="center-align-light text-justify ">We believe in hope and hope for a better tomorrow.We demonstrate in thought and action a firm commitment to social justice and diversity.</h4>
</div>

<div className="col-sm">

<p className="center-align"><i  className="fa fa-users bigFont"></i></p>
<h3 className="center-align"><b>Nurturing Future Generations</b></h3>
<p >&nbsp;</p>
<h4 className="center-align-light text-justify ">We believe in hope and hope for a better tomorrow.We demonstrate in thought and action a firm commitment to social justice and diversity.</h4>
</div>

</div>

<div><hr class="hr-line"></hr></div>

<p >&nbsp;</p>
<div className="row">
<h3 ><b >Our Beliefs and Behaviors</b></h3>
</div>

<div className="row">

<ul>
<li className="bullet"><h5 >We believe in hope and hope for a better tomorrow.</h5></li>
<li className="bullet"><h5 >We demonstrate in thought and action a firm commitment to social justice and diversity.</h5></li>
<li className="bullet"><h5 >We seek to provide support that is both sustainable and culturally sensitive.</h5></li>
<li className="bullet"><h5 >We espouse transparency and integrity in all we do.</h5></li>
<li className="bullet"><h5 >We collaborate in all endeavors and seek to empower others.</h5></li>
<li className="bullet"><h5 >We impart the importance of servant leadership to others, including youth.</h5></li>
</ul>

</div>

<p >&nbsp;</p>
<div className="row">
<h3 ><b >Five Tenets of FBT Giving</b></h3>
</div>

<div className="row">

<ul>
<li className="bullet"><h5 >We comprehensively vet all projects, ensuring they are non-political and non-religious;</h5></li>
<li className="bullet"><h5 >We create sustainability;</h5></li>
<li className="bullet"><h5 >We require representation by a liaison personally known to the board at the site of all global projects;</h5></li>
<li className="bullet"><h5 >We provide support using local vendors to enhance local economies;</h5></li>
<li className="bullet"><h5 >We ensure that at least 98% of total funds raised go directly toward the projects we support.</h5></li>
</ul>

</div>

<div><hr class="hr-line"></hr></div>

<h2 className="mission">“Our mission is to promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.”</h2>
</div>



  );
}
export default About;
