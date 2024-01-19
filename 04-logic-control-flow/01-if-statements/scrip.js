// Câu lệnh if cơ bản
if (true) {
    console.log('Điều này là đúng');
}

if (false) {
    console.log('Điều này không đúng'); // Khối mã này sẽ không được thực hiện vì điều kiện là false
}

// Biểu thức so sánh
const x = 10;
const y = 5;

if (x >= y) {
    console.log(`${x} lớn hơn hoặc bằng ${y}`);
}

if (x === y) {
    console.log(`${x} bằng ${y}`);
} else {
    console.log(`${x} không bằng ${y}`);
}

// Phạm vi khối
if (x !== y) {
    const z = 20; // Khai báo biến z với giá trị 20 trong khối mã
    console.log(`${z} là 20`);
}
// console.log(z); // Dòng này sẽ gây lỗi vì z không được định nghĩa ngoài khối

// Shorthand if-else
if (x >= y) {
    console.log(`${x} lớn hơn hoặc bằng ${y}`);
    console.log('Điều này là đúng');
} else {
    console.log(`${x} nhỏ hơn ${y}`);
}
