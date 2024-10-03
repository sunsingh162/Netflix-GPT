import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, moviesData }) => {
  return (
    <div className="px-6">
      <h1 className="py-4 text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesData?.map((movie) => (
            <MovieCards key={movie.id} posterpath={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
