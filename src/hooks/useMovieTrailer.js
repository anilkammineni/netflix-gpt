import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

export const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const trailerVideo = useSelector(
			(store) => store.movies.trailerVideo
		);
    
    const getMovieTrailer = async () => {
        const jsonResponse = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            API_OPTIONS
        );

        const data = await jsonResponse.json();
        const filterData = data.results.filter(
            (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        !trailerVideo && getMovieTrailer();
    }, []);
}