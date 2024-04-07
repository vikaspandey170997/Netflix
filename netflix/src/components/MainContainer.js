import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackround from './VideoBackround'
import {useSelector} from "react-redux"

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowplayingMovies);
  if(!movie) return;

  const {overview, id, title} = movie[4];

  return (
    <div>
        <VideoTitle title={title} overview={overview} />
        <VideoBackround movieid={id}/>    
    </div>
  )
}

export default MainContainer