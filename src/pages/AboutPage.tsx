import { ReactNode } from "react";
import { PageProps } from "../core";
import { Carousel } from "flowbite-react";
import { Constants } from "../constants";

export function AboutPage(props?:PageProps):ReactNode{
  const constants = Constants
  return (
    <>
      <Carousel className="max-w-screen-lg w-full [&_div]:rounded-xl">
        {constants.PERSONAL_IMGS.map(img=>{
          return <img src={img.src} alt={img.alt} key={img.alt+"_carousel"}/>
        })}
      </Carousel>
    </>
  )
}