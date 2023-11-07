import React, { useState, useEffect, ChangeEventHandler } from "react";
import { Link } from "react-router-dom";

interface inpInterface {
  name: string;
  color: string;
  class: string;
  speed: number;
  desc: string;
  slogan: string;
  pay: number;
  id: number;
}

const EditBoard = (props: {
  inputs: inpInterface;
  handleChange: any;
  submitHandler: any;
  deleteOrder: any;
  classDefs: any;
}) => {
  return (
    <div className="w-full max-w-screen-md xl:max-w-screen-lg bg-white rounded-md flex-col place-items-start p-4 mb-4 shadow-md">
      <h2 className="font-bold text-xl">Edit</h2>
      <form className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-4 m-4">
          <input
            type="text"
            name="name"
            className="text-3xl text-start outline-none w-full border-b-2"
            maxLength={20}
            required
            placeholder="name... (max 20 chars)"
            value={props.inputs.name}
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="m-4 flex-col flex place-items-center">
          <label htmlFor="crewmateColor">Color</label>
          <select
            required
            name="color"
            className="m-4 text-lg w-full"
            value={props.inputs.color}
            onChange={props.handleChange}
          >
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Orange">Orange</option>
            <option value="Pink">Pink</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>
        <div className="m-4 flex-col flex place-items-center">
          <label htmlFor="class">Class</label>
          <select
            required
            name="class"
            className="m-4 text-lg w-full"
            value={props.inputs.class}
            onChange={props.handleChange}
          >
            <option value="Captain">Captain</option>
            <option value="Consultant">Overpaid Consultant</option>
            <option value="Officer">Deck Officer</option>
            <option value="Police">Internal Police</option>
            <option value="Veteran">Experienced Hand</option>
            <option value="Lackey">Lackey</option>
            <option value="Intern">Unpaid Intern</option>
            <option value="Passenger">Unknowing Passenger</option>
            <option value="Exploiter">Exploiter</option>
          </select>
        </div>
        <div className="m-4 flex-col flex place-items-center">
          <label htmlFor="speed">Speed</label>
          <input
            required
            type="range"
            min={props.classDefs[props.inputs.class].min_speed}
            max={props.classDefs[props.inputs.class].max_speed}
            step={0.1}
            id="speed"
            name="speed"
            className="m-4"
            value={props.inputs.speed}
            onChange={props.handleChange}
          />
          <h6>{props.inputs.speed} mph</h6>
        </div>
        <div className="m-4 flex-col flex place-items-center">
          <label htmlFor="pay">Paycheck</label>
          <input
            required
            type="range"
            min={props.classDefs[props.inputs.class].min_pay}
            max={props.classDefs[props.inputs.class].max_pay}
            step={0.01}
            id="pay"
            name="pay"
            className="m-4"
            value={props.inputs.pay}
            onChange={props.handleChange}
          />
          <h6>${props.inputs.pay.toLocaleString("en-US")}/mo</h6>
        </div>
        <div className="m-4 flex-col flex md:col-span-4 border-y py-2">
          <h2>Job Description</h2>
          <p className="py-4">
            {props.classDefs[props.inputs.class].default_desc}
          </p>
        </div>
        <div className="m-4 flex-col flex md:col-span-3">
          <label htmlFor="description">Description</label>
          <textarea
            value={props.inputs.desc}
            onChange={props.handleChange}
            className="h-32 w-full outline-none my-4 resize-none"
            maxLength={250}
            name="desc"
            placeholder="Enter description here... (max 500 chars)"
          ></textarea>
        </div>
        <div className="m-4 md:pl-4 flex-col md:border-l-2">
          <label htmlFor="slogan">Slogan</label>
          <textarea
            value={props.inputs.slogan}
            onChange={props.handleChange}
            className="h-32 w-full outline-none my-4 resize-none"
            maxLength={60}
            name="slogan"
            placeholder="Enter slogan here... (max 60 chars)"
          ></textarea>
        </div>
      </form>
      <div className="flex place-content-end">
        <button
          onClick={props.deleteOrder}
          className="w-36 bg-red-500 text-white hover:bg-red-700 mx-8 border-2 border-blue-600 hover:border-violet-700 transition-all delay-75 rounded-md p-4 text-xl"
        >
          Delete
        </button>
        <button
          type="submit"
          onClick={props.submitHandler}
          className="w-36 bg-green-500 text-white hover:bg-green-700 border-2 border-blue-600 hover:border-violet-700 transition-all delay-75 rounded-md p-4 text-xl"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBoard;
