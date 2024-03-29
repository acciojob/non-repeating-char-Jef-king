function firstNonRepeatedChar(x) {
    const c = new Map();
	
    for (const char of x) {
        c.set(char, (c.get(char) || 0) + 1);
    }
	
    for (const char of x) {
        if (c.get(char) === 1) {
            return char;
        }
    }
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
