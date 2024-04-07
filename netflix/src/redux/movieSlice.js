import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:"movie",
  initialState: {
    nowplayingMovies:null,
    popularMovies:null,
    topratedMovies:null,
    upcomingMovies:null,
    toggle:false,
    trailerMovie:null,
  },
  reducers:{
    getNowPlayingMovies:(state,action) => {
      state.nowplayingMovies = action.payload;
    },
    getPopularMovies:(state,action)=>{
      state.popularMovies = action.payload;
    },
    getTopRatedMovies:(state,action)=>{
      state.topratedMovies = action.payload;
    },
    getUpcomingMovies:(state,action)=>{
      state.upcomingMovies = action.payload;
    },
    setToggle:(state,action)=>{
      state.toggle = action.payload;
    },
    getTrailerMovie:(state,action)=>{
      state.trailerMovie = action.payload;
    }
  }
});

export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies,setToggle,getTrailerMovie} = movieSlice.actions;

export default movieSlice.reducer;

