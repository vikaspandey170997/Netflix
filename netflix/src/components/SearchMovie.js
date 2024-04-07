import React from "react";
import { useState } from "react";

const SearchMovie = () => {
  const [searchMovies, setsearchMovies] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert("searchMovie");
  };
  return (
    <div className="flex justify-center pt-[10%]">
      <form onSubmit={submitHandler} className="w-[50%]">
        <div className="flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%]">
          <input
            value={searchMovies}
            onChange={(e) => setsearchMovies(e.target.value)}
            className="w-full outline-none rounded-md text-lg"
            type="text"
            placeholder="Search movies..."
          />
          <button className="bg-red-800 text-white rounded-md px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchMovie;
