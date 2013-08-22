//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
var quiz = {};

// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true

//////HARD WAY,that didnt work. I was trying to make an array with a bunch of days in them
// and iterate through each and compare the input to the array.
// var d=new Date();
// var weekday=new Array(7);
// weekday[0]="Sunday";
// weekday[1]="Monday";
// weekday[2]="Tuesday";
// weekday[3]="Wednesday";
// weekday[4]="Thursday";
// weekday[5]="Friday";
// weekday[6]="Saturday";

// var n = weekday[d.getDay()];
// quiz.sleepIn = function(options) {
//   if

// }

// realized theres an easier way, there are only two days on vacation........
quiz.sleepIn = function(options) {
  if(options === {vacation: true} || options === 'Saturday' || options === 'Sunday'){
    return true;
  } else {
    return false;
  }
};

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => false
// quiz.nearHundred('two') => Error: Please enter a number!

quiz.nearHundred = function(options) {
  if(options >= 90) {
    return true;
  } else {
    return false;
  }
};


// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!



// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

quiz.delDel = function(options) {
  var del = "delDel";
  del.replace("Del", "");
  return del;
};

// How do I make this stick? It keeps returning del as the original and not the replaced version.

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"

var string = "Surf!";
var last = string[string.length-1];
console.log(last);

backAround = function(options) {

  var last = options[options.length-1];
  // last to the front

  return last + options.substring(0, options.length-1);

};