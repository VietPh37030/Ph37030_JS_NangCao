// ||= gán giá trị bên phải chỉ khi giá trị bên trái là falsy.

let a = null;
// Nếu a là falsy, gán giá trị 10 cho a.
// if (!a) { a = 10; }
// a = a || 10;
a ||= 10;
console.log(a); // Output: 10

// &&= gán giá trị bên phải chỉ khi giá trị bên trái là truthy.
let b = 10;
// Nếu b là truthy, gán giá trị 20 cho b.
// if (b) { b = 20; }
// b = b && 20;
b &&= 20;
console.log(b); // Output: 20

// ??= gán giá trị bên phải chỉ khi giá trị bên trái là null hoặc undefined.
let c = null;
// Nếu c là null hoặc undefined, gán giá trị 20 cho c.
// if (c == null || c === undefined) { c = 20; }
// c = c ?? 20;
c ??= 20;
console.log(c); // Output: 20


// Giải thích:

// ||= (Logical OR Assignment):

// a ||= 10; gán giá trị 10 cho a chỉ khi a là falsy, nếu a đã có giá trị, giữ nguyên giá trị đó.
// &&= (Logical AND Assignment):

// b &&= 20; gán giá trị 20 cho b chỉ khi b là truthy, nếu b là falsy, giữ nguyên giá trị đó.
// ??= (Nullish Coalescing Assignment):

// c ??= 20; gán giá trị 20 cho c chỉ khi c là null hoặc undefined, nếu c có giá trị khác, giữ nguyên giá trị đó.