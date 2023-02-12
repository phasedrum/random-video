// Set config variables
const items = config['General']['Items'];
const folder = config['General']['Folder'];
const redirect = config['General']['Redirect'];
var fullscreen = config['Video']['Fullscreen'];
var autoplay = config['Video']['Autoplay'];
var controls = config['Video']['Controls'];
var loop = config['Video']['Loop'];

// Get random filename
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