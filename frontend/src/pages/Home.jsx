import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Random from "../components/Random";
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Veggie />
      <Popular />
      <Random />
    </motion.div>
  );
}

export default Home;
