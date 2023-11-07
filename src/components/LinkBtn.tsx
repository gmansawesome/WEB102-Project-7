import React from "react";
import { Link } from "react-router-dom";
const LinkBtn = (props: { route: string; routeStr: string; }) => {
  return (
    <Link to={props.route}>
    <button className="w-fit h-fit p-4 bg-slate-200   border-2 border-slate-400 hover:border-violet-800 hover:bg-violet-500 transition-all hover:text-white delay-75 rounded-md">
        <h3 className="md:text-lg">{props.routeStr}</h3>
    </button>
    </Link>
  );
};

export default LinkBtn;
