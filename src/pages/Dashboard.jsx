import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiCheckboxFill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BiBell, BiChevronRight, BiChevronLeft } from "react-icons/bi";

import Project from "../components/Project";
import Task from "../components/Task";
import { getAllProjects, getAllTask } from "../localStorageHelper";
import CEProject from "../components/modals/CE_Project";
import CETask from "../components/modals/CE_Task";

const fkdates = [
  { day: "Mon", date: "09", isToday: false },
  { day: "Tue", date: "10", isToday: false },
  { day: "Wed", date: "11", isToday: true },
  { day: "Thu", date: "12", isToday: false },
  { day: "Fri", date: "13", isToday: false },
  { day: "Sat", date: "14", isToday: false },
  { day: "Sun", date: "15", isToday: false },
];

const Dashboard = () => {
  const [projects, setProjects] = useState(getAllProjects());
  const [task, setTask] = useState(getAllTask());
  const [rerender, setRerender] = useState(false);
  const [projIsCompleted, setProjIsCompleted] = useState(false);
  const [createProjModalOpen, setCreateProjModalOpen] = useState(false);
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);
  useEffect(() => {
    setProjects(getAllProjects());
    setTask(getAllTask());
  }, [rerender]);
  return (
    <div className=" h-screen w-full flex ">
      <div className="hideScrollBar p-6 flex-auto w-7/12 border-r border-l border-gray-300">
        {/* Welcome Message */}
        <div className="flex border-b pb-7 justify-between items-center p-1">
          <div className="flex flex-col">
            <span className="2xl:text-4xl text-3xl font-semibold">
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
              <div className="bg-blue-500 to-white 2xl:w-4/6 p-4 2xl:h-5/6 h-3/4 w-3/4  my-auto rounded-xl flex flex-col justify-between hover:shadow-lg hover:cursor-pointer">
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
              <div className="ml-5 bg-black to-white  2xl:w-4/6 p-4 2xl:h-5/6 h-3/4 w-3/4  my-auto rounded-xl flex flex-col justify-between hover:shadow-lg hover:cursor-pointer">
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
              <span className="font-semibold 2xl:text-4xl text-3xl">
                Total projects
              </span>
              <br />
              <span className="2xl:text-3xl text-2xl font-thin">32</span>
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
              <button
                className="bg-blue-500 text-white text-sm font-semibold px-2  rounded-full cursor-pointer pr-3 py-1"
                onClick={() => setCreateProjModalOpen(true)}
              >
                + Create
              </button>
            </div>

            {/* Projects List */}
            <div className="px-3 py-2 mt-2 ">
              {projects.length > 0 ? (
                projects.map((proj, idx) =>
                  !projIsCompleted ? (
                    <Project idx={idx} proj={proj} />
                  ) : (
                    proj.status && <Project idx={idx} proj={proj} />
                  )
                )
              ) : (
                <div className="flex justify-center">
                  <span className="text-xl text-gray-500">
                    No projects pls add some
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex-auto w-5/12 h-full flex flex-col">
        {/* User Profile Card */}
        <div className="2xl:h-1/4 h-2/6">
          {" "}
          <div className="p-6 2xl:h-24 h-20 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://previews.123rf.com/images/jemastock/jemastock1906/jemastock190617793/124340525-businessman-avatar-cartoon-character-portrait-vector-illustration-graphic-design.jpg"
                alt=""
                className="aspect-square 2xl:h-20 h-16 rounded-full shadow-sm"
              />
              <div className="flex flex-col ml-3">
                <span className="text-xl font-semibold">Kartik Pawar</span>
                <span className="text-gray-500 text-sm mt-2">
                  @kartikkpawar
                </span>
              </div>
              <HiOutlineChevronDown className="ml-5" />
            </div>
            <div className="2xl:h-12 2xl:w-12 h-10 w-10 flex justify-center items-center rounded-full shadow-lg relative ">
              <BiBell className="text-xl" />
              <div className="2xl:h-3 2xl:w-3 h-2 w-2 bg-red-500 rounded-full absolute top-1 right-0"></div>
            </div>
          </div>
          {/* calender */}
          <div className=" mt-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold 2xl:text-3xl text-lg">
                December 2022
              </span>
              <div className="flex 2xl:text-3xl text-xl">
                <div className="border mr-2 rounded-full cursor-pointer">
                  <BiChevronLeft />
                </div>
                <div className="border mr-2 rounded-full cursor-pointer">
                  <BiChevronRight />
                </div>
              </div>
            </div>
            <div className="flex items-center  justify-around">
              {fkdates.map((date) => (
                <div className="flex justify-between items-center p-1 flex-col">
                  <span className="text-lg text-gray-400 font-semibold">
                    {" "}
                    {date.day}
                  </span>
                  <span
                    className={`text-xl text-gray-400 font-semibold px-2 p-1 rounded-full ${
                      date.isToday && "bg-blue-400 !text-white"
                    }`}
                  >
                    {" "}
                    {date.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <hr className="2xl:mt-3 mt-2" />
        </div>
        {/* User Task - Create,edit,Delete */}

        <div className="flex flex-col h-5/6 2xl:h-3/4 mt-5">
          <div className="flex justify-between px-3 py-2 items-center h-1/6">
            <span className="font-semibold text-2xl">Tasks</span>
            <button
              className="bg-blue-500 text-white text-lg font-semibold px-2  rounded-full cursor-pointer pr-3 py-1"
              onClick={() => {
                setCreateProjModalOpen(true);
              }}
            >
              + Add
            </button>
          </div>
          {/* Task's List */}

          <div className="mt-4 h-5/6 hideScrollBar">
            {task.map((task) => (
              <Task />
            ))}
          </div>
        </div>
      </div>
      {createProjModalOpen && (
        <CEProject
          close={() => {
            setCreateProjModalOpen(false);
            setRerender(!rerender);
          }}
          type="Create Project"
        />
      )}
      {createTaskModalOpen && <CETask />}
    </div>
  );
};

export default Dashboard;
