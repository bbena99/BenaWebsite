import { ReactNode } from "react";
import Resume from '../assets/BrockResume.pdf';

export function ResumePage():ReactNode{
  //You should have seen the look on my face when I saw you can use iframe as a standard pdf viewer...
  return <iframe src={Resume} className="w-full" style={{height:"calc(100vh - 5rem)"}}/>
}
