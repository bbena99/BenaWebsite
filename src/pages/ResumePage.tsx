import { ReactNode } from "react";
import Resume from '../assets/BrockResume.pdf';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export function ResumePage():ReactNode{

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer 
          fileUrl={Resume}
          plugins={[
          ]}
        />
      </Worker>
    </>
  )
}
