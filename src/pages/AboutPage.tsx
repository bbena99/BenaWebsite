import { ReactNode } from "react";
import { Carousel } from "flowbite-react";
import { Constants } from "../constants";

export function AboutPage():ReactNode{
  const constants = Constants
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-1"/>
      <div className="col-span-5 bg-gray-300 dark:bg-gray-900 w-full rounded-xl xl:h-96 lg:h-64 md:h-32">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 md:py-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About me,<br/> Brock Bena
          </h1>
        </div>
      </div>
      <Carousel className="col-span-5 max-w-screen-lg w-full [&_div]:rounded-xl xl:h-96 lg:h-64 md:h-32">
        {constants.PERSONAL_IMGS.map(img=>{
          return <img src={img.src} alt={img.alt} key={img.alt+"_carousel"}/>
        })}
      </Carousel>
      <div className="col-span-1"/>
    </div>
  )
}