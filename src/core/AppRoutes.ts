import { ReactNode } from "react";
import { 
  HomePage,
  PageNotFound,
  AboutPage,
  ProjectsPage
} from "../pages";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { 
  faComputer,
  faFileDownload,
  faFire,
  faQuestion,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export interface PageProps {
  pageName:string;
  pagePath:Location|undefined;
}
export interface AppRouteI {
  displayName:string;
  routePath:string;
  icon:IconDefinition;
  isPage:boolean;
  pageElement:ReactNode|string[];
}
export const AppRoutes: AppRouteI[] = [
  {
    displayName:'Home',
    routePath:'/',
    icon:faFire,
    isPage:true,
    pageElement:HomePage()
  },{
    displayName:'About Me',
    routePath:'/AboutMe',
    icon:faUser,
    isPage:true,
    pageElement:AboutPage()
  },{
    displayName:'Portfolio',
    routePath:'/Portfolio',
    icon:faComputer,
    isPage:true,
    pageElement:ProjectsPage()
  },{
    displayName:'Downloads',
    routePath:'/Downloads',
    icon:faFileDownload,
    isPage:false,
    pageElement:["Resume"]
  },
  {
    displayName:'Page Not Found',
    routePath:'*',
    icon:faQuestion,
    isPage:true,
    pageElement:PageNotFound()
  }
]