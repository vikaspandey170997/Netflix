import React from 'react'
import { CiPlay1,CiCircleInfo } from "react-icons/ci";


const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute text-white pt-[18%] p-12'>Hi,
      <h1 className='text-3xl font-bold'>{title}</h1>
    <p>
      {overview}
    </p>
    <div className='flex mt-8 mx-4'>
      <button className='flex px-6 py-2 items-center bg-white text-black rounded-md hover:bg-opacity-80'>
        <CiPlay1 size="24px"/>
        <span className='ml-1'>Play</span>
      </button>
      <button className='flex mx-2 bg-gray-500 items-center px-6 py-2 text-black rounded-md'>
        <CiCircleInfo size="24px"/>
        <span className='ml-1'>Watch more</span>
      </button>
    </div>
    </div>
  )
}

export default VideoTitle