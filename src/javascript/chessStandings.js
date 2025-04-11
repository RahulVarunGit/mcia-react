import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const ChessStandings = () => {
    const [pairings, setPairings] = useState([]);
    const [playerDetails, setPlayerDetails] = useState([]);
    var maxRound;
    var g1Class, g2Class, g3Class, g4Class, g5Class;
    g1Class = g2Class = g3Class = g4Class = g5Class = "btn btn-secondary ";

    const pathname = useLocation().pathname;
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const lastSegment = pathSegments.pop();
    const hrefPairings = "/chess/Pairings/" + lastSegment;

    //const playerDetailsURL = "http://10.0.0.42:4000/playerDetails/" + lastSegment;
    //const pairingURL = "http://10.0.0.42:4000/pairings/" + lastSegment;

    //const playerDetailsURL = "http://node-atlas-env.eba-2akpeutx.us-east-1.elasticbeanstalk.com/playerDetails/" + lastSegment;
    //const pairingURL = "http://node-atlas-env.eba-2akpeutx.us-east-1.elasticbeanstalk.com/pairings/" + lastSegment;

    const playerDetailsURL = "https://chess.rv-gaming.com/playerDetails/" + lastSegment;
    const pairingURL = "https://chess.rv-gaming.com/pairings/" + lastSegment;

    useEffect(() => {
        fetch(playerDetailsURL)
            .then(response => response.json())
            .then(data => {
                setPlayerDetails(data);
            })
            .catch(error => {
                console.error('There was an error fetching the playerDetails!', error);
            });
    }, []);

    function getData() {
        switch (lastSegment) {
            case "g1":
                g1Class = "btn btn-primary";
                break;
            case "g2":
                g2Class = "btn btn-primary ";
                break;
            case "g3":
                g3Class = "btn btn-primary ";
                break;
            case "g4":
                g4Class = "btn btn-primary ";
                break;

            case "g5":
                g5Class = "btn btn-primary ";
                break;
        }
    }

    getData();



    return (
        <div className="container">

            <p >&nbsp;</p>
            <div className="row">
                <h4 className="center-align"><b ><u >2025 MCIA Chess Tournament - Standings</u></b></h4>
                <h4 className="center-align"><b ></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><a type="button" class="btn btn-primary" href={hrefPairings}>Click here for Pairings</a></h4>
            </div>

            <div><hr class="hr-line"></hr></div>
            <div>
                <h4 className="center-align">
                    <a type="button" style={{ margin: '3px' }} class={g1Class} href="/chess/standings/g1">LowerPrimary</a>
                    <a type="button" style={{ margin: '3px' }} class={g2Class} href="/chess/standings/g2">Upper Primary</a>
                    <a type="button" style={{ margin: '3px' }} class={g3Class} href="/chess/standings/g3">Elimentary</a>
                    <a type="button" style={{ margin: '3px' }} class={g4Class} href="/chess/standings/g4">Middle</a>
                    <a type="button" style={{ margin: '3px' }} class={g5Class} href="/chess/standings/g5">Open</a></h4>
            </div>

            <div className="row">

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="center-align">Position</th>
                            <th scope="col" className="center-align">Player</th>
                            <th scope="col" className="center-align">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerDetails.map((player, pos) => (
                            <tr>
                                <td className="center-align" width="15%">{pos + 1}</td>
                                <td className="" width="70%"> &nbsp; &nbsp; <img className="" src="/images/base/India-USA-Flag.jpg" width="40px" /> &nbsp;  <b>{player.Name}</b> &nbsp; ({player.Rating})</td>
                                <td className="center-align" width="15px" > {player.Score.toFixed(1)}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            <div><hr class="hr-line"></hr></div>

        </div>




    );
}
export default ChessStandings;
