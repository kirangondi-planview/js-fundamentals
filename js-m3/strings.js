//Creating single-line strings
let firstName = "David";
let lastName = "Tucker";
let title = `Engineer`;

title = `CTO`;

//String concatenation with the plus operator
let fullName = firstName + " " + lastName;

//String concatenation with template literals.
fullName = `${firstName} ${lastName}`; 
console.log(fullName);

//Creating multi-line strings with \n
let bio = "Line 1\nLine 2\nLine 3";
console.log(bio);

//Creating multi-line strings with backticks
bio = `About DT:
Is the current CTO of Globomantis.
He also authors!`;

//Escaping Characters
let quote = 'David said, "JS is great."';
quote = "David said, \"JS is great.\"";
quote = `JS can use 'single' and "double Quotes"`;
quote = `In JavaScript, you must escape the \\ character`;
console.log(quote);

//String length
let length = quote.length;
console.log(`Quote Length: ${length}`);

//Accessing specific characters
let secondCharacter = quote[1];
console.log(`Second Character: ${secondCharacter}`);

//Changing case
let upperCase = fullName.toUpperCase();
console.log(upperCase);
let lowerCase = upperCase.toLowerCase();
console.log(lowerCase);

//Finding a substring
let idx1 = fullName.indexOf("Dav");
console.log(`Index 1: ${idx1}`);
let idx2 = fullName.indexOf("er");
console.log(`Index 2: ${idx2}`);
let idx3 = fullName.indexOf("xxer");
console.log(`Index 2: ${idx3}`);

//Does a string conatain a substring
let doesContain = fullName.includes("Dav");
console.log(doesContain);

