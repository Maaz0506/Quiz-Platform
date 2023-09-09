// import bgImage from "../../assets/bg-image.jpg"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
const Login = () => {
    const backgroundImage =
    "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate=useNavigate()
    const url="http://localhost:4000/api/auth/login"
    
        const handleLogin=async(e)=>{
          e.preventDefault()
            try {
                const data=await axios.post(url,{
                    email:email,
                    password:password
                }) 
                console.log(data.data)
                if(data.status===200){
                    navigate("/dashboard")
                }
                
            } catch (error) {
                console.log(error)
            }
       
    }
    

    
  
  return (
    <div className="flex h-screen  ">
      <div
        className=" w-1/2 bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="shadow-xl bg-slate-50 w-1/2">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Welcome Back!
            </h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                onClick={handleLogin}
              >
                Sign Up
              </button>
              
            </form>
            <p className="mt-4 text-center">
              Don&apos;t have an account?{' '}
              <Link to="/" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
