// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["AS"], "postprocess": d => d[0]},
    {"name": "P", "symbols": [{"literal":"("}, "AS", {"literal":")"}], "postprocess": d => d[1]},
    {"name": "P", "symbols": ["PCT"], "postprocess": d => d[0]},
    {"name": "MD", "symbols": ["MD", {"literal":"*"}, "P"], "postprocess": d => d[0]*d[2]},
    {"name": "MD", "symbols": ["MD", {"literal":"/"}, "P"], "postprocess": d => d[0]/d[2]},
    {"name": "MD", "symbols": ["P"], "postprocess": d => d[0]},
    {"name": "AS", "symbols": ["AS", {"literal":"+"}, "MD"], "postprocess": d => d[0]+d[2]},
    {"name": "AS", "symbols": ["AS", {"literal":"-"}, "MD"], "postprocess": d => d[0]-d[2]},
    {"name": "AS", "symbols": ["MD"], "postprocess": d => d[0]},
    {"name": "PCT", "symbols": ["AS", {"literal":"+"}, "AS", {"literal":"%"}], "postprocess": d => d[0] + d[0]*(d[2]/100)},
    {"name": "PCT", "symbols": ["AS", {"literal":"-"}, "AS", {"literal":"%"}], "postprocess": d => d[0] - d[0]*(d[2]/100)},
    {"name": "PCT$string$1", "symbols": [{"literal":"%"}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PCT", "symbols": ["AS", "PCT$string$1", "AS"], "postprocess": d=> (d[0]/100)*d[2]},
    {"name": "PCT", "symbols": ["N"], "postprocess": d => d[0]},
    {"name": "N$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "N$ebnf$1", "symbols": ["N$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "N", "symbols": ["N$ebnf$1"], "postprocess": d => parseInt(d[0].join(''), 10)}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
