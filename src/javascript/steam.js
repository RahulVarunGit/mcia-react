import { useState } from 'react';
import '../styles/Home.css';
import STEAMnav from '.././STEAM-Nav';

const steam = () => {

  return (



    <div className="container">
      <STEAMnav ></STEAMnav>
      <div>
        <h2 class="center-align"><b ></b></h2>
        <p class="center-align"><img src="/images/flyers/STEAM2025.png" alt="" width="100%" className="rounded" /></p>
        <div><hr class="hr-line"></hr></div>

        <h2 class="fbt-tag-line"> Our mission is to promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders. </h2>
      </div>

    </div>


  );
}
export default steam;
