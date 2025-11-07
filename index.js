let quote = "...ask not what your country can do for you — ask what you can do for your country.";
const quoteLength = quote.length;
const twentySecondLetter = quote.charAt(21); 

let output = `${quoteLength}`;
output += ` [${twentySecondLetter}]`;

document.getElementById('result').innerHTML = output;