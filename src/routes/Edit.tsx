import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

import CrewmateCard from "../components/CrewmateCard";
import EditBoard from "../components/EditBoard";

import { motion } from "framer-motion";
import defs from "../misc/defs";
import { useParams } from "react-router-dom";

const supabaseUrl = "https://tveaioozxzzocjpcgfzz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWFpb296eHp6b2NqcGNnZnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTIxODksImV4cCI6MTk5NjIyODE4OX0.os6zInvuY_qJ7i0fEaekhy8wIdpV4M6JDh1whgYHt0k";

console.log(supabaseKey);

const classDefs = defs.classDefs
interface inpInterface {
    id: number,
    name: string;
    color: string;
    class: string;
    speed: number;
    desc: string;
    slogan: string;
    pay: number;
  }

interface classInterface {
  min_speed: number;
  max_speed: number;
  min_pay: number;
  max_pay: number;
}

const Edit = () => {
  const params = useParams();
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [realState, setRealState] = useState<boolean>(true);
  const [inputs, setInputsA] = useState<inpInterface>({
    id: 0,
    name: "",
    color: "Black",
    class: "Lackey",
    speed: 1.0,
    desc: "An unassuming and regular crewmate.",
    slogan: "I'm a regular crewmate.",
    pay: 1000.0,
  });

  const readCrewmateToEdit = async () => {
    let { data: crewmate } = await supabase.from("crewmates").select("*").eq('id', params.id)
    if (crewmate) {
        console.log(crewmate)
    
        let c = crewmate[0];
        setInputsA({
            id: c.id,
            name: c.nameOf,
            color: c.color,
            class: c.class,
            speed: c.speed,
            desc: c.desc,
            slogan: c.slogan,
            pay: c.pay,
          })
    }
  };

  useEffect(() => {
    readCrewmateToEdit();
  },[])
  

  const parseInput = (e: any) => {
    setInputsA((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "class") {
      setInputsA((prevState) => ({
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

  const validEditCrewmate = async () => {
    let str = {   
        nameOf: inputs.name,
        color: inputs.color,
        class: inputs.class,
        speed: inputs.speed,
        desc: inputs.desc,
        slogan: inputs.slogan,
        pay: inputs.pay
    }
    console.log(inputs.id)
    let { data, error } = await supabase
      .from("crewmates")
      .update(str)
      .eq('id', inputs.id)
    if (error) {
        console.log(error)
    }
    if (data) {
      console.log(data);
    }
    setRealState(false)
  };

  const deleteCrewmate = async () => {
    let { data, error } = await supabase
      .from("crewmates")
      .delete()
      .eq('id', inputs.id)
    if (error) {
        console.log(error)
    }

    setRealState(false)
  };

  const edit = (formSubmitEvent: Event) => {

    formSubmitEvent.preventDefault();
    if (inputs.name == "") {
    } else {
      validEditCrewmate();
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
        {!realState ? <Navigate to="/crewmates" replace={true}/> : <></>}
      <div className="w-full max-w-screen-md md:m-16">
      <button className="my-4" onClick={breakExit}><i className="fa-solid fa-arrow-left text-4xl"></i></button>
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          Edit {inputs.name}...
        </h1>
        <h2 className="pt-4 pb-2 text-xl">Customize</h2>
        <EditBoard
          inputs={inputs}
          submitHandler={edit}
          handleChange={(e: any) => parseInput(e)}
          classDefs={classDefs}
          deleteOrder={deleteCrewmate}
        />
        <h2 className="pt-4 pb-2 text-xl">Card Preview</h2>
        <CrewmateCard card={inputs} id={inputs.id} />
      </div>
    </motion.div>
  );
};

export default Edit;
