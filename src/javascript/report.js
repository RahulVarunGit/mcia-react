import {useState} from 'react';
import '../styles/Home.css';

const Report = () => {

  return(

    <div className="container">

<div>
<h2 className="center-align"><b>2023 Annual Report</b></h2>
</div>

<div><hr class="hr-line"></hr></div>

<div>
<iframe src="/pdf/2023AnnualReport.pdf"  width="100%" height="550px"/>
<div><hr class="hr-line"></hr></div>

<h2 className="fbt-tag-line">“Our mission is to promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.”</h2>
</div>

</div>




  );
}
export default Report;