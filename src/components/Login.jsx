import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
			<div>
				<Header />
				<div className="absolute">
					<img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_large.jpg" />
				</div>
				<form className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
					<h1 className="font-bold py-4 text-3xl">
						{isSignInForm ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignInForm && (
						<input
							type="text"
							placeholder="Name"
							className="p-4 my-2 w-full border rounded"
						/>
					)}
					<input
						type="text"
						placeholder="Email or mobile number"
						className="p-4 my-2 w-full border rounded"
					/>
					<input
						type="text"
						placeholder="Password"
						className="p-4 my-2 w-full border rounded"
					/>
					<button className="bg-red-600 w-full p-2 my-2 rounded">
						{isSignInForm ? "Sign In" : "Sign up"}
					</button>
					<p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
						{isSignInForm
							? "New to Netflix? Sign up"
							: "Already registered? Sign In"}
					</p>
				</form>
			</div>
		);
}

export default Login;