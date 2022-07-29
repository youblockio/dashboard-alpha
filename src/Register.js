// import "../styles/carousel.css";
// import Link from "next/link";
// import { useRouter } from "next/router"
import React from "react"
import { useNavigate } from "react-router-dom";
import googleButton from "./assets/image 50.png";
import facebookButton from "./assets/image 51.png";
import tweetButton from "./assets/image 52.png";


const Register = () => {
  // const router = useRouter()
  const navigate = useNavigate();

    return (
      <div className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... h-screen w-screen">
      <div className="mx-auto my-auto">
      <div className="flex flex-row grid-cols-3 divide-x-2 justify-center pt-32">
      <div className="pr-16 w-5/12">
        <h1 className="text-center font-mono font-extrabold text-4xl tracking-wide flex-wrap text-white">
        REGISTRATION 
      </h1>
      <form>
      <p className="text-center text-base mt-5 text-white">Please Enter Your details here</p>
        <div className="my-2 flex flex-col pt-5">
          <input
            type="email"
            placeholder="E-mail"
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-white"
          />
        </div>
        <div className="my-2 flex flex-col pt-5">
          <input
            type="name"
            placeholder="Name"
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-white"
          />
        </div>
        <div className="my-2 flex flex-col pt-5">
          <input
            type="username"
            placeholder="UserName"
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-white"
          />
        </div>
        <p className="text-center text-base mt-3 text-white">Please Create a Strong Password</p>
        <div className="my-2 flex flex-col pt-5">
          <input
            type="password"
            placeholder="Enter Password"
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-white"
          />
        </div><div className="my-2 flex flex-col pt-5">
          <input
            type="password"
            placeholder="Re-Enter Password"
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-white"
          />
        </div>
        <div class="flex space-x-2 pt-10 justify-center">
      <button onClick={(e) => {
              e.preventDefault();
              navigate("/verify");
            }}  type="button" className="inline-block px-6 py-2.5 bg-[#17A40B] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Next</button>
      </div>

      </form>
      </div>
          <div className="pl-16 w-1/3" >
              <h1 className="text-center font-mono font-extrabold text-4xl tracking-wide text-white">
                  Social Login 
              </h1>
              <div className="my-2 flex flex-col pt-12 items-center" >
                <img src={googleButton} alt="google signin button" className="w-48 h-10" />
              </div>
              <div className="my-2 flex flex-col pt-8 items-center">
                <img src={facebookButton} alt="facebook signin button" className="w-48 h-10" />
              </div>
              <div className="my-2 flex flex-col pt-8 items-center">
                <img src={tweetButton} alt="tweet signin button" className="w-48 h-10" />
              </div>
              <p className="text-center  text-3xl mt-12 text-white">OR</p>
              <h1 onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }} className="text-center font-mono font-extrabold pt-14 text-2xl tracking-wide text-white">Continue to Login</h1>
          </div> 
      </div>
      </div>
      </div>
    )
}

export default Register