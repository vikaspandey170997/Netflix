import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { options,now_playing_Movies } from "../utils/constants";
import {useDispatch} from "react-redux";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get(now_playing_Movies, options);
    dispatch(getNowPlayingMovies(res.data.results))
  } catch (error) {
    console.log(error)
  }
}

export default useNowPlayingMovies;
