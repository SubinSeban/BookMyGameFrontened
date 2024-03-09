import { useRef, useState } from "react";
import axios from "axios";
import { checkValidData } from "../utils/formValid";
import Header from "./Header";
import BG from "../Assets/sandro-schuh-HgwY_YQ1m0w-unsplash (2).jpg"
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

 


const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch  = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const toggleSignIn = () => {
    setSignIn(!isSignIn);
    setErrorMessage(null)

     
  };

const handleButtonClick = () => {
    const message = checkValidData(
        name.current?.value,
        email.current?.value,
        password.current?.value
        
      );
      
      setErrorMessage(message);
    if (message) return;

    // SignUp SignIn function

    // SignUP function
    if(!isSignIn){
    const signUpData ={};
   signUpData.name =name.current?.value;
   signUpData.email =email.current?.value;
   signUpData.password =password.current?.value;
  axios({
    method:'POST',
    url:process.env.REACT_APP_BASE_URL+'/auth/dosignup',
    data:signUpData
  }).then((res)=>{
    
    setSignIn(!isSignIn)
  })
  .catch((err)=>{
   
    setErrorMessage(err.response.data.message)
    
    
    
  })
}else{
  const signInData ={};

  signInData.email =email.current?.value;
  signInData.password =password.current?.value;
 axios({
   method:'POST',
   url:process.env.REACT_APP_BASE_URL+'/auth/dologin',
   data:signInData
 }).then((res)=>{
  console.log(res)
  localStorage.setItem('token',res.data?.token)
  dispatch(addUser(res.data.user))
  navigate('/browse')
 })
 .catch((err)=>{
  setErrorMessage(err.response.data.message)
  
 })
}
 

};
  return (
    <div>
     <Header/>
      <div className=" h-screen  ">
        <img  
        
          src={BG}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" form bg-gradient-to-t from-slate-300 text-black absolute top-1/4 left-1/2 transform -translate-x-2/4 -translate-y-1/6 w-4/12 p-12  bg-white rounded-lg bg-opacity-50"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-2 w-full bg-green-50"
            type="text"
            placeholder="Full Name"
          ></input>
        )}

        <input
          ref={email}
          className="p-4 my-2 w-full bg-green-50 "
          type="email"
          placeholder="Email Address"
        ></input>

        <input
          ref={password}
          className="p-4 my-2 w-full  bg-green-50"
          type="password"
          placeholder="Password"
        ></input>
        <p className="text-md text-blue-500">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-green-400 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-xl ">
          {isSignIn ? "New to BookMyGame ?" : "Already a User ?"}{" "}
          <i className="cursor-pointer" onClick={toggleSignIn}>
            {isSignIn? "Sign Up" : "Sign In"}
          </i>{" "}
        </p>
      </form>
      
      
    </div>
  );
};
export default Login;

 // SignIn function
//   const LoginData ={}
//   LoginData.email = email.current?.value;
//   LoginData.password = email.current?.value;
//  axios