import React from "react";

import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-row justify-center py-[20px]  w-[100%] h-[100vh] bg-[#9A616D]">
      <div className="flex flex-row  w-[95%] px-[10%] rounded-md">
        <div className="flex flex-col w-[50%] rounded-md h-[100%]">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            style={{ height: "100%" }}
          />
        </div>
        <div className="flex flex-col pt-[10%] w-[50%] bg-white p-[50px] rounded-md">
          {/* <img
            src="../../src/assets/coop.png"
            alt="coop-logo"
            className="w-[150px]  mt-[30px]"
          /> */}
          <div className="flex flex-col  space-y-[20px] mb-[30px] mt-[30px] px-[5%]">
            <span className="self-center text-[25px] font-medium">
              Sign into your account
            </span>
            <input
              type="text"
              placeholder="Username"
              className="border-[1px] p-2 py-2 rounded-md border-gray-400 placeholder-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] p-2 py-2 rounded-md border-gray-400 placeholder-gray-500"
            />
            <button
              className="bg-blue-500 text-white p-2 py-2 rounded-md"
              onClick={() => navigate("/payslip")}
            >
              LOG IN
            </button>
          </div>
          <button>Forgot password?</button>
          <div className="flex flex-row self-center items-center space-x-2 mt-2">
            <span> Don't have an account?</span>
            <button className="text-[14px] border-[3px] border-blue-500 p-2 py-1 rounded-md text-blue-500">
              CREATE NEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
