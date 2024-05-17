import { ReactNode } from "react";
import { PageProps } from "../core";
import { Carousel, List } from "flowbite-react";
import { HomeConstants } from "../constants";

export function HomePage(props?:PageProps):ReactNode{
  console.log(props)
  const constants = HomeConstants;
  return <>
    <section id="jumbotron" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {constants.TITLE}
        </h1>
      </div>
    </section>
    <section id="carousel" className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {constants.CAROUSEL_IMGS.map(img=>{
          return <img src={img.src} alt={img.alt} key={img.alt+"_carousel"}/>
        })}
      </Carousel>
    </section>
    <section className="max-w-screen-xl w-full flex flex-wrap items-center mx-auto justify-between p-4">
      <h2 className="max-w-screen-xl w-full flex flex-wrap mx-auto justify-between p-4 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        Purpose of this website
      </h2>
      <List className="ml-10">
        <List.Item>Reenforce my knowledge of React frameworks.</List.Item>
        <List.Item>Try out Tailwind as a css library.</List.Item>
        <List.Item>Implementing a light/dark mode to a webpage.</List.Item>
      </List>
    </section>
  </>
}