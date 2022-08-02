import React from 'react'
// import { useRouter } from "next/router"
// import Image from 'next/image'
import Vertical from "./assets/vertical.png"
import { useNavigate } from "react-router-dom";

const SetupScreen2 = () => {
  // const router = useRouter()
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... h-screen w-screen">
      <div className="w-2/4 mx-auto">
      <h1 className="text-center font-mono font-extrabold pt-32 text-4xl tracking-wide text-white ">
        CONGRATULATIONS 
      </h1>
      <div className="my-2 pt-6 flex flex-col items-center">
      <img src={Vertical} className="h-36 w-36" />
      </div>
      <p className="text-center text-base mt-8 mb-5 text-white">You are done !</p>
      <p className="text-center text-base mt-5 mb-5 text-white">Welcome to the Youblock family </p>
      <div class="flex space-x-2 pt-5 justify-center">
      <button onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }} type="button" className="inline-block px-24 py-4 bg-[#17A40B] text-white font-medium text-base leading-tight rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">Begin Journey</button>
      </div>
      </div>
    </div>
  )
}

export default SetupScreen2