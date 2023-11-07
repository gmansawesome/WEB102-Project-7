import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="w-full h-full overflow-hidden"
      initial={{ opacity: 0, y: "5%" }}
      animate={{ opacity: 1, y: "0%" }}
    >
      <div className="w-full max-w-screen-md md:m-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to the Crewmate Creator!
        </h1>
        <h3 className="text-lg my-12">
          Here, you can create your very own set of crewmates before releasing
          them into the vast, deadly, and empty vacuum of space!
        </h3>
        <img
          src="/among-us-all-characters-png.webp"
          className="w-full h-96 object-contain"
        />
      </div>
    </motion.div>
  );
};

export default Home;
