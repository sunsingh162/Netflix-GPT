import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="relative z-20 pl-12 -mt-32">
          <MovieList
            title={"Now Playing"}
            moviesData={movies.addNowPlayingMovies}
          />
          <MovieList title={"Popular"} moviesData={movies.popularMovies} />
          <MovieList title={"Top Rated"} moviesData={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} moviesData={movies.upcomingMovies} />
          <MovieList
            title={"Horror movies"}
            moviesData={movies.addNowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
