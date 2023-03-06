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
					className="fa fa-users"></i></a>
			</h4>
		</div>

	</div>
  <p>&nbsp;</p>
	<p>&nbsp;</p>
  <hr	className="hr-line"></hr>
  <div>
	<h3 className="center-align">
		<b>Here are the global projects currently supported by For A
			Better Tomorrow:</b>
	</h3>
	</div>
  <div>
		<hr	className="hr-line"></hr>
	</div>

	<p>&nbsp;</p>


  <div className="row">

		<div className="col-sm">

			<p  className="center-align">
				<img src="/images/projects/Maya-Book-Project.jpg" alt="" width="150"
					height="150" className="rounded" />
			</p>
			<h4  className="center-align">
				<a
					href="https://forbettertomorrow.org/services/projects/maya-book-project/"><b>Maya
						Book Project</b></a>
			</h4>
			<h6 cen_light className="center-align">The book is an extremely important resource for
				educators and students. Its message about protecting the environment
				and caring for the forests is so important for students. The book
				reinforces reading and writing in K’iche’, English, and Spanish, and
				it connects students to the roots of their culture and ancestors. It
				is a family story of someone from the students’ own community and
				culture.</h6>
			<h5 className="center-align">
				<span className="afs center-align">Approved Financial Support - <span
					className="afsa">$8,400</span></span>
			</h5>
		</div>

		<div className="col-sm">

			<p  className="center-align">
				<img src="/images/projects/nirman.jpg" alt="" width="150"
					height="150" className="rounded" />
			</p>
			<h4  className="center-align">
				<a href="https://forbettertomorrow.org/services/projects/nirmaan/"><b>Nirmaan</b></a>
			</h4>
			<h6 className="center-align">Nirmaan is a constructive citizen movement for an
				empowered India, thereby making the world a better place to live in.
				Nirmaan was founded in 2005 by a group of BITS-Pilani University
				students with a passion for humanity and to fulfil their
				responsibility towards the less privileged brothers &amp; sisters.</h6>
			<h5 className="center-align">
				<span className="afs">Approved Financial Support - <span
					className="afsa"></span></span>
			</h5>
		</div>

		<div className="col-sm">

			<p  className="center-align">
				<img src="/images/projects/SafePassage.jpg" alt="" width="150"
					height="150" className="rounded" />
			</p>
			<h4 className="center-align">
				<a
					href="https://forbettertomorrow.org/services/projects/safe-passage/"><b>Safe
						Passage</b></a>
			</h4>
			<h6 className="center-align">Safe Passage, a school in Guatemala that serves
				500 low income students. The school is located within the parameters
				of the largest active garbage dump in Central America. FBT fund the
				installation of an air filtration system at the school, which the
				board approved. This effort will ensure that the students and staff
				have a healthy environment in which to learn and teach.</h6>
			<h5 className="center-align">
				<span className="afs">Approved Financial Support - <span
					className="afsa">$8,500</span></span>
			</h5>
		</div>

	</div>

</div>



  );
}
export default Home;
