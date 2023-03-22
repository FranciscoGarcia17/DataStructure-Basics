//First Exercise Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertCtoF(30));

//Second Exercise Reverse a String
function reverseString(str) {
  let newString = "";
  for(let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString("hello"));

//Third Exercise
const factorialize = (num) => {
    let factorial = 1;
    for(let i = 1; i <= num; i++) {
        factorial *= i;
    }
  return factorial;
}

console.log(factorialize(5));

//Fourth Find the longest Word in a string
function findLongestWordLength(str) {
    let update = str.split(" ")
    .sort((a,b) => a.length < b.length ? 1 : -1);
    console.log(update);
    let result = update[0];
    console.log(result);
  return result.length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//Fiveth Return Largest numbers in Arrays;
const largestOfFour = (arr) => {
  const newArray = [];
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i].sort((a, b) => (a < b ? 1 : -1));
    console.log(result);
    newArray.push(result[0]);
  }
  newArray;

};

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

//Sixth Confirm the ending
function confirmEnding(str, target) {
    let update = str.slice().toLowerCase();
    let updateTarget = target.toLowerCase();
    let result = update.slice(update.length - updateTarget.length);
    if(result === updateTarget) {
        return true;
    }else {
        return false;
    }
    return;
}

console.log(confirmEnding("Bastian", "N"));