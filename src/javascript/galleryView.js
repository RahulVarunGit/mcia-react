import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import galleryData from '../data/galleryData.json';
import parse from 'html-react-parser';


const GalleryView = () => {

  const { name } = useParams();
  var galleryName = "2025-MLK-Award-Ceremony";
  var galleryDisc = "";
  var gallerySel = ["MLK25-001.jpg"];

  console.log("entered ##########");
  console.log(name);

  galleryData.galleries.map((gallery, index) => {
    if (name.localeCompare(gallery.link) == 0) {
      gallerySel = gallery.pics;
      galleryName = gallery.name;
      galleryDisc = gallery.details;
    }
  });


  var bld = "";
  var cnt = 0;

  gallerySel.map((pic, index) => {
    if (index % 3 == 0) {
      bld = bld + "<div className=\"row\">    ";
    }
    bld = bld + "<div className=\"col-sm\"> <p className=\"center-align\">  ";
    bld = bld + "<a href=\"/galleryItem/" + pic + "\"> <img src=\"/images/gallery/" + pic + "\" alt=\"\" width=\"200\"  class=\"rounded\"> </a>";
    bld = bld + "</p>   </div>";
    //bld = bld + "</p> <h5 className = \"center-align\"> <a href=\"/gallery/" + pic + " \"> " + gallery.name + " </a> </h5>  </div>";
    if (index % 3 == 2) {
      bld = bld + "<p> &nbsp; </p> </div>";
    }
    cnt++;
  });
  if (cnt % 3 == 1) {
    bld = bld + "<div className=\"col-sm\"></div><div className=\"col-sm-4\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  } else if (cnt % 3 == 2) {
    bld = bld + "<div className=\"col-sm\"></div>";
    bld = bld + "</div>";
    bld = bld + "<div><hr className=\"hr-line\"></hr></div>";
  }

  if (gallerySel.length % 3 != 0) {
    bld = bld + "</div>";
  }



  return (
    <div className="container">
      <div>
        <h2 className="center-align">
          <b>{galleryName}</b>
        </h2>
        <h4 className="center-align">
          {galleryDisc}
        </h4>
      </div>
      <div>
        <hr className="hr-line"></hr>
        <p>&nbsp;</p>
      </div>
      {parse(bld)}
    </div>
  );
}
export default GalleryView;
