var countStrLength = function(s) {
    for (var i = 0, escaped = 2; i < s.length; i++) {
        if (s[i] === '\\') {
            if (s[i + 1] && s[i + 1] === '\\') escaped++, i++;
            else if (s[i + 1] && s[i + 1] === '"') escaped++, i++;
            else if (s[i + 1] && s[i + 1] === 'x') {
                if (s[i + 2] && s[i + 3]
                    && /^[0-9A-F]{2}$/i.test(s[i + 2] + s[i + 3])) {
                    escaped += 3, i += 3;
                }
            }
        }
    }
    return escaped;
};

var countEscapedLength = function(s) {
    for (var i = 0, escaped = 2; i < s.length; i++) {
        if (s[i] === '\\') escaped++;
        if (s[i] === '"') escaped++;
    }
    return escaped;
};



var input = require('fs')
    .readFileSync('./input8.txt', 'utf8')
    .trim()
    .split('\n');


console.log(
    input
        .map(countStrLength)
        .reduce((a, b) => a + b, 0)
);

console.log(
    input
        .map(countEscapedLength)
        .reduce((a, b) => a + b, 0)
);

