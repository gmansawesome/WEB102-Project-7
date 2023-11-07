import React from "react";
import { NavLink } from "react-router-dom";
const NavBtn = (props: { route: string; routeStr: string; icon: string }) => {
  return (
    <li>
      
      <NavLink to={props.route} className={({ isActive, isPending }) =>
    ("w-full h-full hover:bg-slate-50 flex transition-all " + (isPending ? " " : isActive ? "bg-slate-100 scale-105" : ""))
  }>
    <button className="w-full h-16">
        <h3 className="hidden md:inline">{props.routeStr}</h3>
        <i className={"visible md:hidden " + props.icon}></i>
        </button>
      </NavLink>
      
    </li>
  );
};

export default NavBtn;
