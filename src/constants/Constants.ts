import Resume from "../assets/Resume.png"
import me from "../assets/Me.png"
import meandgf from "../assets/MeAndGf.png"
import maroon from "../assets/Maroon.png"
import lab from "../assets/lab.png"
import chi from "../assets/CHI.png"
import e7calc from "../assets/e7Calc.png"

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
      src:meandgf,
      alt:"Me and Girlfriend"
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
    'Reenforce my knowledge of React frameworks.',
    'Try out Tailwind as a css library with custom React components.',
    'Implementing a light/dark mode to a webpage. See the upper right corner icon to change modes.',
    'Show the ability to build a dynamically scaled website that is easy to add and remove elements from the site.',
    'Worked on implementing a dedicated custom "Page Not Found", so the user knows they are accessing the right website, but the page their looking for doesn\'t exist'
  ]
  public static HOBBIES:{hobby:string,description:string}[]=[
    {
      hobby:"Golf",
      description:"I try to golf 2-3 times a week because there is a golf course roughly one mile from my house. My favorite club is probably my 56° wedge."
    },{
      hobby:"Skiing",
      description:"Back home, I started skiing around 9 at our local ski hill. I now travel a little bit to other ski hills in the area."
    },{
      hobby:"Working out/Fitness",
      description:"I keep variable dumbbells by my desk to do a variety of lifts. I've been fond of overhead presses lately."
    },{
      hobby:"Video Games",
      description:"I mostly play MMO's, but I also play FPS's with some friends. I've also dabbled in fighting games."
    },{
      hobby:"Crafts/Woodwork",
      description:"I'm pretty handy, and I have made some little wooden game boards. I recently made my mom a marbles board."
    }, {
      hobby:"Movies",
      description:"My favorite movie is \"Hitchhicker's Guide to the Galaxy\". The most recent movie I've watched is \"Ford vs Ferrari\""
    }
  ]
  public static SKILLS:{skill:string,description:string}[]=[
    {
      skill: "Typescript/Javascript",
      description: "My most proficient language by far. I'd say I'm more fluent in TS/JS than I am in english at this point. I started using it while learning vanilla web development project using JQerry, but I'm currently using it for server side development and in React and Angular frameworks."
    },{
      skill: "HTML/CSS",
      description: "I grouped these together because you can't really have one without the other."
    },{
      skill: "Bootstrap/MUI/Tailwind",
      description: "I have used all these css libraries to make my web pages look better and easier to use."
    },{
      skill: "Java/Spring",
      description: "This was the first language I learned in college. I did also learn Springboot java for a backend service as well in my Web Development class."
    },{
      skill: "SQL/MongoDB",
      description: "I took a full Databases course in college using exclusively SQL queried DB's. I also learned NRDB's in my Web Development course."
    },{
      skill: "C/C#",
      description: "A majority of courses in my college carer were taught in C using the CS department's server. At my previous workspace, we used C# for a backend after previously using Python."
    },{
      skill: "Linux/SSH",
      description: "Similar to the last point, our school had a server, and it was run of a Linux cli. To access this terminal, we utilized shh to remote into the server."
    }
  ]
  
}