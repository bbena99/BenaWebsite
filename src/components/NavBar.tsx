import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Navbar } from "flowbite-react";
import { AppRouteI } from "../core";
import BrockResume from "../assets/BrockResume.pdf";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

interface NavBarPropsI{
  routes:AppRouteI[]
}
export const NavBar = (props:NavBarPropsI) => {
  const {routes} = props;
  const displayRoutes = [...routes.slice(1,routes.length-1)];
  const home = routes[0];
  console.log(displayRoutes)
  return (
    <Navbar fluid rounded>
      <div className="max-w-screen-xl w-full flex flex-wrap items-center mx-auto justify-between p-4">
        <Navbar.Brand href={home.routePath}>
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            <FontAwesomeIcon icon={home.icon} />
            {" "+home.displayName}
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          {displayRoutes.map(r=>{
            if(r.isPage)return <Navbar.Link href={r.routePath} key={r.displayName+"_Nav_Btn"} className="text-base">
              <FontAwesomeIcon icon={r.icon}/>
              {" "+r.displayName}
            </Navbar.Link>;
            return <Navbar.Link key={r.displayName+"_Nav_Dropdown"}>
              <Dropdown
                inline
                label={<div className="text-base"><FontAwesomeIcon icon={r.icon}/><span>{" "+r.displayName}</span></div>}
              >
                <Dropdown.Item>
                  <a href={BrockResume} download={"Brock_Bena_Resume"} className="text-base">
                    <FontAwesomeIcon icon={faFileArrowDown}/>
                    {" Resume"}
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </Navbar.Link>
          })}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}