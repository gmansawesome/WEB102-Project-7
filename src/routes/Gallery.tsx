import React, { useEffect, useState } from "react";
import LinkBtn from "../components/LinkBtn";

import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tveaioozxzzocjpcgfzz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWFpb296eHp6b2NqcGNnZnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTIxODksImV4cCI6MTk5NjIyODE4OX0.os6zInvuY_qJ7i0fEaekhy8wIdpV4M6JDh1whgYHt0k";

import CrewmateCard from "../components/CrewmateCard";

interface inpInterface {
  name: string;
  color: string;
  class: string;
  speed: number;
  desc: string;
  slogan: string;
  pay: number;
}


const Gallery = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  let bounce = false;
  let [crewM, setCrew] = useState<Array<any>>([]);

  const readCrewmates = async () => {
    let { data: crewmates } = await supabase.from("crewmates").select("*");

    if (crewmates) {
      let eList = crewmates.map((crewmate) => {
        let g: inpInterface = {
          name: crewmate.nameOf,
          color: crewmate.color,
          class: crewmate.class,
          speed: crewmate.speed,
          desc: crewmate.desc,
          slogan: crewmate.slogan,
          pay: crewmate.pay,
        };
        return (<li className="my-16">
          <CrewmateCard id={crewmate.id} card={g}/>
        </li>)
      });
      setCrew(eList);
    }
  };

  useEffect(() => {
    if (!bounce) {
        bounce = true;
        readCrewmates();
    }
    
  })
  return (
    <motion.div
      className="w-full h-full overflow-hidden"
      initial={{ opacity: 0, y: "5%" }}
      animate={{ opacity: 1, y: "0%" }}
    >
      <div className="w-full max-w-screen-md md:m-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Your Crewmate Gallery!
        </h1>
        {crewM.length < 1 ? (
          <>
            <h3 className="text-lg my-12">You haven't made a crewmate yet!</h3>
            <LinkBtn route="../create" routeStr="Create one here!" />
          </>
        ) : (
          <>
            <ul>{crewM}</ul>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Gallery;
