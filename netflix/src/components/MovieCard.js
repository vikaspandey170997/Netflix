import React from 'react'
import { MovieList_Image } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-2'>
      <img src={`${MovieList_Image}/${posterPath}`} 
      alt="popular movie" />
    </div>
  )
}

export default MovieCard