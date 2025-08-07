import { useNavigate } from "react-router-dom";
import { Movie_Poster_CDN_URL } from "../utils/constants"

const MovieCard = ({ movieId, posterPath }) => {
	const navigate = useNavigate();
	if (!posterPath) return null;

	const playMovieVideo = () => {
		navigate(`/movie/${movieId}`)
	}

    return (
			<div className="w-30 md:w-50 pr-4 rounded-lg hover:cursor-pointer" onClick={playMovieVideo}>
				<img
					alt="movie logo"
					src={Movie_Poster_CDN_URL + posterPath}
				/>
			</div>
		);
}

export default MovieCard