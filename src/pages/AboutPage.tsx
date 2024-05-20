import { ReactNode } from "react";
import { Button, Carousel } from "flowbite-react";
import { Constants } from "../constants";

export function AboutPage():ReactNode{
  const constants = Constants
  return (
    <>
      <div className="w-screen flex justify-center items-center">
        <span className="dark:text-gray-300 text-gray-900">
          Jump to a section of the page?
        </span>
        <a href="#carousel">
          <Button color="dark">
            Header
          </Button>
        </a>
      </div>
      <section id="carousel" className="grid w-screen h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 p-4">
        <div className="bg-gray-300 dark:bg-gray-900 w-full rounded-xl">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              About me,<br/> Brock Bena
            </h1>
          </div>
        </div>
        <Carousel className="max-w-screen-lg w-full [&_div]:rounded-xl">
          {constants.PERSONAL_IMGS.map(img=>{
            return <img src={img.src} alt={img.alt} key={img.alt+"_carousel"}/>
          })}
        </Carousel>
      </section>
    </>
  )
}