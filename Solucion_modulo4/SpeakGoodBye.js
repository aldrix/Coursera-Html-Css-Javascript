(function (window) { //IIFE (Immediately Invoked Function Expressions)

	// Create a fake namespace.
	var byeSpeaker = {};

	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}

	// STEP 9: Expose the 'byeSpeaker' object to the global scope.
	window.byeSpeaker = byeSpeaker;

})(window);