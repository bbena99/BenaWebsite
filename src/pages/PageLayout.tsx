import { ReactNode } from "react";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";
import { AppRouteI } from "../core";
import { useThemeMode } from "flowbite-react";

interface PageLayoutPropsI{
  routes:AppRouteI[];
}
export function PageLayout(props:PageLayoutPropsI):ReactNode{
  const {routes}={...props}
  const {mode,toggleMode}=useThemeMode();
  return (
    <>
      <NavBar routes={routes} mode={mode} toggleMode={toggleMode} />
      <Outlet/>
    </>
  );
}