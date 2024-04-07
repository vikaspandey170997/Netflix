import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackround = ({ movieId }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);
  useMovieById(movieId);
  // if (!trailerMovie || !trailerMovie.key) {
  //   return null; // or you can render a loading spinner or a message
  // }
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/rJNBGqiBI7s?si=Q7cvIRDmZok8sIKd&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};
//${trailerMovie.key}
//rJNBGqiBI7s
export default VideoBackround;
