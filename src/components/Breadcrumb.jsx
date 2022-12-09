import { AiOutlineRight } from "react-icons/ai";
const Breadcrumb = () => {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-2xl font-semibold cursor-pointer">
        Dashboard
      </span>
      <AiOutlineRight className=" text-2xl" />
      <span className="mr-2 text-2xl font-semibold cursor-pointer">
        Projects
      </span>
      <AiOutlineRight className="mr-2 text-2xl" />
      <span className=" text-2xl text-blue-500 font-semibold cursor-pointer">
        Staaak Project
      </span>
    </div>
  );
};

export default Breadcrumb;
