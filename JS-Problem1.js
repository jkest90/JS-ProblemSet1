// 1) Write a function called letterCapitalize which takes a single string parameter and capitalizes the
// first letter of each word in the string.  You can assume that words in the input string will be separated by only one space.

function letterCapitalize(str) {
    var array = str.split(' ');
    for (var i =0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array.join(' ');
}

console.log(letterCapitalize('hellllo this an array'))

// 2)Write a function called wordCount which takes a single string parameter and returns the number of words the string contains 
// (ie. "Never eat shredded wheat" would return 4).You can assume that words in the input string will be separated by only one space.

function wordCount(string) {
    for (var i=0; i <wordCount.length; i++) {
        return string.split(' ').length
    }
}
console.log(wordCount('hey you what am ai doing aoiewnfa'))

// 3) Bonus:

// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. 
// The range will be between 1 and 216.*/

