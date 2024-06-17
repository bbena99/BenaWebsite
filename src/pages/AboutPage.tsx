import { ReactNode } from "react";
import { Card, Carousel } from "flowbite-react";
import { Constants } from "../constants";
import Golf from "../assets/Golf.png"
import Code from "../assets/Code.png"

export function AboutPage():ReactNode{
  return (
    <div className="grid grid-cols-12 gap-8 md:px-24 md:py-10 min-w-fit">
      {/**Start of Row 1*/}
      <div className="col-span-12 md:col-span-6 bg-gray-300 dark:bg-gray-900 w-full rounded-xl h-32 md:h-96 flex items-center">
        <h1 className="text-center mb-4 w-full text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          About me,<br className="sm:hidden md:inline 2xl:hidden"/> Brock Bena
        </h1>
      </div>
      <Carousel className="col-span-12 md:col-span-6 max-w-screen-lg w-full [&_div]:rounded-xl h-96 bg-gray-300 dark:bg-gray-900 rounded-xl">
        {Constants.PERSONAL_IMGS.map(img=>{
          return <img src={img.src} alt={img.alt} key={img.alt+"_carousel"}/>
        })}
      </Carousel>
      {/**Start of Row 2*/}
      <div className="hidden md:inline-flex col-span-2 xl:col-span-4"/>
      <Card
        className="drop-shadow-md bg-gray-100 !max-w-full col-span-12 md:col-span-10 xl:col-span-7"
        imgSrc={Golf}
        horizontal
      >
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
          Hobbies
        </h5>
        <ul className="list-disc space-y-1 text-gray-900 list-inside dark:text-gray-200">
        {Constants.HOBBIES.map(h=>{
          return (
            <li key={h.hobby} className="p-2">
              {h.hobby}<br/>
              <span className="ml-10 text-gray-700 dark:text-gray-400">
                {h.description}
              </span>
            </li>
          )
        })}
        </ul>
      </Card>
      <div className="hidden xl:inline-flex col-span-1"/>
      {/**Start of Row 3*/}
      <div className="hidden xl:inline-flex col-span-1"/>
      <Card
        className="drop-shadow-md bg-gray-100 !max-w-full col-span-12 md:col-span-10 xl:col-span-7"
        imgSrc={Code}
        horizontal
      >
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
          Professional Skills
        </h5>
        <ol className="list-decimal space-y-1 text-gray-950 list-inside dark:text-gray-200">
        {Constants.SKILLS.map(s=>{
          return (
            <li key={s.skill} className="p-2">
              {s.skill}<br/>
              <span className="ml-10 text-gray-800 dark:text-gray-400">
                {s.description}
              </span>
            </li>
          )
        })}
        </ol>
      </Card>
    </div>
  )
}