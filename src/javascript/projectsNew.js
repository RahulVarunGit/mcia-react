import { useState } from 'react';
import '../styles/Home.css';
import projectData from '../data/projectData.json';
import parse from 'html-react-parser';


const projects = () => {
  var bld = "";
  var cnt = 0;

  projectData.projects.map((project, index) => {
    if (project.type == "G") {
      if (cnt % 3 == 0) {
        bld = bld + "<div className=\"row\">";
      }
      bld = bld + "<div className=\"col-sm\">";
      bld = bld + "<p className=\"center-align\"><a href=\"/project/" + project.uriName + " \"><img src=\"/images/projects/" + project.logo + "\" alt=\"\" width=\"150\" height=\"150\" className=\"rounded\" /></a></p>"
      bld = bld + "<h4 className=\"center-align\"><a href=\"/project/" + project.uriName + " \"><b>" + project.name + "</b></a></h4>"
      bld = bld + "<h6 className=\"center-align\">" + project.shortDesc + "</h6>";
      bld = bld + "</div>";
      if (cnt % 3 == 2) {
        bld = bld + "</div>";
        bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
        bld = bld + "<p >&nbsp;&nbsp;</p>";
      }
      cnt++;
    }
  });

  if (cnt % 3 == 1) {
    bld = bld + "<div className=\"col-sm\"></div><div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  } else if (cnt % 3 == 2) {
    bld = bld + "<div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  }

  bld = bld + "<div> <h4 className=\"center-align\"><b >Here are the local projects currently supported by For A Better Tomorrow:</b></h4>  </div>"
  bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  cnt = 0;

  projectData.projects.map((project, index) => {
    if (project.type == "L") {
      console.log(">>>" + project.name + "-" + cnt);
      if (cnt % 3 == 0) {
        bld = bld + "<div className=\"row\">";
      }
      bld = bld + "<div className=\"col-sm\">";
      bld = bld + "<p className=\"center-align\"><a href=\"/project/" + project.uriName + " \"><img src=\"/images/projects/" + project.logo + "\" alt=\"\" width=\"150\" height=\"150\" className=\"rounded\" /></a></p>"
      bld = bld + "<h4 className=\"center-align\"><a href=\"/project/" + project.uriName + " \"><b>" + project.name + "</b></a></h4>"
      bld = bld + "<h6 className=\"center-align\">" + project.shortDesc + "</h6>";
      bld = bld + "</div>";
      if (cnt % 3 == 2) {
        bld = bld + "</div>";
        bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
        bld = bld + "<p >&nbsp;&nbsp;</p>";
      }
      cnt++;
    }
  });

  if (cnt % 3 == 1) {
    bld = bld + "<div className=\"col-sm\"></div><div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  } else if (cnt % 3 == 2) {
    bld = bld + "<div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  }

  //console.log(bld);



  return (

    <div className="container">

      <p >&nbsp;</p>
      <div><hr class="hr-line"></hr></div>

      <div>
        <h4 className="center-align"><b >Here are the global projects previously supported by For A Better Tomorrow:</b></h4>
      </div>

      <div><hr class="hr-line"></hr></div>

      {parse(bld)}

    </div>



  );
}
export default projects;
