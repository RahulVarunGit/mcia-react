import {useState} from 'react';
import '../../styles/Home.css';
import Wip from '../../wip';
import YGCnav from '../../YGC-Nav';

const ygc2027 = () => {

  return(

    <div className="container">
    <YGCnav ></YGCnav>
    <div>
    <Wip ></Wip>
    </div>

    </div>


  );
}
export default ygc2027;