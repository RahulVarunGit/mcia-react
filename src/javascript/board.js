import {useState} from 'react';
import '../styles/Home.css';

const Board = () => {

  return(

    <div className="container">

    <div>
    <h1 className="fbt-title"><img src="/images/homePage/Logo.jpg"alt="" width="40" height="40" className="rounded"/>  for a <span className="fbt-title-sub">better</span> tomorrow </h1>
    </div>

    <div>
    <h1 className="center-align"><b >About our board of directors</b></h1>
    </div>

    <div><hr class="hr-line"></hr></div>

    <p >&nbsp;&nbsp;</p>
    <div className="row">

    <div className="col-sm">

    <table className="table-borderless noBorder">

    <tbody>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Phani.jpg"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Phani Aytam</span></h5>
    <h6 >Phani and his wife, Sandeepa, are proud parents of their five year old daughter Shree. They consider themselves blessed working for a great organization like State Farm, living in a wonderful giving community like Mclean County, serving alongside amazing individuals whom they are very fortunate to call friends. Phani believes in the power of community, a thoughtful collective with boundless hope, shared values and a unifying purpose. Phani has served along side several amazing leaders on purposeful boards like the Multicultural Leadership Program, For A Better Tomorrow and United Way, to name a few. Whether it is to promote social entrepreneurship, building stronger communities or fostering leadership diversity, the common thread we find in Phani s involvement is often rooted in servant leadership and social justice. </h6>
    &nbsp;
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Kristen.jpg"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Kristen Gianaris</span></h5>
    <h6 >Kristen Gianaris is currently a Global Studies Coordinator and Teacher in Seattle, Washington. With a background in anthropology and international development, she spent the past several years working in experiential education around the world. She has experience teaching a variety of classNamees including social justice, civic engagement, global studies, and anthropology. Kristen also served on the Justice, Equity, Diversity, and Inclusion board of Where There Be Dragons. In addition to her work in education, Kristen worked for a refugee resettlement organization, curated art, and wrote as a journalist. She is an award-winning photographer and exhibited her work in numerous exhibitions around the world. Over the years, Kristen spent significant time living in Taiwan, China, Switzerland, Egypt, Morocco, and the United States. In her free time, she enjoys learning languages, reading books, and spending time outdoors.</h6>
    &nbsp;
    &nbsp;
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Kathy.jpg"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Kathy Weinzierl</span></h5>
    <h6 >Hi! My name is Kathy Weinzierl. This is my second year on the FBT Board and my third to help with YICU. I am a substitute teacher for Olympia Elementary Schools and have been for about 20 years. I have three grown daughters, Gracie, Hannah and Claire. All three work professionally in the Agriculture field.  My husband, Rod, works for Illinois Corn and farms as well.  I have been a 4-H leader for the Olympia Pacesetters 4-H Club based in Stanford since 2001. We have a club with over 40 members. Our focus is on service learning and the club has established a food pantry, community garden, and Emergency Mini Food Pantry project. The members are working on putting an Emergency Mini Food Pantry in all 9 communities in our school district and at the high school complex thanks to a $25,000 State Farm Neighborhood Assist grant. The club continues to find ways to combat hunger in our rural communities. The youth are always eager to serve others and that is the main reason that I decided to be involved with FBT. Our purposes are very parallel. I like the idea of recognizing  youth, our future leaders, for what they are doing now. They are amazing and inspiring.</h6>
    &nbsp;
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Hari.jpg"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Hariharan Senthilnathan</span></h5>
    <h6 >Hariharan Senthilnathan has been a wonderful addition to the FBT family. Hari currently chairs the Marketing and Technology committee. He is also the FBT Board Secretary. What we love about Hari is that he not only volunteers for critical needs, he always follows through on the commitments he makes.</h6>
    &nbsp;
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Mandava.jpg"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Venkateswara Mandava</span></h5>
    <h6 >Venkateswara Mandava is a people s person and is popularly known as  Mandava  in Bloomington-Normal. He is a founding member in FBT serving different positions like, Treasurer, Fundraising Committee, and Director-Kite Fest. He is a servant leader in the community where he lives in. He served as a Chair-Normal Human Relations commission, Minority and Police Partnership (MAPP), President of McLean County India Association (MCIA). Currently he is one of the trustee in Bloomington-Normal Connect Transit board. He has over 35 years of leadership experience in diversified industry globally. He brought with him a wealth of experience in service, IT, marketing and industrial management areas. He possesses effective leadership, facilitation, coordination and communication skills. He believes in hard work and dedication. He has grownup kids Bhavita (daughter) and Manish (son) who completed their education in medicine and serving.</h6>
    &nbsp;
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Raja.jpg"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Raja Ayyapusetty</span></h5>
    <h6 >Raja Ayyapusetty has been an invaluable addition to the FBT family since 2020. Raja joined a depleted volunteer Board with wonderful attitude. As a longtime donor who has supported numerous FBT efforts, Raja jumped in to support our immediate needs. He provided technical support to host a large virtual gathering in 2020 YICU Service Awards. He was also elected as FBT Board Treasurer last month. Raja is on the Finance Committee and assist us in maturing our Giving Committee efforts. Raja, thank you for your unwavering commitment to FBT and for your passion to serve others.</h6>
    &nbsp;
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Deva-Profile.png"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Devanand Chatrathi</span></h5>
    <h6 >Devanand Chatrathi is a resident of McLean County and has been associated with FBT for a long time as a volunteer. Personally, the motivating factor for him to be associated with FBT is the philanthropic activities that are done by raising funds and the programs that are created to achieve goals that are very beneficial for the community. Deva is currently part of organizations like, 4H - Coach for PowerSurge, SPIN Robotics club and serves a Chair with Twin Cities Amateur Astronomers, helping with IT aspects. He is extremely happy to serve as a FBT Board member, and is very much looking forward to the new challenges. He hopes to share his ideas to help better serve the community and play a vital role in building a better tomorrow for the future generations.</h6>
    &nbsp;
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Sam-G.jpg"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Sambasivarao Gurijala</span></h5>
    <h6 >Sambasivarao (Sam) Gurijala works as Senior Data Engineer Consultant in Bloomington-Normal IL. He has worked in Information Technology for the past 22 years. As a resident of Bloomington-Normal for the past 14 years, he has worked with numerous non-profits in & out of town. Sam served as an Executive Board member for MCIA - McLean County India Association, an Executive Board Member & Program Coordinator for TAB - Telugu Associate of Bloomington, a Steering Committee member for HSS - International Yoga Festival, Active Lead coordinator for Kite Fest. Sam loves to serve and assist with efforts for betterment of the community. They are family of four, 14 year old son Shriyans and a 11 year old daughter Srinidhi and a wonderful supporting wife Sirisha. Sam loves listening to music and going on long road trips. His best single stretch of drive is from 'Atlanta to Washington D.C'. His dream place to visit is 'Key west' and which he hopes to get to soon :-)</h6>
    &nbsp;
    </td>

    </tr>

    <tr className="row">
    <td className="col-md-3 center-align"><img src="/images/board-committees/Srinivas-Shenoy.jpg"alt="" width="150" height="150" className="rounded-circle"></img></td>
    <td className="col-md-9">
    <h5 ><span className="font-weight-bold">Srinivas Shenoy</span></h5>
    <h6 >Srinivas was born and raised in Goa, a small state on the west coast of India. Goa was a Portuguese Colony for more than 450 years and is now a vibrant cultural mosaic of Hindu, Muslim and Christian cultures. His formative education and experiences in a catholic convent school taught him discipline, commitment and taking accountability for his actions. His years in an engineering college developed him as a structured problem solver and made him the technology geek that he is. He believes in  Always assume positive intent  and  Om Sarve Bhavantu Sukhinah (May all be Happy)  and this influences his behavior at work and in the community.
    Srinivas has been a resident of Mclean County for the past 20+ years and is firm believer of giving back to the community. He serves on the board of the local chapter for Sewa International and has led several local efforts like the Sewa International Diwali Food Drive and the Sewa International / American Red Cross Annual Blood Drive. He is also an active volunteer at the Hindu Temple of Bloomington Normal.</h6>
    &nbsp;
    </td>

    </tr>

    </tbody>

    </table>

    </div>

    </div>

    <div><hr class="hr-line"></hr></div>

    </div>



  );
}
export default Board;
