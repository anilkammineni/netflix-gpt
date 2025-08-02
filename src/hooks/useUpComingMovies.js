import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/movieSlice";

export const useUpComingMovies = () => {
	const dispatch = useDispatch();

	const upcomingMovies = useSelector(
		(store) => store.movies.upcomingMovies
	);

	const getUpComingMovies = async () => {
		const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";

		const jsonResponse = await fetch(url, API_OPTIONS);
		const data = await jsonResponse.json();

		dispatch(addUpComingMovies(data.results));
	};

	useEffect(() => {
		!upcomingMovies && getUpComingMovies();
	}, []);
};
