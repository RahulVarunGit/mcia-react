import { useState } from 'react';
import '../styles/Home.css';

const donate = () => {

  return (
    <div className="container">

      <div>
        <h1 className="fbt-title"><img src="/images/homePage/Logo.jpg" alt="" width="40" height="40" className="rounded" />  for a <span className="fbt-title-sub">better</span> tomorrow </h1>
        <h1 className="fbt-tag-line">…Eliminating the gap between abundance and need</h1>
        <p >&nbsp;</p>
      </div>

      <div><hr class="hr-line"></hr></div>

      <p >&nbsp;</p>
      <div className="row">
        <h3 className="center-align"><b >Donate</b></h3>
      </div>

      <div className="row">
        <h5 ><b >The Top 5 Reasons to Donate to FBT!</b></h5>
      </div>

      <div className="row">

        <ul>
          <li ><h5 >FBT supports projects locally (Central Illinois) and globally, in places such as India, Haiti, and Belize.</h5></li>
          <li ><h5 >Over 98% of all donated funds go directly to project recipients. All FBT board members volunteer their time and take no salary or compensation of any kind.</h5></li>
          <li ><h5 >All projects are carefully vetted to ensure that they align with the FBT mission including the creation of self-sustainability and transparency in how funds are used (FBT does not support political or religious organizations).</h5></li>
          <li ><h5 >All projects require representation by a liaison known personally by at least one member of the board.</h5></li>
          <li ><h5 >All donations are <a href="/images/base/FBT-501C3.pdf" className="highlt">100% tax deductible</a>.</h5></li>
        </ul>

      </div>

      <p >&nbsp;</p>
      <div className="row">
        <h5 ><b >Donate to FBT and know that your generous donation changes the world and makes tomorrow better for so many people.</b></h5>
      </div>

      <div className="row">
        <h5 ><b >Here’s how:</b></h5>
      </div>

      <div className="row">

        <ul>
          <li ><h5 >Providing a nutrient supplement to infants in Haiti.</h5></li>
          <li ><h5 >Creating a safe environment for formerly incarcerated women to help them get back on their feet.</h5></li>
          <li ><h5 >Supporting a vocational school for individuals with disabilities in India.</h5></li>
          <li ><h5 >Ensuring that local school children have the things they need to be successful in school.</h5></li>
          <li ><h5 >Supplying laptops and other school materials for schoolchildren in Belize.</h5></li>
          <li ><h5 >Providing materials and other support to an orphanage in India.</h5></li>
        </ul>

      </div>

      <div className="row">
        <h5 ><b >And much, much more!</b></h5>
      </div>

      <div className="row">
        <h5 ><b >You can be the one to make a real difference in the lives of others. Donate now.</b></h5>
      </div>

      <p >&nbsp;</p>
      <div className="row">

        <div className="col-sm">

          <a className="btn btn-primary btn-lg btn-block" href="https://www.facebook.com/4ABetterTomorrow" role="button">Facebook Donate</a>
        </div>

        <div className="col-sm">

          <a className="btn btn-primary btn-lg btn-block" href="https://www.paypal.com/us/fundraiser/charity/3309392" role="button">Paypal Donate</a>
        </div>

        <div className="col-sm">

          <a className="btn btn-primary btn-lg btn-block" href="/donate/zelle" role="button">Zelle Donate</a>
        </div>

        <div className="col-sm">


        </div>

      </div>

      <p >&nbsp;</p>
      <div className="row">
        <h5 ><b >Contributions may also be sent to:</b></h5>
      </div>

      <div className="row">
        <h5 >For a Better Tomorrow</h5>
      </div>

      <div className="row">
        <h5 >808 S. Eldorado Road, Suite 1</h5>
      </div>

      <div className="row">
        <h5 >Bloomington, IL 61704</h5>
      </div>

      <div className="row">
        <h5 >For A Better Tomorrow (FBT) is a public charity, tax exempt under Section 501(c)(3) of Internal Revenue Code. Review the <a href="/images/base/FBT-501C3.pdf" className="highlt"> 501(c)(3) approval document. </a></h5>
      </div>

    </div>



  );
}
export default donate;
