import { ReactNode } from "react";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";
import { AppRouteI } from "../core";

interface PageLayoutPropsI{
  routes:AppRouteI[];
}
export function PageLayout(props:PageLayoutPropsI):ReactNode{
  return (
    <>
      <NavBar {...props} />
      <Outlet/>
    </>
  );
}