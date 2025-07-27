import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NetflixHomePage_Logo, User_Avatar } from "../utils/constants";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();

	const userName = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
        email.current.value = null;
        password.current.value = null;
	};

	const handleButtonClick = () => {
		const name =
			userName?.current === null ? "Default" : userName.current.value;

		const message = checkValidData(
			name,
			email.current.value,
			password.current.value
		);
		setErrorMessage(message);

		if (message) return;

		if (isSignInForm) {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;

					setErrorMessage(errorCode + "-" + errorMessage);
				});
		} else {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name, 
						photoURL: User_Avatar
					})
						.then(() => {
							const { uid, email, displayName, photoURL } =
								auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							setErrorMessage(`${error.code} - ${error.message}`);
						});
				})
				.catch((error) => {
					setErrorMessage(`${error.code} - ${error.message}`);
				});
		}
	};

	return (
		<div className="relative h-screen w-screen overflow-hidden">
			<Header />

			<div className="absolute top-0 left-0 w-full h-full -z-10">
				<img
					src={NetflixHomePage_Logo}
					alt="Background"
					className="object-cover w-full h-full"
				/>
			</div>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute bg-black opacity-90 p-6 sm:p-8 md:p-10 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-lg shadow-md"
			>
				<h1 className="font-bold py-4 text-3xl">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>

				{!isSignInForm && (
					<input
						type="text"
						ref={userName}
						placeholder="Full Name"
						className="p-4 my-2 w-full border border-gray-500 rounded bg-gray-900 text-white"
						required
					/>
				)}

				<input
					ref={email}
					type="email"
					placeholder="Email"
					className="p-4 my-2 w-full border border-gray-500 rounded bg-gray-900 text-white"
					required
				/>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-4 my-2 w-full border border-gray-500 rounded bg-gray-900 text-white"
					required
				/>

				{errorMessage && (
					<p className="text-red-500 py-2 font-semibold text-sm">
						{errorMessage}
					</p>
				)}

				<button
					onClick={handleButtonClick}
					className="bg-red-600 w-full p-3 my-4 rounded hover:bg-red-700 transition duration-200"
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>

				<p
					className="text-center py-2 cursor-pointer underline text-sm"
					onClick={toggleSignInForm}
				>
					{isSignInForm
						? "New to Netflix? Sign up now"
						: "Already registered? Sign in"}
				</p>
			</form>
		</div>
	);
};

export default Login;
