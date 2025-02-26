import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, DarkThemeToggle, Navbar, ThemeMode } from "flowbite-react";
import { AppRouteI } from "../core";
import { buttonGroup, ButtonGroupI} from "../core"

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
    <Navbar rounded className="w-full fixed z-10 top-0 start-0 flex items-center py-3">
      <Navbar.Brand href={home.routePath} className=" h-14">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          <FontAwesomeIcon icon={home.icon} />
          {" "+home.displayName}
        </span>
      </Navbar.Brand>
      <div className="!flex items-center md:order-2 md:!hidden">
        <Navbar.Toggle className="h-full w-half"/>
        <DarkThemeToggle
          theme={{root:{base:mode}}}
          onClick={()=>{toggleMode();}}
          className="p-2 dark:text-white inline-flex items-center rounded-lg h-full w-half text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        />
      </div>
      <Navbar.Collapse className="[&>ul>li]:flex [&>ul>li]:items-center">
        {displayRoutes.map(r=>{
          return <Navbar.Link href={r.routePath} key={r.displayName+"_Nav_Btn"} className="text-base w-full">
            <FontAwesomeIcon icon={r.icon}/>
            {" "+r.displayName}
          </Navbar.Link>;
        })}
        <ButtonGroup>
          {buttonGroup.map((btn:ButtonGroupI)=>{
            return <Button href={btn.link} key={btn.name} className="bg-gray-700 dark:bg-gray-100 text-white dark:text-gray-700">
              <FontAwesomeIcon icon={btn.icon}/>
            </Button>
          })}
        </ButtonGroup>
        <DarkThemeToggle
          theme={{root:{base:mode}}}
          onClick={()=>{toggleMode();}}
          className="dark:text-white ml-4 hidden md:inline text-lg"
        />
      </Navbar.Collapse>
    </Navbar>
  );
}