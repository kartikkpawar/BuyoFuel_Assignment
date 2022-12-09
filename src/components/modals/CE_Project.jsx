import { nanoid } from "nanoid";
import React, { useState } from "react";
import { addNewProject } from "../../localStorageHelper";

const CEProject = ({ close, type }) => {
  const [input, setInput] = useState("");
  const handleProjecCreation = () => {
    if (input === "") return alert("Enter Project name");
    addNewProject(input, nanoid());
    return close();
  };
  return (
    <div className="absolute h-full w-full bg-opacity-60 bg-black top-0 flex items-center justify-center">
      <div className="p-10 rounded-xl bg-white">
        <div className="border-2 border-blue-500 rounded-lg p-1 w-full mt-5">
          <input
            value={input}
            type="text"
            className="p-2 w-full focus:outline-none text-lg"
            placeholder="Project Name"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          className="mt-5 text-white bg-blue-500 py-2 px-3 text-xl rounded-lg shadow-md mr-5"
          onClick={handleProjecCreation}
        >
          Create Project
        </button>
        <button
          className="mt-5 text-white bg-red-500 py-2 px-3 text-xl rounded-lg shadow-md"
          onClick={() => close()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CEProject;
