// Định nghĩ 1 hàm'
function  sayHello(){
    console.log('Hello World');
}

// Gọi, thực thi hoặc triệu gọi một hàm
sayHello();

// Định nghĩa một hàm với tham số
function add(num1,num2){
    console.log(num1+num2);
}

// Gọi hàm với đối số
add(5,10);

// Tham số so với Đối số
// Tham số là tên của các biến được sử dụng để truyền dữ liệu vào một hàm.
// Đối số là các giá trị được truyền vào hà

// Trả về một giá trị
function subtract(num1,num2){
    return num1 - num2;
    console.log('After the return');
}
const result = subtract(10,2);
console.log(result,subtract(20,5));