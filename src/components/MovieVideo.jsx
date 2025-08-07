import { useParams } from "react-router-dom";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import useMovieInformation from "../hooks/useMovieInformation";

const MovieVideo = () => {
	const { id } = useParams();
	useMovieInformation(id);

	const movieDetails = useSelector((store) => store.movies.movieDetails[id]);
	if (!movieDetails) return <div className="text-white p-4">Loading...</div>;

	const { title, overview, trailerVideo } = movieDetails;

	return (
		<div className="relative w-full h-screen">
			<iframe
				className="absolute top-0 left-0 w-full h-full object-cover"
				src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
			></iframe>

			{/* Overlay title */}
			<VideoTitle videoTitle={title} videoOverView={overview} />
		</div>
	);
};

export default MovieVideo;
