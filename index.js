let quote = "...ask not what your country can do for you — ask what you can do for your country.";

//Add code below
let quoteLength = quote.length;
let twentySecondLetter = quote[21];
let output = `the length of the quote is ${quoteLength} and the twenty-second letter in the quote is ${twentySecondLetter}`;
let output = `the length of the quote is ${quoteLength} and the twenty-second letter in the quote is [${twentySecondLetter}]`;

document.getElementById("result").innerHTML = output;