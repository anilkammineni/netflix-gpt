import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpComingMovies } from "../hooks/useUpComingMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpComingMovies();

	const showGPTSearch = useSelector((store) => store.gptSearch.showGPTSearch);

	console.log("SHOW GPT: ", showGPTSearch);

	return (
		<div>
			<Header />
			{showGPTSearch ? (
				<GPTSearchPage />
			) : (
				<>
					<MainMovieContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
