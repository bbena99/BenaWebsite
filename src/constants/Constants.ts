import Resume from "../assets/Resume.png"
import me from "../assets/Me.png"
import maroon from "../assets/Maroon.png"
import lab from "../assets/lab.png"
import chi from "../assets/CHI.png"
import congrats from "../assets/congrats.png"
import e7calc from "../assets/e7Calc.png"
import pokemon from "../assets/Pokemon.png"
import personalWebsite from "../assets/PersonalWebsite.png"
import { PageI } from "../models"

export class Constants{
  public static TITLE:string="Welcome to Brock Bena's Website"
  public static PERSONAL_IMGS:{src:string,alt:string}[]=[
    {
      src:maroon,
      alt:"MarronPark"
    },{
      src:lab,
      alt:"InTheLab"
    },{
      src:chi,
      alt:"NavyPier"
    },{
      src:me,
      alt:"MeAlone"
    },{
      src:congrats,
      alt:"Congrats"
    }
  ]
  public static PORTFOLIO_IMGS:{src:string,alt:string}[]=[
    {
      src:e7calc,
      alt:"Epic 7 Calculator"
    }
  ]
  public static RESUME_IMG={
    src:Resume,
    alt:"Resume"
  }
  public static PURPOSE_LIST:string[]=[
    'I developed this website to reinforce my knowledge of React frameworks.',
    'Try out Tailwind as a CSS library with custom React components.',
    'Demonstrate the ability to build a dynamically-scaled website that is easy to add and remove elements from the site.',
    'Implementing a light/dark mode to a webpage. See the upper right corner icon to change modes.',
    'Building a dedicated custom "Page Not Found", so the user knows they are accessing the right website, but the page they\'re looking for doesn\'t exist.'
  ]
  public static HOBBIES:{hobby:string,description:string}[]=[
    {
      hobby:"Golf",
      description:"I would golf 2-3 times a week, when I was back in my hometown, because there was a golf course roughly one mile from my house. My favorite club to use is probably my 56° wedge. I'm looking forward to trying out the Sydney R. Marovitz Golf Course and others in Chicago."
    },{
      hobby:"Downhill Skiing",
      description:"I started downhill skiing around 9 at my hometown's ski hill. I now travel a little bit to other ski hills in the area."
    },{
      hobby:"Working out/Fitness",
      description:"I keep variable dumbbells by my desk to do a variety of lifts. I've been fond of overhead presses lately."
    },{
      hobby:"Video Games",
      description:"I mostly play MMO's, but I also play FPS's with some friends. I've also dabbled in fighting games."
    },{
      hobby:"Crafts/Woodwork",
      description:"I'm pretty handy and have made some little wooden game boards. I recently made my mom a marbles board."
    }, {
      hobby:"Movies",
      description:"My favorite movie is \"Hitchhicker's Guide to the Galaxy\". The most recent movie I've watched is \"Ford vs Ferrari\""
    }
  ]
  public static SKILLS:{skill:string,description:string}[]=[
    {
      skill: "Typescript/Javascript",
      description: "My most proficient language by far. I started using it while learning vanilla web development project using JQerry, but I'm currently using it for server side development and in Vue, React, and Angular frameworks."
    },{
      skill: "HTML/CSS",
      description: "I grouped these together because you can't really have one without the other. I learned this in my entry level Web Development course, and have used them throughout my career ever since."
    },{
      skill: "Bootstrap/MUI/Tailwind",
      description: "I have experience with all of these CSS libraries to make my web pages look better and easier to understand."
    },{
      skill: "Java/Spring",
      description: "This was the first language I learned in college. I also learned Springboot java for a backend service as well in my Web Development course."
    },{
      skill: "SQL/MongoDB",
      description: "I took a full Databases course in college using exclusively SQL queried DBs. I also learned NRDBs in my Web Development course."
    },{
      skill: "PHP/Laravel",
      description: "I saw the rise of PHP because of all the development updates and support, and I thought it was a valuable skill to have. I am in the process of build a project with it now."
    },{
      skill: "C/C#",
      description: "A majority of courses in my college career were taught in C using the CS department's server. At my previous workplace, we used C# for a backend after previously using Python."
    },{
      skill: "Linux/SSH",
      description: "Our school had a server, which was run off of a Linux CLI. To access this terminal, we utilized SSH to remote into the server. I also utilized a Linux based terminal for my Amazon EC2 instance for this project."
    }
  ]
  public static PORTFOLIO:{accordionName:string,cards:PageI[]}[]=[
    {
      accordionName:"Finished webpages",
      cards:[
        {
          name: "Portfolio Website",
          description: "A basic webpage to display my previous and current works in the field. This was my first time using Tailwind, and it was great using this library. I found it very easy to use and understand.",
          imgsrc: personalWebsite,
          imgalt: "PersonalWebsite",
          skills: [
            "ReactTS frontend",
            "Tailwind CSS",
            "AWS deployment"
          ],
        },{
          name: "Pokemon Wiki",
          description: "Currently, there are 3 main wiki pages for pokemon data, and each of them has a flaw, in my opinion, that makes them disadvantageous to use. The first is lacking a modern UI, the second lacks detailed description of attributes to pokemon, the final one is riddled with white space, you have to scroll down 3 pages just to get to the end of a section.",
          imgsrc: pokemon,
          imgalt: "PokemonWiki.png",
          skills: [
            "VueTS Frontend",
            "Tailwind CSS",
            "LaravelPHP backend"
          ],
          reason: "I didn't deploy this website due to financial reasons. I currently didn't want to pay for a domain and server space for this website."
        }
      ]
    },{
      accordionName: "Currently Working On",
      cards: [
        {
          name: "Epic Seven Calculator",
          description: "A gear calculator for the mobile game Epic Seven. I built this for myself to track the gear substats to see if they were on the high end or the low end. In the game, these are difficult to track since it only tells you the stat itself.",
          imgsrc: e7calc,
          imgalt: "Epic 7 Calculator",
          skills: [
            "React frontend",
            "Tailwind CSS",
            "ExpressJS backend",
            "CloudFlare hosting(Eventually)"
          ],
          reason: "I have all the math and logic finished, but I'm looking to switch from an Angular/Bootstrap frontend to a React/Tailwind design. I've already started to rebuild the frontend while adding more data to the backend.\n Update: I have everything complete, I just need to insert all the data into my mock database."
        },{
          name: "Sword of Convallaria wiki",
          description: "At the time of starting this project, Sword of Convallaria was a new and upcoming game with little to no external resources. I plan on making one.",
          skills:[
            "React frontend",
            "Tailwind CSS",
            "ExpressJS backend",
            "CloudFlare hosting(Eventually)"
          ],
          reason: "This project is still early in development."
        },{
          name: "Dice Roller",
          description: "I recently had the chance to work with the dice company Dice Dungeon. This gave me the idea to make an online dice roller with the ability to have multiple people in a lobby to roll dice together.",
          skills:[
            "VueJs",
            "3JS",
            "Blender",
            "ExpressJS",
            "Websocket communication"
          ],
          reason: "I recently started working on this project and am working on learning 3JS and blender"
        }
      ]
    },{
      accordionName: "Halted or Previous Works",
      cards: [
        {
          name: "Trane Automated Test Tool (TATU)",
          description: "This was professional work while I was at Trane Technologies. TATU was a tool to test new HVAC controller builds/features.",
          skills: [
            "ReactTS frontend",
            "Material UI CSS",
            "SocketJS communication",
            "Python backend",
            "C# backend",
          ],
          reason: "TATU is an internal tool at Trane Technologies and cannot be deployed to external sources."
        },{
          name: "Bena-Art",
          description: "I created an AI generated art website. With this application, a user can write a prompt to an API and generate AI art. This was my final project for my Web Development course at UW-La Crosse.",
          imgsrc: "",
          imgalt: "",
          skills: [
            "Angular frontend",
            "Bootstrap CSS",
            "ExpressJS backend",
            "Axios API"
          ],
          reason: "I originally completed and deployed this on the UW-La Crosse server."
        },{
          name: "Connect 4",
          description: "This was a running project in my Web Development course. Whenever we learned a new skill, we would make a new version of this site using said new skill. It started as a JQuery/ExpressJS. Then we learned Angular, so it changed to an Angular/ExpressJS project. Finally we learned SpringBoot so it became an Angular/SpringBoot project.",
          skills: [
            "JQuery frontend",
            "Angular frontend",
            "Bootstrap CSS",
            "ExpressJS backend",
            "SpringBoot backend"
          ],
          reason: "After going through so many iterations, I would rather rebuild this in React/Tailwind/Express. I currently have more experience with these skills."
        }
      ]
    },{
      accordionName: "Future Possible Professional Projects",
      cards: [
        {
          name: "Realtor's Website",
          description: "My realtor friend asked me to review his website and I might update his current site to look better.",
          skills: []
        }
      ]
    }
  ]
}