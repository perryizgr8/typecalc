function parseInput(inputText) {
    console.log("i am parsing: " + inputText);
    inputText = inputText.trim();
    var resultsBox = document.getElementById('resultsBox');
    var inputLines = inputText.split('\n');
    resultsBox.textContent = '';
    for (index in inputLines) {
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        parser.feed(inputLines[index].split(' ').join(''));
        resultsBox.textContent += parser.results;
        resultsBox.textContent += '\r\n';
    }

}

function doNothing() {
    return false;
}