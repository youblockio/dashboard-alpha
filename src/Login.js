import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import socialButton from "./assets/image 53.png";
import { UserAuth } from './context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... h-screen w-screen">
        <div className="w-1/3 mx-auto pt-20 ">
            <div className="bg-gradient-to-br from-teal-900 via-teal-600 to-teal-900 shadow-md rounded">
            <h1 className="text-center font-mono font-extrabold pt-10 text-4xl tracking-wide text-white">
                LOGIN 
            </h1>
            <p className="text-center text-xm p-5 text-red-900">{error}</p>
            <p className="text-center text-xm p-5 text-white">Please Enter Your Login Details</p>
            <form onSubmit={handleSubmit}>
            <label className="text-white font-bold text-xm tracking-wide mt-4 px-5">
            UserName/Emai Id
            </label>
            <div className="my-2 flex flex-col p-2 pb-6 px-5">
            <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-white"
          />
        </div>
        <label className="text-white font-bold text-xm tracking-wide mt-10 px-5">
            Password
            </label>
            <div className="my-2 flex flex-col p-2 pb-6 px-5">
            <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gradient-to-l from-gray-900 via-gray-800  to-teal-900 ... border-2 border-white p-1 focus:outline-none rounded-xl font-bold text-white"
          />
        </div>
        
        <h1 className="text-center font-mono pt-6 text-4xl tracking-wide text-white">
                SOCIAL LOGIN 
            </h1>
            <div className="my-2 flex flex-col pt-8 items-center">
            <img src={socialButton} alt="signinButton" className="h-8 w-18" />
            </div>
            <div class="flex space-x-2 pt-2 justify-center">
      <button  type="submit" className="inline-block px-6 py-2.5 bg-[#17A40B] text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">Next</button>
      </div>
      </form>
      <p onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }} className="text-center text-lg mt-4 pb-4 text-white">Create an account</p>
            </div>
        </div>
    </div>
  )
}

export default Login