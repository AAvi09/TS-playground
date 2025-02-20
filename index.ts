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
function addOne(num: number) {
  return num + 1;
}
const res = addOne(4);
console.log(res);
