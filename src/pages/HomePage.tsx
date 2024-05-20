import { ReactNode } from "react";
import { PageProps } from "../core";
import { Card, List } from "flowbite-react";
import { Constants } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

export function HomePage(props?:PageProps):ReactNode{
  console.log(props);
  const constants = Constants;
  return <>
    <section id="jumbotron" className="bg-gray-300 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {constants.TITLE}
        </h1>
      </div>
    </section>
    <section id="carousel" className="grid grid-cols-2 gap-4 justify-items-center [&_div]:my-5">
      <a href="/AboutMe">
        <Card
          className="max-w-sm drop-shadow-md"
          imgAlt={constants.PERSONAL_IMGS[0].alt}
          imgSrc={constants.PERSONAL_IMGS[0].src}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
            <span>About me</span>
            <FontAwesomeIcon icon={faShare}/>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Learn more about me, and how I learned programming.
          </p>
        </Card>
      </a>
      <a href="Portfolio">
        <Card
          className="max-w-sm drop-shadow-md"
          imgAlt={constants.PORTFOLIO_IMGS[0].alt}
          imgSrc={constants.PORTFOLIO_IMGS[0].src}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
            <span>My Portfolio</span>
            <FontAwesomeIcon icon={faShare}/>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            See all the projects I have worked on.
          </p>
        </Card>
      </a>
      <Card className="grid-column: col-span-2">
        <h2 className="max-w-screen-xl w-full flex flex-wrap mx-auto justify-between p-4 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          About my website
        </h2>
        <List className="ml-10">
          {constants.PURPOSE_LIST.map((p,i)=>{
            return <List.Item key={"purpose_"+i}>{p}</List.Item>
          })}
        </List>
      </Card>
    </section>
  </>
}