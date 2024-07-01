import { useState } from 'react';
import '../styles/Home.css';
import Scanner from "../components/Scanner";
import { useParams } from 'react-router-dom';


const Scan = () => {
    const { name } = useParams();



    return (
        <div className="container">
            <div className="App">
                <h1> Scan Student QR Code:</h1>
                <Scanner />

            </div>
        </div>
    );
}
export default Scan;
