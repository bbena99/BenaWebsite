import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DarkThemeToggle, Navbar, ThemeMode } from "flowbite-react";
import { AppRouteI } from "../core";

interface NavBarPropsI{
  routes:AppRouteI[];
  mode:ThemeMode;
  toggleMode:()=>void;
}
export const NavBar = (props:NavBarPropsI) => {
  const {routes, mode, toggleMode} = props;
  const displayRoutes = [...routes.slice(1,routes.length-1)];
  const home = routes[0];
  return (
    <Navbar rounded>
      <div className="max-w-screen-xl w-full flex flex-wrap items-center mx-auto justify-between p-4">
        <Navbar.Brand href={home.routePath}>
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            <FontAwesomeIcon icon={home.icon} />
            {" "+home.displayName}
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 sm:inline md:hidden">
          <Navbar.Toggle className="h-full w-half"/>
          <DarkThemeToggle
            theme={{root:{base:mode}}}
            onClick={()=>{toggleMode();}}
            className="dark:text-white inline-flex items-center rounded-lg h-full w-half text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          />
        </div>
        <Navbar.Collapse className="[&_ul]:items-center">
          {displayRoutes.map(r=>{
            return <Navbar.Link href={r.routePath} key={r.displayName+"_Nav_Btn"} className="text-base">
              <FontAwesomeIcon icon={r.icon}/>
              {" "+r.displayName}
            </Navbar.Link>;
          })}
          <DarkThemeToggle
            theme={{root:{base:mode}}}
            onClick={()=>{toggleMode();}}
            className="dark:text-white ml-4 sm:hidden md:inline"
          />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}