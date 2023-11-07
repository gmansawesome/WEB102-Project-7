import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";

import CrewmateCard from "../components/CrewmateCard";
import CreationBoard from "../components/CreationBoard";

import { motion } from "framer-motion";
import defs from "../misc/defs";

const supabaseUrl = "https://tveaioozxzzocjpcgfzz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWFpb296eHp6b2NqcGNnZnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTIxODksImV4cCI6MTk5NjIyODE4OX0.os6zInvuY_qJ7i0fEaekhy8wIdpV4M6JDh1whgYHt0k";

console.log(supabaseKey);

const classDefs = defs.classDefs;

interface classInterface {
  min_speed: number;
  max_speed: number;
  min_pay: number;
  max_pay: number;
}

const Create = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [realState, setRealState] = useState<boolean>(true);
  const [inputs, setInputs] = useState({
    name: "",
    color: "Black",
    class: "Lackey",
    speed: 1.0,
    desc: "An unassuming and regular crewmate.",
    slogan: "I'm a regular crewmate.",
    pay: 200.0,
  });

  const parseInput = (e: any) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "class") {
      setInputs((prevState) => ({
        ...prevState,
        pay:
          (classDefs[e.target.value as keyof object]["min_pay"] +
            classDefs[e.target.value as keyof object]["max_pay"]) /
          2,
        speed:
          (classDefs[e.target.value as keyof object]["min_speed"] +
            classDefs[e.target.value as keyof object]["max_speed"]) /
          2,
      }));
    }
  };

  const validCreateCrewmate = async () => {
    let str = {
      nameOf: inputs.name,
      color: inputs.color,
      class: inputs.class,
      speed: inputs.speed,
      desc: inputs.desc,
      slogan: inputs.slogan,
      pay: inputs.pay,
    };

    let { data, error } = await supabase.from("crewmates").insert([str]);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };
  const create = (formSubmitEvent: Event) => {
    formSubmitEvent.preventDefault();
    if (inputs.name == "") {
    } else {
      validCreateCrewmate();
      setRealState(false);
    }
    console.log(inputs);
  };
  
  const breakExit = () => {
    setRealState(false)
  }

  return (
    <motion.div
      className="w-full h-full overflow-hidden"
      initial={{ opacity: 0, y: "5%" }}
      animate={{ opacity: 1, y: "0%" }}
    >
      {!realState ? <Navigate to="/crewmates" replace={true} /> : <></>}
      <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  md:m-16">
      <button className="my-4" onClick={breakExit}><i className="fa-solid fa-arrow-left text-4xl"></i></button>
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          Create a New Crewmate
        </h1>
        <div className="grid xl:grid-cols-2">
          <div>
            <h2 className="pt-4 pb-2 text-xl">Customize</h2>
            <CreationBoard
              inputs={{ id: 0, ...inputs }}
              submitHandler={create}
              handleChange={(e: any) => parseInput(e)}
              classDefs={classDefs}
            />
          </div>
          <div className="lg:m-4">
            <h2 className="pt-4 pb-2 text-xl">Card Preview</h2>
            <CrewmateCard card={inputs} id={0} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Create;
