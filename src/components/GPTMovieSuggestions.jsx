import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {

    const gptStore = useSelector((store) => store.gptSearch);
    const { movieNames, movieResults } = gptStore;

    if (!movieNames) return null;

    return (
        <div className="p-4 m-4 bg-black text-white opacity-90 rounded-2xl">
            {movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults[index]} />)}
        </div>
    )
}

export default GptMovieSuggestions