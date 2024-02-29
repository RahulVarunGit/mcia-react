import {useState} from 'react';
import '../styles/Home.css';
import { Document, Page, pdfjs  } from 'react-pdf';


const Report = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const pdfURL = "/pdf/2023AnnualReport.pdf";

  return(

   
<div className="container">

<h2 className="center-align"><b >2024 Annual Report</b></h2>
<Document file={pdfURL}>
<Page pageNumber={1} />
 </Document>

</div>



  );
}
export default Report;
