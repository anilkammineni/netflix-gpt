import { useParams } from "react-router-dom";
import VideoTitle from "./VideoTitle";
import VideoBackaground from "./VideoBackground";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import useMovieInformation from "../hooks/useMovieInformation";
import { useSelector } from "react-redux";

const MovieVideo = () => {
    const { id } = useParams();

    useMovieInformation(id);
    
    const movieDetails = useSelector((store) => store.movies.movieDetails[id]);

    if (!movieDetails) return;

    const { title, overview, trailerVideo } = movieDetails;

    return (
			<div>
				{title && overview && (
					<div>
						<VideoTitle videoTitle={title} videoOverView={overview} />
						<div className="w-screen">
							<iframe
								className="w-screen aspect-video"
								src={
									"https://www.youtube.com/embed/" +
									trailerVideo?.key +
									"?&autoplay=1&mute=1"
								}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
							></iframe>
						</div>
					</div>
				)}
			</div>
		);
}

export default MovieVideo;