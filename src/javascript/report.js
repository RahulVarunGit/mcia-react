import { useState } from 'react';
import '../styles/Home.css';
//import { Document, Page, pdfjs  } from 'react-pdf';


const Report = () => {
  //pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const pdfURL = "/pdf/2023AnnualReport.pdf";

  return (
    <div className="container">

      <div>
        <h2 className="center-align"><b>2023 Annual Report</b></h2>
      </div>

      <div><hr class="hr-line"></hr></div>

      <div>
        <h2 className="center-align"><b ></b></h2>
        <p className="center-align"><img src="/images/report/2023page1.png" alt="" width="100%" className="rounded" /></p>
        <p className="center-align"><img src="/images/report/2023page2.png" alt="" width="100%" className="rounded" /></p>
        <p className="center-align"><img src="/images/report/2023page3.png" alt="" width="100%" className="rounded" /></p>
        <p className="center-align"><img src="/images/report/2023page4.png" alt="" width="100%" className="rounded" /></p>
        <p className="center-align"><img src="/images/report/2023page5.png" alt="" width="100%" className="rounded" /></p>
        <p className="center-align"><img src="/images/report/2023page6.png" alt="" width="100%" className="rounded" /></p>
        <div><hr class="hr-line"></hr></div>

        <h2 className="fbt-tag-line">“Our mission is to promote social justice by meeting needs in the local community and the world through accountable, sustainable philanthropy and by nurturing future generations of servant leaders.”</h2>
      </div>

    </div>




  );
}
export default Report;
