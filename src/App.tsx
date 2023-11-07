import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import "./App.css";
import NavBtn from "./components/NavBtn";

function App() {
  return (
    <div className="App bg-slate-200">
      <div className="place-items-start flex flex-row-reverse md:flex-row  place-content-start">
        <nav className="h-screen w-16 md:w-48 lg:w-64 overflow-x-hidden flex-none flex flex-col">
          <ul className="h-fit w-16 md:w-48 lg:w-64 z-0 flex-grow">
            <NavBtn route="" routeStr="Home" icon="fa-solid fa-house" />
            <NavBtn route="create" routeStr="Create a Crewmate!" icon="fa-solid fa-paint-brush"/>
            <NavBtn route="crewmates" routeStr="Crewmate Gallery" icon="fa-solid fa-image"/>
          </ul>
          <div className="flex-none h-fit md:h-16 place-content-center place-items-center bg-yellow-200 w-full hidden md:flex">
            <p>by <a href="https://github.com/channelA9">@channel9a</a></p>
            
          </div>
          <div className=" flex-grow h-fit md:h-16 flex place-content-evenly place-items-center bg-slate-300 w-full flex-col md:flex-none md:flex-row">
          <a href="https://github.com/channelA9"><i className="fa-brands fa-github text-4xl"></i></a>
          <a href="https://www.linkedin.com/in/shauncolegado/"><i className="fa-brands fa-linkedin text-4xl"></i></a>
          <a href="https://www.instagram.com/channel9a/"><i className="fa-brands fa-instagram text-4xl"></i></a>
          </div>
        </nav>
        <main className="min-w-screen md:min-w-fit min-h-screen flex-grow bg-slate-100 p-6 md:p-4 overflow-hidden">
          
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
