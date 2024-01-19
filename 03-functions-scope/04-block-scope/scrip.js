// Khai báo một hằng số x với giá trị là 100
const x = 100;

// Một câu lệnh if, là một khối mã
if (true) {
    // In ra giá trị của x
    console.log(x);
    
    // Khai báo một hằng số y với giá trị là 200
    const y = 200;
    
    // In ra tổng của x và y
    console.log(x + y);
}

// Kết quả khi mở comment ở dòng dưới sẽ là ReferenceError vì y không được truy cập ngoài khối if
// console.log(y); // ReferenceError: y is not defined

// Một vòng lặp for, cũng là một khối mã
for (let i = 0; i <= 10; i++) {
    // In ra giá trị của i
    console.log(i);
}

// Kết quả khi mở comment ở dòng dưới sẽ là ReferenceError vì i không được truy cập ngoài khối for
// console.log(i); // ReferenceError: i is not defined

// Sử dụng var
if (true) {
    // Khai báo một hằng số a và một biến b trong khối if
    const a = 500;
    let b = 600;
    
    // Khai báo một biến c với var, biến này sẽ có phạm vi là toàn bộ hàm (hoặc toàn bộ chương trình nếu ở mức toàn cục)
    var c = 700;
}

// Biến c có thể truy cập được ở đây vì var có phạm vi chỉ là hàm, không phải là khối mã
console.log(c);

// Sử dụng var trong một hàm
function run() {
    // Khai báo một biến d với var, biến này có phạm vi chỉ là hàm run
    var d = 100;
    
    // In ra giá trị của d
    console.log(d);
}

// Gọi hàm run
run();

// Kết quả khi mở comment ở dòng dưới sẽ là ReferenceError vì d không được truy cập ngoài hàm run
// console.log(d); // ReferenceError: d is not defined

// Khai báo một hằng số foo và một biến bar
const foo = 1;
var bar = 2; // Biến bar sẽ trở thành một thuộc tính của đối tượng window khi mở comment
