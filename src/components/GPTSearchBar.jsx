import { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieSearchResults } from "../utils/gptSearchSlice";

const GPTSearchBar = () => {

    const userLanguage = useSelector((store) => store.userPreferences.lang);
    const gptSearchPlaceHolder = lang[userLanguage].gptSearchPlaceHolder;
    
    const dispatch = useDispatch();

    const searchText = useRef(null)

    const searchMovieInTMDB = async (movieName) => {
        const url =
				"https://api.themoviedb.org/3/search/movie?query=" +
				movieName +
            "&include_adult=false&language=en-US&page=1'";
        
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();

        return json.results;
    }


    const handleGptSearch = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value +
            ". only give names of 5 movies, comma separated like the example result given ahead. Example result: Bahubali, Gadar, Sholay, Don, Sreemanthudu";
        
        const response = await openai.responses.create({
				model: "gpt-4o-mini-2024-07-18",
				input: gptQuery,
			});

        console.log("gpt response: ", response.output_text);
        const gptMovies = response.output_text.split(",");
        
        const promiseArray = gptMovies.map((movie) => searchMovieInTMDB(movie))

        const tmdbSearchResults = await Promise.all(promiseArray);

        dispatch(addGPTMovieSearchResults({movieNames: gptMovies, searchResults: tmdbSearchResults}));
    }

	return (
		<div className="pt-[10%]">
			<form className="w-1/2 bg-black grid grid-cols-12 mx-auto" onSubmit={(e) => e.preventDefault()}>
				<input
                    type="text"
                    ref={searchText}
					className="p-4 m-4 text-gray-500 bg-white col-span-9"
					placeholder={gptSearchPlaceHolder}
				/>
				<button className="py-2 m-4 px-4 text-white bg-red-500 col-span-3 rounded-lg" onClick={handleGptSearch}>
					{lang[userLanguage].search}
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
