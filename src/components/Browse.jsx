import Header from "./Header"
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpComingMovies } from "../hooks/useUpComingMovies";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

    return (
			<div>
            <Header />
            <MainMovieContainer />
            <SecondaryContainer />
				{/*
                    MovieContainer
                        - VideoBackagrounf
                        - VideoTitle
                    
                    Secondary Container
                        - Movies list
				 */}
			</div>
		);
}

export default Browse;