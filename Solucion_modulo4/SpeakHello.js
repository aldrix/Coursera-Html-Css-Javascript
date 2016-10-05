(function (window) { //IIFE (Immediately Invoked Function Expressions)

	// Create a fake namespace.
	var helloSpeaker = {} 

	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}

	// Expose the 'helloSpeaker' object to the global scope.
	window.helloSpeaker = helloSpeaker;

})(window);
