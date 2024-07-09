import { useState } from 'react';
import '../styles/Home.css';
import Scanner from "../components/Scanner";
import { useParams } from 'react-router-dom';
import scanData from "../data/scanData.json";
import parse from 'html-react-parser';


var bld = "";

const testFun = (() => {
    console.log("in funciton");
});

const submitKey = (() => {
    console.log("submit key");
});


const Scan = () => {
    const { name } = useParams();
    bld = "";
    bld = bld + "<h2>Enter code</h2>";
    bld = bld + "<input type=\"text\" id=\"scanKey\"/>";
    bld = bld + "<input type=\"button\" value=\"submit\" onClick={submitKey}/>";
    bld = bld + "<input type=\"button\" value=\"test\" onClick={testFun} />"


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };


    return (
        <div className="container">

            <input type="button" value="test" onClick={testFun} />
            <div className="App">
                <h1> Scan Student QR Code:</h1>


            </div>
            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );

}
export default Scan;
