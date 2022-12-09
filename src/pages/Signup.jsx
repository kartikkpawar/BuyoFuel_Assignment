import { useNavigate } from "react-router-dom";
import { authUser } from "../localStorageHelper";

const Signup = () => {
  let navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center flex-col">
      <div className=" mb-5 flex flex-col items-center">
        <span className="text-blue-500 text-6xl font-semibold">Project </span>
        <span className="text-2xl font-thin mt-1">management dashboard</span>
      </div>
      <div className="h-3/5 w-3/12 rounded-xl shadow-xl flex flex-col items-center justify-center">
        <div className="w-5/6">
          <div className="border-2 border-blue-500 rounded-lg p-1 w-full">
            <input
              type="text"
              className="p-2 w-full focus:outline-none text-lg"
              placeholder="Name"
            />
          </div>
          <div className="border-2 border-blue-500 rounded-lg p-1 w-full mt-5">
            <input
              type="text"
              className="p-2 w-full focus:outline-none text-lg"
              placeholder="Email address"
            />
          </div>
          <div className="border-2 border-blue-500 rounded-lg p-1 w-full mt-5">
            <input
              type="password"
              className="p-2 w-full focus:outline-none text-lg"
              placeholder="Password"
            />
          </div>
          <div className="border-2 border-blue-500 rounded-lg p-1 w-full mt-5">
            <input
              type="password"
              className="p-2 w-full focus:outline-none text-lg"
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div className="mt-2 text-md">
          <span className="m">Already user? </span>
          <span className="font-semibold text-blue-500 cursor-pointer">
            SignIn
          </span>
        </div>
        <button
          className="mt-5 text-white bg-blue-500 py-2 px-3 text-xl rounded-lg shadow-md"
          onClick={() => {
            authUser("SIGNIN");
            navigate("/dashboard");
          }}
        >
          Sign up
        </button>
      </div>
      <button></button>
    </div>
  );
};

export default Signup;
