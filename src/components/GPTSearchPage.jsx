import GPTSearchBar from "./GPTSearchBar";
import { NetflixHomePage_Logo } from "../utils/constants";
import GptMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearchPage = () => {
	return (
		<>
			<div className="fixed top-0 left-0 w-full h-full -z-10">
				<img
					src={NetflixHomePage_Logo}
					alt="Background"
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="">
				<GPTSearchBar />
				<GptMovieSuggestions />
			</div>
		</>
	);
};

export default GPTSearchPage;
