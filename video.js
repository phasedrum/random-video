// - Config -

// List of all available videos (e.g. '['video1.mp4', 'video2.ogg', 'video3.mov']')
// See below if you want to use URLs instead of filenames.
const items = [
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
];

// Folder path (e.g. 'videos/' or 'folder1/folder2/')
// If you want to put urls in the item list, leave this empty ('').
const folder = '';

// Redirects to video (autoplay with sound & video-controls, but will not loop & fit to viewport)
// Settings below this one will be ignored if set to true.
const redirect = false;

// Loops the video (plays it over and over)
var loop = true;

// Open video in fullscreen (only works when user clicks play)
// Autoplay will be set to false and controls to true if you have this enabled.
var fullscreen = true;

// Enable autoplay (will mute the video on playback)
var autoplay = false;

// Display video-controls (e.g. playhead, volume-slider, etc.)
var controls = true;



// - Program -

// Get random file
var file = items[Math.floor(Math.random() * items.length)];
var path = folder + file;

// Redirect if set to true
// Everything below will be ignored
if (redirect) {
	window.location.replace(path);
}

if (fullscreen) {
	autoplay = false;
	controls = true;
}

// Set variables
var extension = file.split('.').pop();
var attributes = '';
const types = {
	'mpeg': 'video/mpeg',
	'mpg': 'video/mpeg',
	'mpe': 'video/mpeg',
	'mp4': 'video/mp4',
	'ogg': 'video/ogg',
	'ogv': 'video/ogg',
	'qt': 'video/quicktime',
	'mov': 'video/quicktime',
	'viv': 'video/vnd.vivo',
	'vivo': 'video/vnd.vivo',
	'webm': 'video/webm',
	'avi': 'video/x-msvideo',
	'movie': 'video/x-sgi-movie',
	'3gp': 'video/3gpp'
};

// Check for type
var mime = types[extension];
if (typeof mime !== 'undefined') {
	var type = 'type="' + mime + '"';
} else {
	var type = '';
}

// Apply settings
if (autoplay) { attributes += ' autoplay muted' }
if (controls) { attributes += ' controls' }
if (loop) { attributes += ' loop' }

// Write video
document.write('<video id="video"' + attributes + '><source src="' + path + '" ' + type + '>Your browser does not support the video tag.</video>');

// Request fullscreen if set to true
if (fullscreen) {
	var video = document.getElementById('video');
	video.addEventListener('play', function onPlayOnce() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen();
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen();
		}
		video.removeEventListener('play', onPlayOnce);
	});
}