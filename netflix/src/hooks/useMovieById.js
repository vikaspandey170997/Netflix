import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";
import axios from "axios";
import { options } from "../utils/constants";

const useMovieById = async (movie_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
          options
        );
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        });
        dispatch(
          getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  }, []);
};

export default useMovieById;
