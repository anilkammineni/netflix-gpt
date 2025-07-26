import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();
	const dispath = useDispatch();

	const userName = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
		setErrorMessage(null);
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
					navigate("/browse");
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
						photoURL: "src/assets/Profile.jpeg",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } =
								auth.currentUser;
							dispath(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
							navigate("/browse");
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;

							setErrorMessage(errorCode + "-" + errorMessage);
						});
					navigate("/browse");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;

					setErrorMessage(errorCode + "-" + errorMessage);
				});
		}
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_large.jpg" />
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute bg-black p-12 w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
			>
				<h1 className="font-bold py-4 text-3xl">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						type="text"
						ref={userName}
						placeholder="Name"
						className="p-4 my-2 w-full border rounded"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email or mobile number"
					className="p-4 my-2 w-full border rounded"
				/>
				<input
					type="text"
					ref={password}
					placeholder="Password"
					className="p-4 my-2 w-full border rounded"
				/>
				<p className="text-red-500 py-2 font-bold text-lg">
					{errorMessage}
				</p>
				<button
					onClick={handleButtonClick}
					className="bg-red-600 w-full p-2 my-2 rounded cursor-pointer"
				>
					{isSignInForm ? "Sign In" : "Sign up"}
				</button>
				<p
					className="py-4 cursor-pointer underline"
					onClick={toggleSignInForm}
				>
					{isSignInForm
						? "New to Netflix? Sign up now"
						: "Already registered? Sign In"}
				</p>
			</form>
		</div>
	);
};

export default Login;
