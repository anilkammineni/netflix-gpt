import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
        popularMovies: null,
		topRatedMovies: null,
		upComingMovies: null,
		movieDetails: {}
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addUpComingMovies: (state, action) => {
			state.upComingMovies = action.payload
		},
		addMovieDetails: (state, action) => {
			const { id, movieInformation } = action.payload;

			if (!state.movieDetails[id]) {
				state.movieDetails[id] = {
					title: '',
					overview: '',
					trailerVideo: ''
				}
			}
			state.movieDetails[id].title = movieInformation.title
			state.movieDetails[id].overview = movieInformation.overview
			state.movieDetails[id].trailerVideo = movieInformation.trailerVideo;
		}
	},
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies, addMovieDetails } = movieSlice.actions;

export default movieSlice.reducer