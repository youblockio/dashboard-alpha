import React from 'react'
// import { useRouter } from "next/router"
// import Image from "next/image"
import element from "./assets/element1.png"
import { useNavigate } from "react-router-dom";

const Onboarding3 = () => {
  // const router = useRouter()
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... h-screen w-screen justify-center items-center">
      <div className="my-auto mx-auto ">
        <div className="flex flex-row justify-center py-40">
            <div className=" flex-col">
              <h1 className="font-mono font-extrabold text-4xl tracking-wide text-white inline-flex">
              LET’S BEGIN! 
              </h1>
              <div className="flex my-2 flex-col  py-9">
                <p className="font-serif text-2xl text-white inline-flex mr-6">Welcome to Youblock!
                </p>
                <div className="flex space-x-2 justify-centerflex-col py-24 ">
                <button onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }} type="button" className="px-6 py-2.5 bg-[#17A40B] text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out inline-flex">Start</button>
                </div>
              </div>
            </div>
            <div className=" flex-col pl-16 grid items-center"><img src={element} className="h-72 w-72" /></div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding3