

import React from 'react'
import { useNavigate } from "react-router-dom";

const VerifyScreen = () => {
  // const router = useRouter()
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... h-screen w-screen">
      <div className="w-1/3 mx-auto">
      <h1 className="text-center font-mono font-extrabold pt-32 text-4xl tracking-wide text-white">
        VERIFY 
      </h1>
      <form>
      <p className="text-center text-base mt-5 text-white">Please enter the verification code to proceed</p>
      <div className="my-2 flex flex-col pt-5">
          <input
            type="verification-code"
            
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-white"
          />
        </div>
        <div class="flex space-x-2 pt-10 justify-center">
      <button onClick={(e) => {
              e.preventDefault();
              navigate("/setup1");
            }} type="button" className="inline-block px-6 py-2.5 bg-[#17A40B] text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Next</button>
      </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyScreen