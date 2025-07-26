import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector(store => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				navigate("/error")
			});
	};

	return (
		<div className="absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-20">
			<img
				src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
				className="w-44"
			/>
			{user && <div className="flex p-2">
				<img
					className="w-18 h-18"
					//src="https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg"
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
