import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

export function PageNotFound():ReactNode{
  return <section className="bg-gray-300 dark:bg-gray-900 rounded-3xl m-16 min-w-36">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <FontAwesomeIcon icon={faFaceSadTear}/><br/>
        Page Not Found
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        I'm sorry, but the page you are looking for doesn't exist.
      </p>
    </div>
  </section>
}