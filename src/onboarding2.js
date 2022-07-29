import React from 'react'
// import { useRouter } from "next/router"
import house from "./assets/Solar Powered Home.png"
// import Image from "next/image"
import { useNavigate } from "react-router-dom";

const Onboarding2 = () => {
    // const router = useRouter()
    const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... h-screen w-screen">
      <div className="w-3/4 mx-auto pl-10">
      <div className="flex flex-row py-40">
      <div className=" flex-col">
                <h1 className="text-center font-mono font-extrabold text-4xl tracking-wide text-white inline-flex">
                WELCOME 
                </h1>
                <div className="flex my-2 flex-col  py-9">
                    <p className="font-serif text-sm text-white inline-flex mr-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et morbi id tortor sit. Pharetra posuere euismod cras egestas suscipit leo.
                    Dolor nibh a, congue turpis. Eget congue fusce sagittis tellus. Sit vitae ornare vulputate eu sed diam
                    </p>
                    </div>
                <div className="flex space-x-2 justify-centerflex-col py-7 ">
                <button onClick={(e) => {
              e.preventDefault();
              navigate("/2");
            }} type="button" className="px-6 py-2.5 bg-[#17A40B] text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out inline-flex">Next</button>
                </div>
                </div>
                <div className=" flex-col pl-16 grid"><img src={house} className="h-auto w-auto" /></div>
      </div>
      </div>
    </div>
  )
}

export default Onboarding2