import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Project = ({ proj, idx }) => {
  const progress = Math.floor(Math.random() * 95 + idx);
  let navigate = useNavigate();
  return (
    <div
      className="flex h-20 p-2 mb-3 shadow-lg hover:shadow-xl cursor-pointer rounded-lg"
      onClick={() => navigate(`/project/${proj.id}`)}
    >
      <div className="h-16 w-16 flex justify-center items-center rounded-md flex-shrink-0 bg-blue-500">
        <FaLinkedinIn className="text-4xl text-white" />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center ml-5 flex-shrink-0">
          <span className="text-lg font-semibold">{proj.name}</span>
          <span className="flex items-center text-base font-thin">
            <MdOutlineTaskAlt className="mr-1" />
            {proj.taskCount} Tasks
          </span>
        </div>
        <div className="w-7/12 flex flex-col justify-center px-5">
          <div className="flex justify-between px-3">
            {" "}
            <span className=" text-gray-400 text-sm">Progress</span>
            <span className="font-semibold text-black text-sm">
              {progress}%
            </span>
          </div>
          <div className="h-2 rounded-full mt-1 bg-gray-100 w-full">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
