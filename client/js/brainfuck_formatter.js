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

		var c = code.charAt(charPointer);

		switch(c) {
			case ">":
			case "<":
				switch(prev) {
					case ">":
					case "<":
						output = output.concat(c);
						break;
					case "#":
						output = output.concat(indent(indentationLevel)).concat(c);
						break;
					default:
						output = output.concat("\n").concat(indent(indentationLevel)).concat(c);
						break;
				}
				break;
			case "+":
			case "-":

		}

		//format goes here :D
	}

	//set text output
}

function indent(indentationLevel) {
	var str = "";
	for (var i = 0; i < indentationLevel; i++)
		str = str + "\t";
	return str;
}