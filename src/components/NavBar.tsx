import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { AppRouteI } from "../core";
import BrockResume from "../assets/BrockResume.pdf";

interface NavBarPropsI{
  routes:AppRouteI[]
}
export const NavBar = (props:NavBarPropsI) => {
  const {routes} = props;
  const displayRoutes = [...routes.slice(1)];
  const home = routes[0];
  console.log(displayRoutes)
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Link to={home.routePath}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <FontAwesomeIcon icon={faFire} />
            {" "+home.displayName}
          </span>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
}