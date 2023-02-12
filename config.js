const config = {

	// "Random Video"-Configuration

	"General": {

		// List of all available videos (e.g. '['video1.mp4', 'video2.ogg', 'video3.mov']')
		// See below if you want to use URLs instead of filenames.
		'Items': [
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
			'https://img.ifunny.co/videos/55bb2b9637b70f249bf5cad5bb5bd399da1f13fc1da3fc2acfd16a5b5d7d0f73_1.mp4'
		]
		,
		// Folder path (e.g. 'videos/' or 'folder1/folder2/')
		// If you want to put urls in the item list, leave this empty ('').
		'Folder': ''
		,
		// Redirects to video (autoplay with sound & video-controls, but will not loop & fit to viewport)
		// Note: "Video" settings will be ignored when this is set to true.
		'Redirect': false

	},

	"Video": {

		// Open video in fullscreen (only works when user clicks play)
		// Note: Autoplay will be set to false and controls to true if you have this enabled.
		'Fullscreen': false
		,
		// Enable autoplay (will mute the video on playback)
		'Autoplay': false
		,
		// Display video-controls (e.g. playhead, volume-slider, etc.)
		'Controls': true
		,
		// Loops the video (plays it over and over)
		'Loop': false

	}
};
