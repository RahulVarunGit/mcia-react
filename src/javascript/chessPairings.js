
import '../styles/Home.css';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import flyerData from '../data/flyerData.json';
import parse from 'html-react-parser';


const ChessPairings = () => {

    const [pairings, setPairings] = useState([]);
    const [playerDetails, setPlayerDetails] = useState([]);
    var maxRound;
    var g1Class, g2Class, g3Class, g4Class, g5Class;
    g1Class = g2Class = g3Class = g4Class = g5Class = "btn btn-secondary ";

    const pathname = useLocation().pathname;
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const lastSegment = pathSegments.pop();
    const hrefStandings = "/chess/Standings/" + lastSegment;

    //const playerDetailsURL = "http://10.0.0.42:4000/playerDetails/" + lastSegment;
    //const pairingURL = "http://10.0.0.42:4000/pairings/" + lastSegment;

    const playerDetailsURL = "http://node-atlas-env.eba-2akpeutx.us-east-1.elasticbeanstalk.com/playerDetails/" + lastSegment;
    const pairingURL = "http://node-atlas-env.eba-2akpeutx.us-east-1.elasticbeanstalk.com/" + lastSegment;


    useEffect(() => {


        fetch(playerDetailsURL)
            .then(response => response.json())
            .then(data => {
                setPlayerDetails(data);
                //console.log("playerDetails Retrieved");
            })
            .catch(error => {
                console.error('There was an error fetching the playerDetails!', error);
            });

        fetch(pairingURL)
            .then(response => response.json())
            .then(data => {
                setPairings(data);
                console.log("pairings Retrieved");
                //console.log(data);
            })
            .catch(error => {
                console.error('There was an error fetching the pairings!', error);
            });


    }, []);

    function getData() {
        maxRound = Math.max(...[...pairings.values()].map(obj => obj.Round));
        if (maxRound < 0) { maxRound = 1; }

        playerDetails.map(player => {
            player.Color = "unpaired";
            player.Board = "NA";
            pairings.map(pairing => {
                if (pairing.White == player.ID & pairing.Round == maxRound) {
                    player.Board = pairing.Board;
                    player.Color = "white";
                    player.Opponent = pairing.Black;
                }
                if (pairing.Black == player.ID & pairing.Round == maxRound) {
                    player.Board = pairing.Board;
                    player.Color = "black";
                    player.Opponent = pairing.White;
                    //console.log("*********", player.Board);
                }
            })
            //console.log("-------------------", player.Name);
        });
        playerDetails.map(player => {
            if (player.Color === "unpaired") {
                player.OpponantObj = { ID: "", Name: "", Score: "", Rating: "" };
            } else {
                player.OpponantObj = [...playerDetails.values()].find(obj => obj.ID === player.Opponent);
            }
        });

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
                <h4 className="center-align"><b ><u >2025 MCIA Chess Tournament - Pairings</u></b></h4>
                <h4 className="center-align"><b ></b></h4>
            </div>

            <div><hr class="hr-line"></hr></div>

            <div>
                <h4 className="center-align"><a type="button" class="btn btn-primary" href={hrefStandings}>Click here for Standings</a></h4>
            </div>
            <div><hr class="hr-line"></hr></div>
            <div>
                <h4 className="center-align">
                    <a type="button" style={{ margin: '3px' }} class={g1Class} href="/chess/pairings/g1">Lower Primary</a>
                    <a type="button" style={{ margin: '3px' }} class={g2Class} href="/chess/pairings/g2">Upper Primary</a>
                    <a type="button" style={{ margin: '3px' }} class={g3Class} href="/chess/pairings/g3">Elimentary</a>
                    <a type="button" style={{ margin: '3px' }} class={g4Class} href="/chess/pairings/g4">Middle</a>
                    <a type="button" style={{ margin: '3px' }} class={g5Class} href="/chess/pairings/g5">Open</a></h4>
            </div>


            <h3 className="center-align">Round : {maxRound}</h3>

            <div className="row">

                <table className="table table-bordered">

                    <thead>

                        <tr>
                            <th scope="col" className="center-align">Board</th>
                            <th scope="col" className="center-align">Player</th>
                            <th scope="col" className="center-align">Opponant</th>
                        </tr>


                    </thead>
                    <tbody>
                        {playerDetails.map(player => (
                            <tr>
                                <td className="center-align">{player.Board}</td>
                                <td className="" width="45%"> &nbsp; <img className="" src="/images/base/India-USA-Flag.jpg" width="40px" /> <b>{player.Name}</b> &nbsp; ({player.Color = "" ? "unpaired" : player.Color}, {player.Score.toFixed(1)}, {player.Rating})</td>
                                {(player.OpponantObj).Name === "" ? <td></td> :
                                    <td className="" width="45%"> &nbsp; <img className="" src="/images/base/India-USA-Flag.jpg" width="40px" /> <b>{(player.OpponantObj).Name}</b> &nbsp; ({(player.OpponantObj).Color}, {(player.OpponantObj).Score}, {(player.OpponantObj).Rating})</td>
                                }
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
            <div><hr class="hr-line"></hr></div>


        </div>




    );
}
export default ChessPairings;
