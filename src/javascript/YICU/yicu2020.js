import {useState} from 'react';
import '../../styles/Home.css';
import Wip from '../.././wip';
import YICUnav from '../.././YICU-Nav';

const yicu2020 = () => {

  return(

    <div className="container">
    <YICUnav ></YICUnav>
    <div>
    <Wip ></Wip>
    </div>

    </div>


  );
}
export default yicu2020;
