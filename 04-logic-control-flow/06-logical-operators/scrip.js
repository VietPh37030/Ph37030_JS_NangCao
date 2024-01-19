// Logical AND (&&) - Tất cả đều phải là true
console.log(10 < 20 && 30 > 15 && 40 > 30); // Phải tất cả là true

// Logical OR (||) - Chỉ cần một cái là true
console.log(10 > 20 || 30 < 15); // Chỉ cần một cái là true

// && - Sẽ trả về giá trị falsy đầu tiên hoặc giá trị cuối cùng
let a;
a = 10 && 20; // a sẽ là 20 vì cả hai đều truthy
a = 10 && 20 && 30; // a sẽ là 30 vì tất cả đều truthy
a = 10 && 0 && 30; // a sẽ là 0 vì giá trị đầu tiên falsy
a = 10 && "" && 0 && 30; // a sẽ là "" vì giá trị thứ hai là falsy
console.log(a);

const post = ['Bài viết một', 'Bài viết hai'];
post.length > 0 && console.log(post[0]); // In ra post[0] nếu post có ít nhất một phần tử

// || - Sẽ trả về giá trị truthy đầu tiên hoặc giá trị cuối cùng
let b;
b = 10 || 20; // b sẽ là 10 vì giá trị đầu tiên là truthy
b = 0 || 20; // b sẽ là 20 vì giá trị đầu tiên là falsy, và giá trị thứ hai là truthy
b = 0 || null || '' || undefined; // b sẽ là '' vì giá trị thứ ba là truthy
console.log(b);

// ?? - Sẽ trả về toán hạng bên phải khi toán hạng bên trái là null hoặc undefined
let c;
c = 10 ?? 20; // c sẽ là 10 vì 10 không phải là null hoặc undefined
c = null ?? 20; // c sẽ là 20 vì null là null
c = undefined ?? 30; // c sẽ là 30 vì undefined là undefined
c = 0 ?? 30; // c sẽ là 0 vì 0 không phải là null hoặc undefined
c = '' ?? 30; // c sẽ là '' vì '' không phải là null hoặc undefined
console.log(c);
