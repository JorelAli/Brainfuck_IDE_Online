function unformatString(inputStr) {
	var code = replaceAll(inputStr, /[^\.\[\]\+\-\,\>\<]/, "");
	var comments = replaceAll(inputStr, /[\.\[\]\+\-\,\>\<]/, "");
	comments = comments.trim();
	return comments + "\n" + code;
}

function formatString(inputStr) {
	//Variable declaration
	var indentationLevel = 0;
	var output = "";
	var code = replaceAll(inputStr, /[^\.\[\]\+\-\,\>\<]/, "");
	var comments = replaceAll(inputStr, /[\.\[\]\+\-\,\>\<]/, "");
	comments = comments.trim();

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
						output = output + c;
						break;
					case "#":
						output = output + indent(indentationLevel) + c;
						break;
					default:
						output = output + "\n" + indent(indentationLevel) + c;
						break;
				}
				break;
			case "+":
			case "-":
				if (prev == ">" || prev == "<") {
					output = output + " " + c;
				} else {
					output = output + c;
				}
				break;
			case ".":
			case ",":
				output = output + c;
				break;
			case "[":
				output = output + "\n" + indent(indentationLevel) + c;
				indentationLevel++;
				break;
			case "]":
				output = output + "\n"
				indentationLevel--;
				output = output + indent(indentationLevel) + c;
				break;
		}
	}
	output = comments + "\n" + output;
	return output;
}

function indent(indentationLevel) {
	var str = "";
	for (var i = 0; i < indentationLevel; i++)
		str = str + "\t";
	return str;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}