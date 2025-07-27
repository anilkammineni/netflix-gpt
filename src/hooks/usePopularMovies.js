import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
	const dispatch = useDispatch();

	const getPopularMovies = async () => {
		const url =
			"https://api.themoviedb.org/3/movie/popular?page=1";

		const jsonResponse = await fetch(url, API_OPTIONS);
		const data = await jsonResponse.json();

		dispatch(addPopularMovies(data.results));
	};

	useEffect(() => {
		getPopularMovies();
	}, []);
};
