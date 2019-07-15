function parseInput(inputText) {
    console.log("i am parsing: " + inputText);
    inputText = inputText.trim();
    var resultsBox = document.getElementById('resultsBox');
    //var res = inputText.split(" ");
    //for (index in res) {
    //    console.log(res[index]);
    //}
    //if (res[0].length === 0) {
    //    resultsBox.textContent = "<<empty>>";
    //} else {
    //    resultsBox.textContent = isNaN(res[0]);
    //}
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(inputText);
    resultsBox.textContent = parser.results;    
}

function doNothing() {
    return false;
}