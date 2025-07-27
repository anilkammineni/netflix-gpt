import { Movie_Poster_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {

    return (
			<div className="w-50 pr-4 rounded-lg">
				<img
					alt="movie logo"
					src={Movie_Poster_CDN_URL + posterPath}
				/>
			</div>
		);
}

export default MovieCard