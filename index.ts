type Person = {
  name: string;
};

const person: Person = {
  name: "kader khan",
};

console.log(person.name);

//string
let myName: string = "sunil chetri";
myName = "bhaichung bhutia";

console.log(myName);

//numbers
let quantitiy: Number = 23;
quantitiy = 56;
console.log(quantitiy);

//regular functions
// function addOne(num: number) {
//   return num + 1;
// }
// const res = addOne(4);
// console.log(res);

const minusOne = (num: number) => {
  return num - 1;
};
const minusres = minusOne(10);
console.log(minusres);

function greet(person: string = "anonymous") {
  return `Hello ${person}`;
}

const greetings = greet("chilgozanand");
console.log(greetings);

// function infiniteLoop(): never {
//   while (true) {}
// }

// let x: never;
const names: string[] = ["alice", "bob", "candice", "jennie"];
console.log(names);

const printUser: { name: string; age: number; location: string } = {
  name: "shakaaal",
  age: 100,
  location: "naagpada",
};

console.log(printUser.name);
console.log(printUser.age);
