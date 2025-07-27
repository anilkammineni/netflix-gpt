import { useSelector } from "react-redux"
import VideoBackaground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainMovieContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[0];

    const { id, title, overview } = mainMovie;

    return (
			<div>
				<VideoTitle videoTitle={title} videoOverView={overview} />
				<VideoBackaground movieId={id} />
			</div>
		);
}

export default MainMovieContainer