import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.addNowPlayingMovies = action.payload
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload
        },
        addTrailerVideos: (state,action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer