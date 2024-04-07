import axios from "axios";
import { getTopRatedMovies } from "../redux/movieSlice";
import { options,Top_Rated_Movies } from "../utils/constants";
import {useDispatch} from "react-redux";

const useTopRatedMovies = async () => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get(Top_Rated_Movies, options);
    console.log(res);
    dispatch(getTopRatedMovies(res.data.results))
  } catch (error) {
    console.log(error)
  }
}

export default useTopRatedMovies;
