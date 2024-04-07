import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title={"popular movie"} movies={movie.popularMovies} />
        <MovieList title={"Now playing"} movies={movie.nowplayingMovies} />
        <MovieList title={"top rated movie"} movies={movie.topratedMovies} />
        <MovieList title={"upcoming movies"} movies={movie.upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;
