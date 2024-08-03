import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiNinjaStar } from "react-icons/gi";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

const Header = ({ toggleSidebar }: any) => {
  const handleClick = () => {
    toggleSidebar();
  };
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const handleAnimate = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 2000); // animation duration
  };

  return (
    <header className="bg-white h-16 flex justify-between items-center px-4">
      <div className="flex items-center">
        <motion.div
          ref={ref}
          className="box"
          style={{ x, y, rotate: 360 }}
          animate={{ x, y }}
          transition={{ duration: 50 }}
        >
          <GiNinjaStar className="text-gray-800 h-8 w-6 mr-6 animate-spin duration-2000 " />
        </motion.div>
        <h1 className="text-lg font-bold text-gray-800 ">Ninja-Map</h1>
      </div>
      <FaBars
        color=""
        size={22}
        className=" text-gray-600 hover:text-gray-900"
        onClick={handleClick}
      />
    </header>
  );
};

export default Header;
