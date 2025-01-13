import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import galleryData from '../data/galleryData.json';
import parse from 'html-react-parser';


const Gallery = () => {
  const { name } = useParams();
  // var flyerName = "YGC";
  //var source = "/images/flyers/" + flyerName + ".jpg";
  var bld = "";
  var cnt = 0;

  galleryData.galleries.map((gallery, index) => {
    if (index % 3 == 0) {
      bld = bld + "<div className=\"row\">    ";
    }
    bld = bld + "<div className=\"col-sm\"> <p className=\"center-align\">  ";
    bld = bld + "<a href=\"/galleryView/" + gallery.link + "\"> <img src=\"/images/gallery/" + gallery.profile + "\" alt=\"\" width=\"200\" height=\"200\" class=\"rounded-circle\"> </a>";
    bld = bld + "</p> <h5 className = \"center-align\"> <a href=\"/galleryView/" + gallery.link + " \"> " + gallery.name + " </a> </h5>  </div>";
    if (index % 3 == 2) {
      bld = bld + "<p> &nbsp; </p> </div>";
    }
    cnt++;
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

  if (galleryData.galleries.length % 3 != 0) {
    bld = bld + "</div>";
  }

  return (
    <div className="container">
      <div>
        <h2 className="center-align">
          <b>Galleries</b>
        </h2>
      </div>
      <div>
        <hr className="hr-line"></hr>
        <p>&nbsp;</p>
      </div>
      {parse(bld)}
    </div>
  );
}
export default Gallery;
