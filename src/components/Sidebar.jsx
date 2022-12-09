import React, { useState } from "react";
import { menuItems } from "../utils/menuItems";
import { SiOpenlayers } from "react-icons/si";
import { CgLogOut } from "react-icons/cg";

const Sidebar = () => {
  //   const [menuExpanded, setMenuExpanded] = useState(false);
  //   const handelMenuHoverOpen = (e) => {};

  return (
    <div className="h-screen flex flex-col py-3 px-6 w-max">
      <div className="text-3xl mt-5 text-blue-500">
        <SiOpenlayers />
      </div>
      <div className="mt-32 flex flex-col justify-between h-5/6 ">
        <div className="">
          {menuItems.map((item, idx) => (
            <div
              className={`flex items-center justify-between text-xl mt-8 ${
                idx === 0 ? "text-blue-500" : "text-gray-400"
              } hover:text-blue-500 hover:cursor-pointer`}
            >
              <span className="text-3xl "> {item.icon}</span>{" "}
            </div>
          ))}
        </div>
        <div className="text-3xl mt-5 text-gray-400 hover:text-blue-500 hover:cursor-pointer">
          <CgLogOut />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
