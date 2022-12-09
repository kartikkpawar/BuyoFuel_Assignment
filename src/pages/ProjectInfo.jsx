import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import LineGraph from "../components/LineGraph";
import { AiOutlineRollback } from "react-icons/ai";
import Task from "../components/Task";
import Member from "../components/Members";

const fkLooper = Array(10).fill("");

const ProjectInfo = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="border w-8/12 h-full flex justify-between p-5 flex-col">
        <div className="flex flex-col">
          <div className="h-12 w-12 flex items-center justify-center rounded-full shadow-xl cursor-pointer mb-5">
            <AiOutlineRollback />
          </div>
          <Breadcrumb />
        </div>
        <LineGraph />
      </div>
      <div className="border w-4/12 h-full">
        {/* User Task - Create,edit,Delete */}

        <div className="flex flex-col h-3/6 2xl:h-2/4 p-2 ">
          <div className="flex justify-between px-3 py-2 items-center h-1/6">
            <span className="font-semibold text-2xl">Tasks</span>
            <button className="bg-blue-500 text-white text-lg font-semibold px-2  rounded-full cursor-pointer pr-3 py-1">
              + Add
            </button>
          </div>
          {/* Task's List */}

          <div className="mt-4 h-5/6 hideScrollBar">
            {fkLooper.map((task) => (
              <Task />
            ))}
          </div>
        </div>

        <div className="flex flex-col h-3/6 2xl:h-2/4 p-2 ">
          <div className="flex justify-between px-3 py-2 items-center h-1/6">
            <span className="font-semibold text-2xl">Members</span>
            <button className="bg-red-500 text-white text-lg font-semibold px-2  rounded-full cursor-pointer pr-3 py-1">
              + Add
            </button>
          </div>
          {/* Task's List */}

          <div className="mt-4 h-5/6 hideScrollBar">
            {fkLooper.map((task) => (
              <Member />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
