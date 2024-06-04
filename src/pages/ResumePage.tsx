import { ReactNode } from "react";
import Resume from '../assets/BrockResume.pdf';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function ResumePage():ReactNode{

  return (
    <>
      <div className="mx-24 my-4">
        <a href={Resume} className="underline text-sky-800 dark:text-sky-400">
          Download my Resume
          <FontAwesomeIcon icon={faArrowRightToBracket} className="rotate-90"/>
        </a>
      </div>
      <div className="flex mx-24 my-6">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
          <Viewer fileUrl={Resume}/>
        </Worker>
      </div>
      <div className="mx-24 my-4">
        <a href={Resume} className="underline text-sky-800 dark:text-sky-400">
          Download my Resume
          <FontAwesomeIcon icon={faArrowRightToBracket} className="rotate-90"/>
        </a>
      </div>
    </>
  )
}
