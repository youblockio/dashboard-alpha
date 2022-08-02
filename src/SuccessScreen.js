// import { useRouter } from "next/router"

import React from 'react'
import { useNavigate } from "react-router-dom";

const SuccessScreen = () => {
  // const router = useRouter()
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... h-screen w-screen">
      <div className="w-1/3 mx-auto">
      <h1 className="text-center font-mono font-extrabold pt-32 text-4xl tracking-wide text-white">
        SUCCESS! 
      </h1>
      <p className="text-center text-base mt-12 text-white">Please click Next </p>
      <p className="text-center text-base mt-5 text-white">To set up the system </p>
      <div class="flex space-x-2 pt-32 justify-center">
      <button onClick={(e) => {
              e.preventDefault();
              navigate("/setup1");
            }} type="button" className="inline-block px-6 py-2.5 bg-teal-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-900 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">Next</button>
      </div>
      </div>
    </div>
  )
}

export default SuccessScreen