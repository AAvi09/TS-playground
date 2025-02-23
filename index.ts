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

type Jankaari = {
  name: string;
  age: number;
  location: string;
};

const userJankaari = (jankaar: Jankaari) => {
  return `Name : ${jankaar.name},Age : ${jankaar.age},Location : ${jankaar.location}`;
};

const aadhar = userJankaari({ name: "lukka", age: 75, location: "chichpokli" });
console.log(aadhar);
