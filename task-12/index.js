// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.

// Write a function which takes two objects and return the person with more power based on their name and power both.
const personOne = {
  name: "Ram",
  age: 25,
  power: "2500",
};
const personTwo = {
  name: "Krishna",
  age: 31,
  power: "2350",
};

function calculatePower(personOne, personTwo) {
  let personeOneNamePower = personOne.name.length * 35;
  let personeTwoNamePower = personTwo.name.length * 35;

  if (
    personOne.power > personTwo.power &&
    personeOneNamePower > personeTwoNamePower
  ) {
    console.log(`${personOne.name} is powerful`);
  } else {
    console.log(`${personTwo.name} is powerful`);
  }
}
calculatePower(personOne, personTwo);
