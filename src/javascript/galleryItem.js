import { useState } from 'react';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';
import flyerData from '../data/flyerData.json';

const GalleryItem = () => {
  const { name } = useParams();

  console.log("Entered*****");
  var source = "/images/gallery/" + name;
  console.log(name);

  return (
    <div className="container">
      <div>
        <div>
          <p className="center-align rounded"><img src={source} alt="" width="80%" /></p>
        </div>
      </div>
    </div>
  );
}
export default GalleryItem;
