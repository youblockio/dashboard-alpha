import React from 'react'
// import { useRouter } from "next/router"
import { useNavigate } from "react-router-dom";

const Setup1Screen = () => {
  // const router = useRouter()
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... h-screen w-screen">
      <div className="w-1/3 mx-auto">
      <h1 className="text-center font-mono font-extrabold pt-32 text-4xl tracking-wide text-white">
        SETUP AND CONFIG 
      </h1>
      <p className="text-center text-base mt-10 mb-10 text-white">Please Enter Miner Id Where Applicable </p>
      <div className="flex flex-row justify-between">
      <label className="text-white font-bold text-xm tracking-wide mt-10">
            TFT(Threefold) Node Id
          </label>
          <label className="text-white mt-10 text-xm">verify</label>
          </div>
      <div className="my-2 flex flex-col p-2 pb-10">
          <input
            type="verification-code"
            
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-teal-800"
          />
        </div>
        <div className="flex flex-row justify-between">
        <label className="text-white font-bold text-xm tracking-wide">
            HNT(Helium) Miner Id
          </label>
          <label className="text-white text-xm">verify</label>
          </div>
        <div className="my-2 flex flex-col p-2 ">
          <input
            type="verification-code"
            
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-teal-800"
          />
        </div>
        <div class="flex space-x-2 pt-10 justify-center">
      <button onClick={(e) => {
              e.preventDefault();
              navigate("/setup2");
            }} type="button" className="inline-block px-6 py-2.5 bg-[#17A40B] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">Next</button>
      </div>
      </div>
    </div>
  )
}

export default Setup1Screen