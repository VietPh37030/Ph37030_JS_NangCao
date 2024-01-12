// Tạo một chuỗi mới có tên "myNewString" giữ giá trị là "Developer", sử dụng chữ thường từ "myString"
const myString = 'developer';

let myNewString;

// Giải pháp 1:
// Sử dụng charAt(0) để lấy ký tự đầu tiên của chuỗi
// Sử dụng substring(1) để lấy phần còn lại của chuỗi sau ký tự đầu tiên
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Giải pháp 2:
// Sử dụng ký tự mảng (myString[0]) để lấy ký tự đầu tiên của chuỗi
// Sử dụng substring(1) để lấy phần còn lại của chuỗi sau ký tự đầu tiên
myNewString = myString[0].toUpperCase() + myString.substring(1);

// Giải pháp 3:
// Sử dụng chuỗi kết hợp ${} để tạo chuỗi mới
// Chữ in hoa ở đầu được tạo bởi `${myString[0].toUpperCase()}`
// Phần còn lại của chuỗi được lấy bằng cách sử dụng slice(1)
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// In ra console để kiểm tra kết quả
console.log(myNewString);
