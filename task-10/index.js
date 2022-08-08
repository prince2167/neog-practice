// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar.
//  Write a function which takes two objects and return the person with more age.

const personOne = {
  name: "Ram",
  age: 25,
  yuga: "Treta",
};
const personTwo = {
  name: "Krishna",
  age: 31,
  yuga: "Dwapar",
};

function calculateAge(personOne, personTwo) {
  if (personOne.age > personTwo.age) {
    console.log(`${personOne.name} is older`);
  } else {
    console.log(`${personTwo.name} is older`);
  }
}

calculateAge(personOne, personTwo);
