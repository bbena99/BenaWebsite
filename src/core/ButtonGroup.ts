import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface ButtonGroupI{
  name:string;
  fn:()=>void;
  hover:string;
  icon:IconDefinition;
}

export const buttonGroup:ButtonGroupI[]=[
  {
    name:"GitHub",
    fn:()=>{
      window.location.href="https://github.com/bbena99";
    },
    hover:"To my GitHub profile",
    icon:faGithub
  },{
    name:"Linkedin",
    fn:()=>{
      window.location.href="https://www.linkedin.com/in/brock-bena-b06b29208/"
    },
    hover:"To my Linkedin Profile",
    icon:faLinkedin
  },{
    name:"Discord",
    fn:()=>{
      window.location.href="https://discordapp.com/users/bbena99"
    },
    hover:"Reach out to me on Discord",
    icon:faDiscord
  },{
    name:"Email",
    fn:()=>{
      navigator.clipboard.writeText("bbena99@gmail.com")
    },
    hover:"Copy my email to your clipboard",
    icon:faEnvelope
  }
]