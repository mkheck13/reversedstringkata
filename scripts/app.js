// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



// I'm sure there is a method that does this.
// Looked at the docs, I can use split() and reduse() or split(), reverse() and join() or use the spread operator (...) to spread the characters of the string into individual elements, then use reverse() and then join() 

// Methods used in this kata:
// split() - divides the string into an array of characters
// reverse() - reverses the array
// reduce() - combines the characters
// join() - combines the characters

// for this one I used split(), reverse() and join()
function solution(str){
    const strRev = str.split('').reverse().join('');
    return strRev;
}

// Ok this is my first attempt at the problem.
// I should be able to use the methods like this. Lets test it in codewars. It liked it.
// lets see if I can get the other methods to work.

// I used split() and reduce() here
// I used a accumulator here to reverse the string
function solution(str){
    const strRev = str.split('').reduce((acc, char) => char + acc, "");
    return strRev;
}

// Using the spread operator on this one, which does the same thing as the split method for our purposes here.
function solution(str){
    const strRev = [...str].reverse().join("");
    return strRev;
}

// All the methods I used worked, this will be a good example of how they work for me to look back on.