import { useState } from 'react';
import '../styles/Home.css';

const About = () => {

  return (

    <div className="container">

      <div>

        <div>
          <h2 className="fbt-title"><img src="/images/base/logo.png" alt="" height="120" className="rounded" />  </h2>
          <p >&nbsp;</p>
        </div>

        <h4 >MCIA was established in 1979 to provide a means of bringing social and cultural events to the then small Indian community of less than 50 families. Since then, MCIA has done significant work for social and cultural development in the Bloomington-Normal community. It continues to play a large role in serving, leading and representing the Indian community.</h4>
      </div>

      <p >&nbsp;</p>
      <p className="center-align"><a href="/events">Please check the Calendar of Events for 2025</a></p>
      <p className="center-align"><a href="/committee">Contact any committee member for more information.</a></p>
      <div><hr class="hr-line"></hr></div>

      <div className="row">
        <h4 className="center-align"><b >Goals</b></h4>
      </div>

      <div className="row">

        <ul>
          <li className="bullet"><h5 >To promote Asian Indian culture and values among its members.</h5></li>
          <li className="bullet"><h5 >To promote participation in community volunteering and charitable activities.</h5></li>
          <li className="bullet"><h5 >To promote leadership, volunteerism, sports, and educational activities for its youth members.</h5></li>
          <li className="bullet"><h5 >To promote cross-cultural awareness and understanding about India and Indian culture in the broader community.</h5></li>
          <li className="bullet"><h5 >To promote collaborations with various organizations to benefit the Bloomington-Normal community.</h5></li>
        </ul>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">
        <h4 className="center-align"><b >MCIA BY-LAWS</b></h4>
      </div>

      <div>
        <h4 className="center-align">MCIA bylaws were approved on October 1st 2016 by a majority of MCIA 2016 members voting  Yes .</h4>
        <h4 className="center-align">Please <a href="" >click here</a> to read the bylaws.</h4>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">
        <h4 className="center-align"><b >LIST OF EVENTS</b></h4>
        <p >&nbsp;</p>
        <h4 className="center-align">MCIA celebrates the following main events :</h4>
      </div>

      <div className="row">

        <ul>
          <li className="list-unstyled"><h5 className="center-align">Jan : Indian Republic Day</h5></li>
          <li className="list-unstyled"><h5 className="center-align">Feb : Youth Open House</h5></li>
          <li className="list-unstyled"><h5 className="center-align">Aug : Indian Independence Day</h5></li>
          <li className="list-unstyled"><h5 className="center-align">Sep : Festival of India</h5></li>
          <li className="list-unstyled"><h5 className="center-align">Nov : Annual Banquet</h5></li>
        </ul>

      </div>

      <div><hr class="hr-line"></hr></div>

      <div className="row">
        <h4 className="center-align"><b >LIST OF PRESIDENTS</b></h4>
      </div>

      <p >&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <ul>
            <li className="list-unstyled"><h5 >1979 - Mr. Sharad Chitgopekar</h5></li>
            <li className="list-unstyled"><h5 >1980 - Mr. Jeevan Patel</h5></li>
            <li className="list-unstyled"><h5 >1981 - Mr. Balwant Singh</h5></li>
            <li className="list-unstyled"><h5 >1982 - Mr. Rao Duvvuri</h5></li>
            <li className="list-unstyled"><h5 >1983 - Mr. Ramesh Chaudhari</h5></li>
            <li className="list-unstyled"><h5 >1984 - Mr. Shri Gupta</h5></li>
            <li className="list-unstyled"><h5 >1985 - Mrs. Usha Kapoor</h5></li>
            <li className="list-unstyled"><h5 >1986 - Mr. V. K. Unni</h5></li>
            <li className="list-unstyled"><h5 >1987 - Mr. Ram Bhat</h5></li>
            <li className="list-unstyled"><h5 >1988 - Mr. Rammohan Mundlapudi</h5></li>
            <li className="list-unstyled"><h5 >1989 - Mrs. Savita Patel</h5></li>
            <li className="list-unstyled"><h5 >1991 - Mrs. Suneeti Chitgopekar</h5></li>
            <li className="list-unstyled"><h5 >1992 - Mrs. Narinder Sethi</h5></li>
            <li className="list-unstyled"><h5 >1993 - Mr. Balwant Singh</h5></li>
            <li className="list-unstyled"><h5 >1994 - Mr. Narendra Jaggi</h5></li>
            <li className="list-unstyled"><h5 >1995 - Mr. Narendra Jaggi</h5></li>
            <li className="list-unstyled"><h5 >1996 - Mrs. Anita Deoskar</h5></li>
            <li className="list-unstyled"><h5 >1997 - Mr. Harish Patel</h5></li>
            <li className="list-unstyled"><h5 >1998 - Mr. Surender Sethi</h5></li>
            <li className="list-unstyled"><h5 >1999 - Mr. Ramesh Chaudhari</h5></li>
            <li className="list-unstyled"><h5 >2000 - Mrs. Asha Chandak      </h5></li>
            <li className="list-unstyled"><h5 >2001 - Mr. Prasanna Mate</h5></li>
            <li className="list-unstyled"><h5 >2002 - Mr. Nilesh(Neal) Shah</h5></li>
            <li className="list-unstyled"><h5 >2003 - Mr. Mandava V Rao</h5></li>
            <li className="list-unstyled"><h5 >2004 - Mr. Gulshan Bhayana</h5></li>
            <li className="list-unstyled"><h5 >2005 - Mr. Chandra Shekara</h5></li>
          </ul>

        </div>

        <div className="col-sm">

          <ul>
            <li className="list-unstyled"><h5 >2006 - Mr. Rakesh Gulati</h5></li>
            <li className="list-unstyled"><h5 >2007 - Mr. Vinod Thaker</h5></li>
            <li className="list-unstyled"><h5 >2008 - Mr. Vinod Nambiar</h5></li>
            <li className="list-unstyled"><h5 >2009 - Mr. Rajendra Joshi</h5></li>
            <li className="list-unstyled"><h5 >2010 - Mr. Ramesh Chilla</h5></li>
            <li className="list-unstyled"><h5 >2011 - Mr. Suresh Krishna</h5></li>
            <li className="list-unstyled"><h5 >2012 - Mrs. Jyotsna Gupta</h5></li>
            <li className="list-unstyled"><h5 >2013 - Mr. Hemant Kale</h5></li>
            <li className="list-unstyled"><h5 >2014 - Mr. Ajay Kalvala</h5></li>
            <li className="list-unstyled"><h5 >2015 - Mrs. Uma Kallakuri</h5></li>
            <li className="list-unstyled"><h5 >2016 - Mrs. Archana Shekara</h5></li>
            <li className="list-unstyled"><h5 >2017 - Mr. Srinivas Mikkilineni</h5></li>
            <li className="list-unstyled"><h5 >2018 - Mr. Ajay Rolla</h5></li>
            <li className="list-unstyled"><h5 >2019 - Mr. Karthik Goteti</h5></li>
            <li className="list-unstyled"><h5 >2020 - Mr. Karthik Goteti</h5></li>
            <li className="list-unstyled"><h5 >2021 - None</h5></li>
            <li className="list-unstyled"><h5 >2022 - None</h5></li>
            <li className="list-unstyled"><h5 >2023 - Mrs Shweta Sawant</h5></li>
            <li className="list-unstyled"><h5 >2024 - Mrs Shweta Sawant</h5></li>
            <li className="list-unstyled"><h5 >2025 - Mrs Urmy Das</h5></li>
            <li className="list-unstyled"><h5 ></h5></li>
          </ul>

        </div>

      </div>

      <div><hr class="hr-line"></hr></div>

    </div>




  );
}
export default About;
