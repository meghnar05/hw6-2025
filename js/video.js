var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("video")
	// document.querySelector("#volume").innerText = "100%";
	// video.volume = 1.0;

	video.autoplay = false;
	video.loop = false;

});

// Play
document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video");
	document.querySelector("#volume").innerText = "100%";
	video.volume = 1;
});

// Pause
document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video");
});

// Slow down 
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New slowed speed: " + video.playbackRate);
})

// Speed up
document.querySelector("#faster").addEventListener("click", function() {
	// video.playbackRate = video.playbackRate * 1.1;
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New faster speed: " + video.playbackRate);
});

// Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 10;
	}
	console.log("New time: " + video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted
	if (video.muted) {
		this.innerText = "Unmute";
	}
	else {
		this.innerText = "Mute";
	}
});

// Volume slider
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerText = this.value + "%";
	console.log("The current value is " + video.volume);
	console.log(document.querySelector("#volume"))
});

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});