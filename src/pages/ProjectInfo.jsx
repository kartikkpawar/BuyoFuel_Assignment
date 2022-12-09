import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import LineGraph from "../components/LineGraph";
import { AiOutlineRollback } from "react-icons/ai";
import { TfiTrash } from "react-icons/tfi";
import Task from "../components/Task";
import Member from "../components/Members";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProject, getAllTask, getProject } from "../localStorageHelper";

const fkLooper = Array(10).fill("");

const ProjectInfo = () => {
  let navigate = useNavigate();
  const params = useParams();
  const [projecInfo] = useState(getProject(params.id));

  return (
    <div className="flex h-screen w-full">
      <div className="border w-8/12 h-full flex justify-between p-5 flex-col">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="h-12 w-12 flex items-center justify-center rounded-full shadow-xl cursor-pointer mb-5">
              <AiOutlineRollback onClick={() => navigate("/")} />
            </div>
            <div className="h-12 w-12 flex items-center justify-center rounded-full shadow-xl cursor-pointer mb-5 hover:text-red-500">
              <TfiTrash
                onClick={() => {
                  deleteProject(params.id);
                  navigate("/");
                }}
              />
            </div>
          </div>
          <Breadcrumb name={projecInfo[0].name} />
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
            {getAllTask().map((task) => (
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
