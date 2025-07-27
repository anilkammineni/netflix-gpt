const VideoTitle = ({ videoTitle, videoOverView }) => {
	return (
		<div className="absolute w-screen aspect-video pt-[20%] px-20 text-white bg-gradient-to-r from-black">
			<h1 className="text-6xl font-bold">{videoTitle}</h1>
			<p className="py-6 text-lg w-1/4">{videoOverView}</p>
			<div className="flex">
				<button className="cursor-pointer bg-white text-black rounded-lg p-4 px-12 text-xl hover:opacity-80">
					▶ Play
				</button>
				<button className="mx-2 cursor-pointer bg-gray-500 text-white rounded-lg p-4 px-12 text-xl">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
