import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_Logo, supportedLaguages } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSearchSlice";
import {changeLanguage} from "../utils/userPreferences"


const Header = () => {
	const navigate = useNavigate();
	const user = useSelector(store => store.user);
	const userPreferences = useSelector(store => store.userPreferences.lang)
	const dispatch = useDispatch();
	const showGptSearch = useSelector((store) => store.gptSearch.showGPTSearch);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// user is logged in
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);

				navigate("/browse");
			} else {
				// user is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});

		// unsubsribe when component unmounts
		return () => unsubscribe();
	}, []);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
			})
			.catch((error) => {
				navigate("/error")
			});
	};

	const handleGptSearch = () => {
		dispatch(toggleGPTSearchView());
	}
	
	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	}

	return (
		<div className="absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-20">
			<img
				src={Netflix_Logo}
				alt="logo"
				className="w-44"
			/>
			{user && <div className="flex p-2">
				{showGptSearch && 
					<select value={userPreferences} onChange={handleLanguageChange} className="text-white m-2 bg-gray-700 py-2">
						{supportedLaguages.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
					</select>
				}
				<button className="text-white py-2 px-4 mx-4 font-bold cursor-pointer bg-purple-300 rounded-lg"
				onClick={handleGptSearch}>
					{showGptSearch ? "Home Page" : "GPT Search"}
				</button>
				<img
					className="w-18 h-18"
					src={user.photoURL}
					alt="user-icon"
				/>
				<button
					onClick={handleSignOut}
					className="ml-2 font-bold text-white cursor-pointer rounded-lg"
				>
					Sign out
				</button>
			</div>}
		</div>
	);
};

export default Header;
