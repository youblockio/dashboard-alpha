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
      <div className="w-4/5 mx-auto pl-10">
      <div className="flex flex-row pt-40">
      <div className=" flex-col w-2/5 flex-wrap">
                <h1 className="text-center font-mono font-extrabold text-4xl tracking-wide text-white inline-flex">
                WELCOME 
                </h1>
                <div className="flex my-2 flex-col  py-9 ">
                    <p className="font-serif text-justify text-base text-white inline-flex mr-6">Our plug and mine Hybrid Machine provides you customers with reward in the form of digital currency. Powered by solar panel energy, we are using Blockchain technology to create high ROI while contributing to the development of a greener decentralized internet.
             <br/>We ensure a dual sources of revenue and maximize returns through: 
         <br/> Proof of Energy, using solar energy
     <br/>Proof of Storage, using Threefold technology, 
<br/>
   Be green and get rewarded. 
                    </p>
                    </div>
                <div className="flex space-x-2 justify-centerflex-col py-2 ">
                <button onClick={(e) => {
              e.preventDefault();
              navigate("/1");
            }} type="button" className="px-6 py-2.5 bg-[#17A40B] text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out inline-flex">Next</button>
                </div>
                </div>
                <div className=" flex-col pl-10  grid pt-16"><img src={house} className="w-92 h-64" /></div>
      </div>
      </div>
    </div>
  )
}

export default Onboarding2