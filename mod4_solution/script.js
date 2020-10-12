(function (name) {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	arrayLength = names.length;
	for (var i = 0; i < arrayLength; i++) {
		//console.log(names[i]);
		var firstLetter = names[i].charAt(0);
		firstLetter = firstLetter.toLowerCase();
	
		
	  if (firstLetter == 'j') {
	    byeSpeaker.speak(names[i]);
	  } else {
	    helloSpeaker.speak(names[i]);
	  }
	}
})();