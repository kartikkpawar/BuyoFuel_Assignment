import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiCheckboxFill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";

import Project from "../components/Project";

const fkProjs = Array(10).fill("");
// TODO: The functionality to create, edit delete the task

const Dashboard = () => {
  const [projIsCompleted, setProjIsCompleted] = useState(false);
  return (
    <div className=" h-screen w-full flex ">
      <div className="hideScrollBar p-6 flex-auto w-7/12 border-r border-l border-gray-300">
        {/* Welcome Message */}
        <div className="flex border-b pb-7 justify-between items-center p-1">
          <div className="flex flex-col">
            <span className="text-4xl font-semibold">
              Welcome Back, Kartik !{" "}
            </span>
            <span className="font-semibold text-gray-400">
              Let's do the best today 👋
            </span>
          </div>
          <div className="flex items-center rounded-full p-2 bg-gray-100">
            <input
              type="text"
              className="mr-3 focus:outline-none bg-transparent p-1"
              placeholder="Serch here ..."
            />
            <FiSearch className="text-xl hover:cursor-pointer" />
          </div>
        </div>
        {/* Project Info  */}
        <div>
          <div className="mt-7 flex justify-between">
            <span className="font-semibold text-xl">Project Summary</span>
            <span className="font-semibold text-lg text-blue-600 cursor-pointer flex items-center">
              View all projects <AiOutlineRight className="ml-3" />
            </span>
          </div>
          {/* Project Count and Info Box */}
          <div className="flex shadow-md rounded-lg ">
            {/* Project Count Boxes */}
            <div className="w-full h-72 mt-5 flex px-5  ">
              <div className="bg-blue-500 to-white w-4/6 p-4 h-5/6 my-auto rounded-xl flex flex-col justify-between hover:shadow-lg hover:cursor-pointer">
                <div className="mt-3 p-3 h-10 w-10 flex items-center justify-center bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
                  <BiEditAlt className="text-white" />
                </div>
                <div className="mb-3 flex flex-col">
                  <span className="text-5xl font-semibold text-white"> 12</span>
                  <span className="text-2xl font-thin text-white mt-4">
                    {" "}
                    In progress
                    <br /> projects
                  </span>
                </div>
              </div>
              <div className="ml-5 bg-black to-white w-4/6 p-4 h-5/6 my-auto rounded-xl flex flex-col justify-between hover:shadow-lg hover:cursor-pointer">
                <div className="mt-3 p-3 h-10 w-10 flex items-center justify-center bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
                  <RiCheckboxFill className="text-white" />
                </div>
                <div className="mb-3 flex flex-col">
                  <span className="text-5xl font-semibold text-white"> 20</span>
                  <span className="text-2xl font-thin text-white mt-4">
                    {" "}
                    In progress
                    <br /> projects
                  </span>
                </div>
              </div>
            </div>
            <div className="w-5/6 h-80 mt-5 flex px- rounded-lg flex-col justify-center items-center">
              <span className="font-semibold text-4xl">Total projects</span>
              <br />
              <span className="text-3xl font-thin">32</span>
            </div>
          </div>
          {/* Projects Create and View */}
          <div className="flex flex-col mt-10">
            <span className="font-semibold text-2xl">Projects</span>
            <div className="flex justify-between px-3 py-2">
              <div className="flex mt-3">
                <span
                  className={`font-semibold text-xl ${
                    !projIsCompleted ? "text-blue-500" : "text-gray-400"
                  } cursor-pointer`}
                  onClick={() => setProjIsCompleted(false)}
                >
                  Projects
                </span>
                <span
                  className={`font-semibold text-xl ${
                    projIsCompleted ? "text-blue-500" : "text-gray-400"
                  } cursor-pointer ml-5`}
                  onClick={() => setProjIsCompleted(true)}
                >
                  Completed
                </span>
              </div>
              <button className="bg-blue-500 text-white text-sm font-semibold px-2  rounded-full cursor-pointer pr-3 py-1">
                + Create
              </button>
            </div>

            {/* Projects List */}
            <div className="px-3 py-2 mt-2 ">
              {fkProjs.map((proj, idx) => (
                <Project idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex-auto w-5/12">
        {/* user profile info */}
        {/* calender */}
        {/* User Task - Create,edit,Delete */}
      </div>
    </div>
  );
};

export default Dashboard;
