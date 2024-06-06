import { ReactNode } from "react";
import { Constants } from "../constants";
import { Accordion, Card } from "flowbite-react";
import { PageI } from "../models";

export function ProjectsPage():ReactNode{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <div className="py-4 xl:px-24">
      {Constants.PORTFOLIO.map(accord=>{
        return (
          <Accordion key={accord.accordionName} className="my-5 [&_button]:rounded-lg [&_button]:bg-gray-100 [&_button]:text-gray-900 [&_button]:dark:bg-gray-800 [&_button]:dark:text-white [&_div]:-mt-1">
            <Accordion.Panel>
              <Accordion.Title>{accord.accordionName}</Accordion.Title>
              <Accordion.Content>
                <div className="grid grid-cols-2 gap-8">
                  {accord.cards.map((card:PageI)=>{
                    return(
                      <Card
                        key={card.name}
                        className="h-full !min-w-full col-span-2 xl:col-span-1 [&_div]:w-full [&_div]:justify-start text-gray-900 dark:text-white"
                        imgSrc={card.imgsrc}
                        imgAlt={card.imgalt}
                        horizontal
                      >
                        <h5 className="text-2xl font-bold">
                          {card.name}
                        </h5>
                        <p className="text-gray-800 dark:text-gray-300">
                          {card.description}<br/><br/>
                        </p>
                        Skills used in this project:
                        <ul className="grid grid-cols-6 list-disc text-gray-800 dark:text-gray-300">
                          {card.skills.map(skill=>{
                            return (
                              <li key={card.name+skill} className="col-span-3 sm:col-span-2 xl:col-span-3 ml-6">
                                {skill}
                              </li>
                            )
                          })}
                        </ul>
                        {card.reason?(
                          <>
                            <br/>
                            Reason this project isn't finished/deployed:
                            <p className="text-gray-800 dark:text-gray-300">
                              {card.reason}
                            </p>
                          </>
                        ):(<></>)}
                      </Card>
                    )
                  })}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        )
      })}
    </div>
  )
}