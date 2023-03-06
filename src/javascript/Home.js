import {useState} from 'react';
import '../styles/Home.css';

const Home = () => {
  const [name, setName] = useState('mario');

  const handleClick=(e) => {
    console.log('hello', 'hello',  e);
    setName('luigi');
  }
  const handleClick2=(name,e) => {
    console.log('hello ' + name);
    console.log('event:' , e.target);
  }
  return(


      <div className="container">
        <div className="imgdiv">
          <img className="fullImg" src="/images/homePage/Home-Slider.png" alt="For Better Tomorrow"  />
        </div>

        <div>
     <div>
       <h2	className="fbt-title">
       <img src="/images/homePage/Logo.jpg" alt="" width="40" height="40" class="rounded"/> for a <span className="fbt-title-sub">better </span>
 tomorrow
       </h2>
       <h2  className="fbt-tag-line">…Eliminating the gap between abundance and need</h2>

     </div>
       <p>&nbsp;</p>
       <h4>For A Better Tomorrow (FBT) promotes social justice by meeting
           needs in the local community and the world through accountable,
           sustainable philanthropy and by nurturing future generations of
           servant leaders. FBT believes in hope and hope for a better tomorrow.
           FBT demonstrates in thought and action a firm commitment to social
           justice and diversity.
       </h4>

   </div>
   <p>&nbsp;</p>

   <div className="row">

		<div className="col-sm">

			<h4 className="center-align">
				<a href="about/"><strong>Accountability</strong></a>
			</h4>
			<h4 className="center-align">
				<a href="https://forbettertomorrow.org/about/" target="_self"
					aria-label="link to https://forbettertomorrow.org/about/"><i
					className="fa fa-check-circle"></i></a>
			</h4>
		</div>

		<div className="col-sm">

			<h4 className="center-align">
				<a href="about/"><strong>Sustainable Philanthropy</strong></a>
			</h4>
			<h4 className="center-align">
				<a href="https://forbettertomorrow.org/services/projects/"
					target="_self"
					aria-label="link to https://forbettertomorrow.org/services/projects/"><i
					className="fa fa-cubes"></i></a>
			</h4>
		</div>

		<div class="col-sm">

			<h4 class="center-align">
				<a href="about/"><strong>Nurturing Future Generations</strong></a>
			</h4>
			<h4 class="center-align">
				<a href="https://forbettertomorrow.org/services/ygc/" target="_self"
					aria-label="link to https://forbettertomorrow.org/services/ygc/"><i
					class="fa fa-users"></i></a>
			</h4>
		</div>

	</div>


  </div>



  );
}
export default Home;
