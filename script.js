function parseInput(inputText) {
    console.log("i am parsing: " + inputText);

    inputText = inputText.trim();
    var inputLines = inputText.split('\n');

    var resultsBox = document.getElementById('resultsBox');
    resultsBox.textContent = '';
    for (index in inputLines) {
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        var line = inputLines[index].split('#')[0];
        try {
            parser.feed(line.split(' ').join(''));
            resultsBox.textContent += parser.results;
        } catch(e) {
            console.log("Line not parsed: " + e.message);
            resultsBox.textContent += inputLines[index];
        }
        resultsBox.textContent += '\r\n';
    }

}

function doNothing() {
    return false;
}