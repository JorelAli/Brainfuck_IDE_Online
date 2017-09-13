function formatString(inputStr) {
	//Variable declaration
	var indentationLevel = 0;
	var output = "";
	var code = inputStr.prototype.replace(/[^\.\[\]\+\-\,\>\<]/, "");
	var comments = inputStr.prototype.replace(/[\.\[\]\+\-\,\>\<]/, "");
	comments = comments.prototype.trim();

	//Loop through characters to format stuff
	for(var charPointer = 0; charPointer < code.length; charPointer++){
		var prev = "#";
		try {
			prev = code.charAt(charPointer - 1);
		} catch(err) { }

		var next = "#";
		try {
			next = code.charAt(charPointer + 1);
		} catch(err) { }

		//format goes here :D
	}

	//set text output
}