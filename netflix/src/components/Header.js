import React from 'react'
import { BiAperture } from "react-icons/bi";
import {useSelector,useDispatch} from "react-redux";
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import {useNavigate} from "react-router-dom"
import { API_END_POINT } from '../utils/constants';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
  const user = useSelector(store=>store.app.user);
  const toggle = useSelector(store=>store.movie.toggle)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      let res = await axios.get(`${API_END_POINT}/logout`);
      console.log(res);
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
        console.log(error);
    }
  }
  const toggleHandler = () => {
    dispatch(setToggle());
  }
  return (  
    <div className='absolute z-10 flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black'>
      <img className= 'w-56' 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" 
      alt="logo" />
      <div className='flex'>
        <BiAperture size="24px" color='white' />
        <h1 className='text-lg font-medium text-white'>vikas</h1>
        <div className='ml-4'></div>
        <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>vikas</button>
        <button onClick= {toggleHandler} className='bg-red-800 text-white px-4 py-2' ml-2>{toggle ? "Home" : "Search Movie"}</button>
      </div>
    </div>
  )
}

export default Header