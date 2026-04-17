//array
let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log(a); 
console.log(b); 
console.log(c); 

//Object Example:
let person = { name: 'Sherif', age: 21 };
let { name, age } = person;
console.log(name);
console.log(age);

//copy array
let original = [1, 2, 3];
let copy = [...original];
console.log(copy);

//rest operator:
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30));
