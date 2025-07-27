import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

export const useTopRatedMovies = () => {
	const dispatch = useDispatch();

	const getTopRatedMovies = async () => {
		const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";

		const jsonResponse = await fetch(url, API_OPTIONS);
		const data = await jsonResponse.json();

		dispatch(addTopRatedMovies(data.results));
	};

	useEffect(() => {
		getTopRatedMovies();
	}, []);
};
