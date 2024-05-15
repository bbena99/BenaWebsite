import { ReactNode } from "react";
import { 
  HomePage,
  PageNotFound,
  AboutPage
} from "../pages";
export interface PageProps {
  pageName:string;
  pagePath:Location|undefined;
}
export interface AppRouteI {
  displayName:string;
  routePath:string;
  isPage:boolean;
  pageElement:ReactNode|string[];
}
export const AppRoutes: AppRouteI[] = [
  {
    displayName:'Home',
    routePath:'/',
    isPage:true,
    pageElement:HomePage()
  },{
    displayName:'About Me',
    routePath:'/AboutMe',
    isPage:true,
    pageElement:AboutPage()
  },{
    displayName:'Downloads',
    routePath:'/Downloads',
    isPage:false,
    pageElement:["Resume"]
  },
  {
    displayName:'Page Not Found',
    routePath:'*',
    isPage:true,
    pageElement:PageNotFound()
  }
]