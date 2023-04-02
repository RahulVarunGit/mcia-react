import {useState} from 'react';
import '../styles/Home.css';

const projects = () => {

  return(

    <div className="container">

  <p >&nbsp;</p>
  <div><hr class="hr-line"></hr></div>

  <div>
  <h4 className="center-align"><b >Here are the global projects previously supported by For A Better Tomorrow:</b></h4>
  </div>

  <div><hr class="hr-line"></hr></div>

  <p >&nbsp;</p>
  <div className="row">

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/Maya-Book-Project.jpg" alt="" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://forbettertomorrow.org/services/projects/maya-book-project/"><b>Maya Book Project</b></a></h4>
  <h6 className="center-align">The book is an extremely important resource for educators and students. Its message about protecting the environment and caring for the forests is so important for students. The book reinforces reading and writing in K’iche’, English, and Spanish, and it connects students to the roots of their culture and ancestors. It is a family story of someone from the students’ own community and culture.</h6>
  <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$8,400</span></span></h5>
  </div>

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/El-Porvenir.jpg" alt="" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://forbettertomorrow.org/el-porvenir-2/"><b>El Porvenir</b></a></h4>
  <h6 className="center-align">El Porvenir works to provide water and sanitation to communities in Nicaragua. They likewise facilitate watershed management programs, which “promotes water flow, increases food security, and reduces the impact of climate change.” To this end, this project is intended to support the water distribution system for Regadillo, Nicaragua.</h6>
  <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$12,500</span></span></h5>
  </div>

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/SafePassage.jpg" alt="" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://forbettertomorrow.org/services/projects/safe-passage/"><b>Safe Passage</b></a></h4>
  <h6 className="center-align">Safe Passage, a school in Guatemala that serves 500 low income students.  The school is located within the parameters of the largest active garbage dump in Central America. FBT fund the installation of an air filtration system at the school, which the board approved.  This effort will ensure that the students and staff have a healthy environment in which to learn and teach.</h6>
  <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$8,500</span></span></h5>
  </div>

  </div>

  <div><hr class="hr-line"></hr></div>

  <p >&nbsp;&nbsp;</p>
  <div className="row">

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/Yabal.jpg" alt="" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://forbettertomorrow.org/yabal-2/"><b>Yabal Guatemala</b></a></h4>
  <h6 className="center-align">Yabal Guatemala promotes the empowerment of indigenous women and their families in rural Guatemalan highland communities through a focus on their economic self-sufficiency.</h6>
  <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$7,500</span></span></h5>
  </div>

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/IHF.jpg" alt="" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://forbettertomorrow.org/ihf-2/"><b>Integral Heart Foundation</b></a></h4>
  <h6 className="center-align">Our school is currently home to 80 children with 6 learning programs, a Teacher-Training Program and serves 1,500 meals and snacks every month. Since 2011,  our programs have delivered classNamees and support to over 1,200 students and their families in  Guatemala.</h6>
  <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">$8,400</span></span></h5>
  </div>

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/KYC.jpg" alt="" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://forbettertomorrow.org/kyc-2/"><b>Kenya Konnect Youth Consortium</b></a></h4>
  <h6 className="center-align">KYC implements HIV/AIDS Prevention, Sexual and Reproductive Health Services, peacebuilding, environmental conservation, and economic strengthening programs targeting young people.</h6>
  <h5 className="center-align"><span className="afs">Approved Financial Support - <span className="afsa">7,230</span></span></h5>
  </div>

  </div>

  <div><hr class="hr-line"></hr></div>

  <p >&nbsp;&nbsp;</p>
  <div><hr class="hr-line"></hr></div>

  <div>
  <h4 className="center-align"><b >Here are the local projects currently supported by For A Better Tomorrow:</b></h4>
  </div>

  <div><hr class="hr-line"></hr></div>

  <p >&nbsp;</p>
  <div className="row">

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/Sunny.jpg" alt="Sunnyside Community Garden and Food Forest" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://www.facebook.com/westbloomingtonactivegarden/"><b>Sunnyside Community Garden and Food Forest</b></a></h4>
  <h6 className="center-align">The mission of Sunnyside Community Garden and Food Forest is to provide fresh, organic produce to low-income families in West Bloomington and to facilitate learning opportunities for children and adults through gardening, harvesting, and marketing food grown on site, using sustainable practices.</h6>
  <h5 className="center-align"><span className="afs"></span></h5>
  </div>

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/Charm.jpg" alt="CHARM, Inc. Neighborhood Block Party" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://www.facebook.com/FamilyCharm35/"><b>CHARM, Inc. Neighborhood Block Party</b></a></h4>
  <h6 className="center-align">Social Service in Bloomington, Illinois</h6>
  <h5 className="center-align"><span className="afs"></span></h5>
  </div>

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/project-oz.png" alt="Projet OZ" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://www.projectoz.org/"><b>Projet OZ</b></a></h4>
  <h6 className="center-align">Our mission is to make a positive difference for young people. We care what happens to young people. We care what happens to families. We care about making our community a safe, healthy, happy place to live.</h6>
  <h5 className="center-align"><span className="afs"></span></h5>
  </div>

  </div>

  <div><hr class="hr-line"></hr></div>

  <p >&nbsp;&nbsp;</p>
  <div className="row">

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/dreams-are-possible.jpg" alt="Dreams are Possible" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://dreamsarepossible.org/"><b>Dreams are Possible</b></a></h4>
  <h6 className="center-align">Dreams are possible is one of the nonprofit beneficiaries from Kite Fest 2019. Mary and Feli have served our community for many years. Kite Fest and For A Better Tomorrow were glad to have supported Dreams are Possible and Labyrinth Outreach Service for Women (YWCA), two nonprofit founded by Mary and Feli.</h6>
  <h5 className="center-align"><span className="afs"></span></h5>
  </div>

  <div className="col-sm">

  <p className="center-align"><img src="/images/projects/Path-1.png" alt="PATH" width="150" height="150" className="rounded" /></p>
  <h4 className="center-align"><a href="https://www.pathcrisis.org/"><b>PATH</b></a></h4>
  <h6 className="center-align">PATH runs a 24/7 hotline with phones being answered by well-trained volunteers. In 2018, they want to expand opportunities for people to reach out for help. They offer telephone response; by dialing 2-1-1 people can talk about problems or needs and we can link callers to solutions. However, young adults do a lot of texting and we want to offer this as an option. They purchased software to make this a reality with the funds from the Kite Fest 2018.</h6>
  <h5 className="center-align"><span className="afs"></span></h5>
  </div>

  </div>

  <p >&nbsp;&nbsp;</p>
  <div><hr class="hr-line"></hr></div>

  </div>



  );
}
export default projects;
