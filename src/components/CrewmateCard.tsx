import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface inpInterface {
  name: string,
  color: string,
  class: string,
  speed: number,
  desc: string,
  slogan: string,
  pay: number,
}


const CrewmateCard = (props: {
  card: inpInterface,
  id: number,
}) => {
  return (
    <div className="w-full max-w-screen-md xl:max-w-screen-md bg-white rounded-md shadow-md flex-col place-items-center overflow-hidden">
      <div className={`${props.card.color} h-16 flex place-items-center place-content-start`}>
      
        {props.id > 0 ? <Link to={`/edit/${props.id.toString()}`}><button className="flex place-content-center fa-solid fa-pen-to-square text-2xl w-16 h-16 place-items-center flex-none"/></Link> : <></>}
      <p className="ml-4 font-bold text-2xl w-32 min-w-fit">{props.id}</p>
      <p className="text-2xl w-32 flex-grow text-center">{props.card.name}</p>
      <p className="font-bold w-32 min-w-fit text-sm text-center">CREW</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="row-span-3 flex-col place-items-center place-content-center p-4 bg-slate-50">
        <h2 className="font-bold text-xl">Crewmate ID: {props.id}</h2>
          <h1 className="text-2xl p-2">{props.card.name}</h1>
          <img
            className="object-contain w-full"
            src={`/amongi_colors/${props.card.color}.webp`}
          />
        </div>
        <div className="flex place-content-center md:place-items-center border-t-2 border-blue-700 flex-col m-2">
          <h3>Class</h3>
          <h2 className="text-2xl">{props.card.class}</h2>
        </div>
        <div className="flex place-content-center md:place-items-center border-t-2 border-violet-700 flex-col m-2">
          <h3>Speed</h3>
          <h2 className="text-2xl">{props.card.speed} mph</h2>
        </div>
        <div className="flex place-content-center md:place-items-center border-t-2 border-violet-700 flex-col m-2">
          <h3>Paycheck</h3>
          <h2 className="text-xl">${props.card.pay.toLocaleString('en-US')} /mo</h2>
        </div>
        <div className="flex place-content-center place-items-center md:place-items-start h-full flex-col md:p-6 border-t md:border-t-0 col-span-2 md:col-span-3 bg-slate-200 py-4">
          <p className="text-2xl md:text-4xl font-bold break-normal w-full break-words">"{props.card.slogan}"</p>
        </div>
        <div className="flex place-content-center md:col-span-3 md:place-items-start h-full flex-col m-2 md:p-4 border-t md:border-t-0">
          <p className="m-4 w-full break-words">{props.card.desc}</p>
        </div>
      </div>

      <div className="bg-slate-200 flex place-items-center place-content-end flex-row w-full">
        {props.id > 0 ? <Link to={`/view/${props.id.toString()}`}><button className="flex place-content-center fa-solid fa-magnifying-glass text-2xl w-16 h-16 place-items-center"/></Link> : <></>}
      </div>
    </div>
  );
};

export default CrewmateCard;
