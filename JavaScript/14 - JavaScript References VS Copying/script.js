
// const arr = ['git','github','html','css','js','react','firebase'];
// console.log( arr.slice(-2) );

// start with strings, numbers and booleans
let str = "Parth";
console.log(str.charAt(2));
console.log(str[2]);
// Let's say we have an array
const players = ['Nirav', 'Jeet', 'Yogesh', 'Hardik'];

// and we want to make a copy of it.
// team is a reference of player
const team = players;
// console.log(players, team); // [ 'Nirav', 'Jeet', 'Yogesh', 'Hardik' ] [ 'Nirav', 'Jeet', 'Yogesh', 'Hardik' ]

// You might think we can just do something like this:
// however what happens when we update that array?
team[1] = "Parth";
// console.log(players, team); // [ 'Nirav', 'Parth', 'Yogesh', 'Hardik' ] [ 'Nirav', 'Parth', 'Yogesh', 'Hardik' ] 

// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// team2 is a copy of players not reference
const team2 = players.slice();
team2[1] = "Spider-Man";
// console.log(team2, players); // [ 'Nirav', 'Spider-Man', 'Yogesh', 'Hardik' ] [ 'Nirav', 'Parth', 'Yogesh', 'Hardik' ]

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[2] = "Sun";
// console.log(team3, players); // [ 'Nirav', 'Parth', 'Sun', 'Hardik' ] [ 'Nirav', 'Parth', 'Yogesh', 'Hardik' ]

// or use the new ES6 Spread
const team4 = [...players];
team4[2] = "Sun";
// console.log(team4, players); // [ 'Nirav', 'Parth', 'Sun', 'Hardik' ] [ 'Nirav', 'Parth', 'Yogesh', 'Hardik' ]

const team5 = Array.from(players);
team5[2] = "Moon";
// console.log(team5, players); // [ 'Nirav', 'Parth', 'Moon', 'Hardik' ] [ 'Nirav', 'Parth', 'Yogesh', 'Hardik' ]

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person; // captain is a reference of person
captain.number = 99;
// console.log(person);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { country: "USA" });
// console.log(captain2); // { name: 'Wes Bos', age: 80, number: 99, country: 'USA' }
// console.log(person); // { name: 'Wes Bos', age: 80, number: 99 }

// We will hopefully soon see the object ...spread
const parth = {
  name: 'parth',
  age: 20,
  social: {
    twitter: '@parth4149',
    linkedin: 'Parth Prajapati',
    instagram: 'parth_7788'
  }
}

const dev = Object.assign({}, parth);
//? dev.social.linkedin = "Parth"; //? dev refer to social obj of parth
//? console.log(parth); 
/*{
  name: 'parth',
  age: 20,
  social: { twitter: '@parth4149', linkedin: 'Parth', instagram: 'parth_7788' }
}  */
//? console.log(dev);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
/*{
  name: 'parth',
  age: 20,
  social: { twitter: '@parth4149', linkedin: 'Parth', instagram: 'parth_7788' }
} */
// JSON.stringify : Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
const dev2 = JSON.parse(JSON.stringify(parth));
dev2.social.linkedin = "Parth";
console.log(dev2);
console.log(parth);