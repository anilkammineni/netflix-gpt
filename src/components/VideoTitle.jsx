const VideoTitle = ({ videoTitle, videoOverView }) => {
	return (
		<div className="absolute -mt-20 md:-mt-0 top-0 left-0 w-full h-full flex flex-col justify-center bg-gradient-to-r from-black/80 via-black/40 to-transparent px-6 md:px-20 text-white z-10">
			<h1 className="text-2xl md:text-5xl font-bold">{videoTitle}</h1>
			<p className="hidden lg:inline-block py-6 text-lg max-w-lg">
				{videoOverView}
			</p>
			<div className="flex flex-wrap gap-4">
				<button className="bg-white text-black rounded-lg px-6 py-2 text-sm md:text-lg hover:opacity-80 transition-all">
					▶ Play
				</button>
				<button className="hidden md:inline-block bg-gray-600 text-white rounded-lg px-6 py-2 text-sm md:text-lg hover:bg-gray-700 transition-all">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
