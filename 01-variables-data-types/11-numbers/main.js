let x;

// Tạo một đối tượng Number với giá trị là 5
const num = new Number(5);

// toString() - trả về một chuỗi biểu diễn của số
x = num.toString();
// Để lấy độ dài của chuỗi
x = num.toString().length;

// toFixed() - trả về một chuỗi biểu diễn của số với số thập phân được chỉ định
x = num.toFixed(2);

// toPrecision() - trả về một số với độ dài được chỉ định
x = num.toPrecision(3);

// toExponential() - chuyển đổi số thành biểu diễn số mũ và trả về giá trị của nó dưới dạng chuỗi
x = num.toExponential(2);

// toLocaleString() - trả về một chuỗi biểu diễn của số, sử dụng ngôn ngữ hiện tại
x = num.toLocaleString('en-US');

// valueOf - Lấy giá trị
x = num.valueOf();

// Đối tượng Number cũng có một số thuộc tính và phương thức riêng

// Số lớn nhất và nhỏ nhất có thể có
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
