import { ReactNode } from "react";
import { Card, List } from "flowbite-react";
import { Constants } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faShare, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

export function HomePage():ReactNode{
  const constants = Constants;
  return <>
    <section id="jumbotron" className="bg-gray-300 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {constants.TITLE}
        </h1>
      </div>
    </section>
    <section id="cards" className="grid grid-cols-6 gap-4 justify-items-center mx-24 [&_div]:my-5">
      <a href="/AboutMe" className="col-span-6 md:col-span-3 xl:col-span-2 h-full min-w-64">
        <Card
          className="max-w-lg drop-shadow-md hover:drop-shadow-2xl [&_h5]:hover:text-cyan-700 [&_h5]:dark:hover:text-white"
          imgAlt={constants.PERSONAL_IMGS[0].alt}
          imgSrc={constants.PERSONAL_IMGS[0].src}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
            <span><FontAwesomeIcon icon={faUser}/> About me</span>
            <FontAwesomeIcon icon={faShare}/>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Learn more about me, and how I learned programming.
          </p>
        </Card>
      </a>
      <a href="Portfolio" className="col-span-6 md:col-span-3 xl:col-span-2 h-full min-w-64">
        <Card
          className="max-w-lg drop-shadow-md hover:drop-shadow-2xl [&_h5]:hover:text-cyan-700 [&_h5]:dark:hover:text-white"
          imgAlt={constants.PORTFOLIO_IMGS[0].alt}
          imgSrc={constants.PORTFOLIO_IMGS[0].src}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
            <span><FontAwesomeIcon icon={faComputer}/> My Portfolio</span>
            <FontAwesomeIcon icon={faShare}/>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            See all the projects I have worked on.
          </p>
        </Card>
      </a>
      <a href="/Resume" className="col-span-6 md:col-span-3 xl:col-span-2 h-full min-w-64">
        <Card
          className="max-w-lg drop-shadow-md hover:drop-shadow-2xl [&_h5]:hover:text-cyan-700 [&_h5]:dark:hover:text-white"
          imgAlt={constants.RESUME_IMG.alt}
          imgSrc={constants.RESUME_IMG.src}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
            <span><FontAwesomeIcon icon={faFile}/> Resume</span>
            <FontAwesomeIcon icon={faShare}/>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            View or download my professional resume.
          </p>
        </Card>
      </a>
      <Card className="grid-column: col-span-6">
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