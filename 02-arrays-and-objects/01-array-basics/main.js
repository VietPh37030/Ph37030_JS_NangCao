let x;

// Mảng được khởi tạo bằng cách sử dụng cú pháp literal
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const mixed = [1, 'Hello', true, null];

// Mảng cũng có thể được khởi tạo bằng cách sử dụng constructor Array
const fruits = new Array('apple', 'orange', 'grape');

// In ra mảng trái cây
console.log(fruits);

// Lấy giá trị bằng index
x = numbers[0]; // x = 1
x = numbers[0] + numbers[2]; // x = 1 + 3 = 4
x = `My favorite fruit: ${fruits[2]}`; // x = "My favorite fruit: grape"
x = numbers.length; // x = 8

// Thay đổi giá trị của phần tử trong mảng
fruits[2] = 'pear';

// In ra mảng trái cây sau khi thay đổi
console.log(fruits);

// length không chỉ đọc, bạn cũng có thể thay đổi giá trị của nó
// fruits.length = 2; // Đoạn này sẽ giảm độ dài của mảng trái cây xuống còn 2 phần tử

// Thêm phần tử vào mảng
fruits[3] = 'strawberry';

// Sử dụng length như một index sẽ thêm phần tử vào cuối mảng
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

// Gán giá trị của mảng cho biến x
x = fruits;

// In ra mảng trái cây sau khi thêm phần tử
console.log(x);
