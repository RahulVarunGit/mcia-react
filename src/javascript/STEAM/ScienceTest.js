import { useState } from 'react';
import '../../styles/Home.css';
import STEAMnav from '../../STEAM-Nav';
import Wip from '../.././wip';

const STEAM2024 = () => {

  return (

    <div className="container">
      <STEAMnav ></STEAMnav>
      <div>
        <Wip ></Wip>
      </div>

    </div>


  );
}
export default STEAM2024;
