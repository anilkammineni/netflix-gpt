import Header from "./Header"
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();

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