import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/movieSlice";

const useMovieInformation = (movieId) => {
    const dispatch = useDispatch();
    
    const movieDetails = useSelector((store) => store.movies.movieDetails[movieId]);

    const getMovieDetails = async () => {
        const jsonResponse = await fetch(
            'https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US',
            API_OPTIONS
        )

        const data = await jsonResponse.json();

        return data;
    };

	const getMovieTrailer = async () => {
		const jsonResponse = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				movieId +
				"/videos?language=en-US",
			API_OPTIONS
        );
        
        const data = await jsonResponse.json();

        const filterData = data.results.filter(
				(video) => video.type === "Trailer"
			);
		
        const trailer = filterData.length ? filterData[0] : data.results[0];
        return trailer;
	};

	const getMovieInformation = async () => {
        const movieInfo = await getMovieDetails();
        const movieTrailer = await getMovieTrailer();

        const movieDetails = {
				id: movieId,
				movieInformation: {
					title: movieInfo.original_title,
                    overview: movieInfo.overview,
                    trailerVideo: movieTrailer
				},
        };
        dispatch(addMovieDetails(movieDetails))
	};

    useEffect(() => {
        !movieDetails && getMovieInformation();
    }, []);
};

export default useMovieInformation;
