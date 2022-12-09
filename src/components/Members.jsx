import { TfiTrash } from "react-icons/tfi";

const Member = () => {
  return (
    <div className="h-20 p-1 px-3 shadow-lg rounded-lg flex justify-between items-center mb-5 hover:shadow-xl">
      <div className="flex items-center h-full">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
          alt="Member profile"
          className="aspect-square h-16 rounded-full shadow-sm"
        />
        <span className="font-semibold text-gray-500 ml-3">
          Lorem, ipsum dolor.
        </span>
      </div>
      <TfiTrash className="mr-4 text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
    </div>
  );
};

export default Member;
