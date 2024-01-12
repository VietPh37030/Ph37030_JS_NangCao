// Ways   to  declare  a variable
//' var' ,'let' ,'const'
let fisrtName = "Pham";
let lastName = "Viet";
let age = 20;
console.log(fisrtName, lastName, age);

// Naming conventions
// only letters, numbers, and underscores and dolla signs
// Cannot be started with a number
// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 22;
console.log(age);
// With `let`, we ca declared a value without  assigning  a value to
let score;
score = 1;
console.log(score);
if (true) {
  score = score + 1;
}
console.log(score);
const x = 1000;
// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
const person = {
  firstName: "Pham",
  lastName: "Viet",
};
person.firstName = "Anh";
person.email = "anhpvph37030@gmail.com";
console.log(person);
let a, b, c;
const d = 10;
e = 20;
f = 30;
console.log(d);
console.log(a);
