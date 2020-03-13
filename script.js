function isIPAddress(input) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(input)) {
        return true;
    }
    return false;
}

function ipToInteger(ipString) {
    var octets = ipString.split('.');
    return octets[0] * Math.pow(256, 3) + octets[1] * Math.pow(256, 2) + octets[2] * Math.pow(256, 1) + octets[3] * 1;
}

function parseInput(inputText) {
    console.log("i am parsing: " + inputText);

    localStorage.setItem('input_text', inputText);

    inputText = inputText.trim();
    var inputLines = inputText.split('\n');

    var resultsBox = document.getElementById('resultsBox');
    resultsBox.textContent = '';
    for (index in inputLines) {
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        var line = inputLines[index].split('#')[0];
        if (isIPAddress(line.split(' ').join(''))) {
            resultsBox.textContent += ipToInteger(line.split(' ').join(''));
        } else {
            try {
                parser.feed(line.split(' ').join(''));
                resultsBox.textContent += parser.results;
            } catch (e) {
                console.log("Line not parsed: " + e.message);
                resultsBox.textContent += inputLines[index];
            }
        }
        resultsBox.textContent += '\r\n';
    }

}

function doNothing() {
    return false;
}