const fisrtName = "Viet ";
const age = 20;
const temp = 100;

// boolean
const handSome = true;

// null
const aaptNumber = null;
//undefined
//let score
const score = undefined;
//symbol
const id = Symbol("id");
// Biginteger
const n = 161651561313n;
// reference type
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const person = {
  firstName: "Pham",
};
function sayHello() {
  console.log("Hello");
}
const output = sayHello;
console.log(output, typeof output);
// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
