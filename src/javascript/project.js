import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData.json';
import parse from 'html-react-parser';


const Project = () => {
    const { name } = useParams();
    var projectName = name;


    //if (name.localeCompare("ygc") == 0) {
    //    projectName = "YGC";
    // }

    var loc = 0;
    projectData.projects.map((project, index) => {
        if (project.uriName.localeCompare(projectName) == 0) {
            loc = index;
        }
    });

    //var source = "/images/flyers/" + projectName + ".jpg";
    return (
        <div className="container">
            <div className="row">

                <div className="col-sm">
                    <p className="center-align"><img src={"/images/projects/" + projectData.projects[loc].logo} alt="" width="150" height="150" className="rounded" /></p>
                    <h2 className="center-align"><a href={projectData.projects[loc].uri}><b>{projectData.projects[loc].name}</b></a></h2>
                    <p >&nbsp;</p>
                    <h5 className="justify  "><i >{parse(projectData.projects[loc].desc)}</i></h5>
                </div>

            </div>
            {(typeof projectData.projects[loc].pic1) != "undefined" &&

                <div className="row">
                    <p >&nbsp;&nbsp;</p>
                    <div className="col-sm">
                        <p className="center-align"><img src={"/images/projects/" + projectData.projects[loc].pic1} alt="" className="rounded" /></p>
                        <h5 className="center-align">{parse(projectData.projects[loc].desc1)}</h5>
                    </div>
                </div>
            }


        </div>
    );
}
export default Project;
