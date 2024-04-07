import React from 'react'
import { useState } from 'react';
import Header from './Header'
import axios from "axios";
import { API_END_POINT } from '../utils/constants';
// import { ConnectionStates } from 'mongoose';
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { setUser,setLoading } from '../redux/userSlice'; 

const Login = () => {
  const [isLogin, setisLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(store=>store.app.isLoading);

  const loginHandler   = () => {
    setisLogin(!isLogin);
  }
  const getInputData = async (e) => {
    e.preventDefault();
    // try {  
    //   const user = {email, password}
    //   const res = await axios.post(`${API_END_POINT}/login`,user)
    //   console.log(res);
    // } catch (error) {
    //   console.log(error)
    // }
    dispatch(setLoading(true));
    if(isLogin){
      const user = {email,password};
      try {
        const res = await axios.post(`${API_END_POINT}/login` ,user,{
          headers:{
            'Content-Type':'application/json'
          },
          withCredentials:true
        });
        console.log(res);
        if(res.data.success){
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browser");
      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }

    }else{
    const user = {fullName, email, password};
    try {
      const res = await axios.post(`${API_END_POINT}/register` ,user,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      console.log(res);
      // if(res.data.success){
      //   toast.success(res.data.message);
      // }
      setisLogin(true);
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }
  }
    // console.log(fullName,email.password);
    setFullName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className='w-full'>
      <Header />
      <div className='absolute'>
        <img className='w-full' src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" alt="banner" />
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 my-36 left-0 right-0 mx-auto items-center justify-center  absolute rounded-md bg-black opacity-90'>
        <h1 className='text-3xl text-white font-bold'>{isLogin? "Login" : "Signup"}</h1>
        <div className='flex flex-col'>
          {
            !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' type="text" placeholder='FullName'/>
          }
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' type="email" placeholder='Email'/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' type="password" placeholder='Password'/>
          <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "login ...": (isLogin ?"Login":"Signup")}`}</button>
          <p className='text-white mt-2'>{isLogin ? "new to netflix?" : "Already have an account?" }<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin?"Signup":"Login"}</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login