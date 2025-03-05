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

type userInfo = {
  first: string;
  last: string;
  age: number;
};

type accountDetails = {
  emailId: string;
  password: string;
};

type user = userInfo & accountDetails;

const Avi: user = {
  first: "avi",
  last: "sharma",
  age: 82,
  emailId: "avi@sharmagmail.com",
  password: "avi@123",
};

console.log(
  `Name : ${Avi.first} ${Avi.last},Age : ${Avi.age},Email : ${Avi.emailId},Password : ${Avi.password}`
);

let color: "red" | "green" | "blue";
color = "green";
color = "red";
// color = "cyan";
console.log(color);

const games: [string, number, boolean] = ["cricket", 11, true];

let isTrue: boolean | number = true;
isTrue = 1;
isTrue = false;
// isTrue = "charishma";
console.log(isTrue);

const products = (number | string)[] = [1,"two",3,"four"];
console.log(products); 

enum weatherConditions {
 sunny = "sunny",rainy = "rainy",cloudy = "cloudy",windy = "windy"
}
const sunnyWeather = weatherConditions.sunny ;
console.log(sunnyWeather) 

class Vyakti {
  age : number;
  name : string;
  constructor(age:number,name:string){
    this.age = age;
    this.name = name;
  }
}

const person1 = new Vyakti(24,"asraani");
console.log(person1.age);

interface computer {
  name : string;
  ram : number;
  memory : number;

}

const computeExample : computer = {
  name : "dell",
  ram : 8,
  memory : 256
}

console.log(computeExample.name);

interface MathOperation {
  (x:number,y:number):number;
}
const add : MathOperation = (x:number,y:number) => x + y;


