import { useState } from 'react';
import '../styles/Home.css';
import Scanner from "../components/Scanner";
import { useParams } from 'react-router-dom';


const Scan = () => {
    const { name } = useParams();



    return (
        <div className="container">
            <div><h2>Test</h2></div>
            <div>
                <div>

                </div>
            </div>
        </div>
    );
}
export default Scan;
