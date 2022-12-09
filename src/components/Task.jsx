import { BiEditAlt } from "react-icons/bi";
import { TfiTrash } from "react-icons/tfi";
import { BsCheck2All } from "react-icons/bs";

const Task = () => {
  return (
    <div className="h-20 p-1 px-3 shadow-lg rounded-lg flex justify-between items-center mb-5 hover:shadow-xl">
      <div className="flex flex-col justify-around h-full">
        <span className="text-2xl font-semibold text-black">
          This is random task 1
        </span>
        <span className="font-thin text-gray-500">Staaak Project</span>
      </div>
      <div className="flex">
        <BiEditAlt className="mr-4 text-2xl text-gray-500 hover:text-blue-500 cursor-pointer" />
        <TfiTrash className="mr-4 text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
        <BsCheck2All className="mr-4 text-2xl text-gray-500 hover:text-green-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Task;
