import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export interface ButtonGroupI{
  name:string;
  link:string;
  icon:IconDefinition;
}

export const buttonGroup:ButtonGroupI[]=[
  {
    name:"GitHub",
    link:"https://github.com/bbena99",
    icon:faGithub
  },{
    name:"Linkedin",
    link:"https://www.linkedin.com/in/brock-bena-b06b29208/",
    icon:faLinkedin
  },{
    name:"Discord",
    link:"https://discordapp.com/users/bbena99",
    icon:faDiscord
  }
]