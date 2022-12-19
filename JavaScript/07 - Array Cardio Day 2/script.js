// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
function checkAge(age) {
  const currentYear = new Date().getFullYear();
  return currentYear - age >= 19;
}

const isAdult = people.some((person) => checkAge(person.year));
console.log(isAdult); // true

const allAdults = people.every((person) => checkAge(person.year));
console.log({ allAdults }); // false

// Array.prototype.find()
//? The find method looks for a single (first) element that makes the function return true.
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find((cmt) => cmt.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex((cmt) => cmt.id === 823423);
console.log(commentIndex);

// comments.splice(index, 1);
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.log(newComments);


//? array.splice(index, how many, item1, ....., itemX)
// index 	[Required] -> The position to add/remove items. Negative value defines the position from the end of the array.
// how many 	[Optional] -> Number of items to be removed.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi"); // At position 2, add 2 elements:  

fruits.splice(2, 2);  // At position 2, remove 2 items:  

fruits.splice(2, 1, "Lemon", "Kiwi"); // At position 2, add new items, and remove 1 item: 