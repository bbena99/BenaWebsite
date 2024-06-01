import { ReactNode } from "react";
import { 
  HomePage,
  PageNotFound,
  AboutPage,
  ProjectsPage,
  ResumePage
} from "../pages";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { 
  faComputer,
  faFire,
  faQuestion,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export interface PageProps {
  pageName:string;
  pagePath:Location|undefined;
}
export interface AppRouteI {
  displayName:string;
  routePath:string;
  icon:IconDefinition;
  pageElement:ReactNode;
}
export const AppRoutes: AppRouteI[] = [
  {
    displayName:'Home',
    routePath:'/',
    icon:faFire,
    pageElement:HomePage()
  },{
    displayName:'About Me',
    routePath:'/AboutMe',
    icon:faUser,
    pageElement:AboutPage()
  },{
    displayName:'Portfolio',
    routePath:'/Portfolio',
    icon:faComputer,
    pageElement:ProjectsPage()
  },{
    displayName:'Resume',
    routePath:'/Resume',
    icon:faFile,
    pageElement:ResumePage()
  },{
    displayName:'GitHub',
    routePath:'https://github.com/bbena99',
    icon:faGithub,
    pageElement:AboutPage()
  },
  {
    displayName:'Page Not Found',
    routePath:'*',
    icon:faQuestion,
    pageElement:PageNotFound()
  }
]