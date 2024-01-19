// 'window'  is globallly  scopes
// alert('Hello world')
// console.log(inner with)

// Golobal scope variables
const x = 100;
console.log(x, "in the golobal");
function run() {
  // Access  golobal  vars  in the function
  console.log(window.innerHeight);
  console.log(x, " in  function");
}
run();

// Acces  golobal  vars  in blocks
if (true) {
  console.log(x, " in blocks");
}

function add() {
  // Overwriting   golobal x ( variables shadowing)
  const x = 1;
  const y = 50;
  console.log(x + y);
}
// Can't  access a function  scoped  variable  in golobal scope
console.log(y);
add();
