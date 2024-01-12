let x;

const arr = [28, 38, 44, 29, 109];

// push() - Thêm một giá trị vào cuối mảng
arr.push(100);

// pop() - Loại bỏ giá trị cuối cùng
arr.pop();

// unshift() - Thêm một giá trị vào đầu mảng
arr.unshift(99);

// shift() - Loại bỏ giá trị đầu tiên
arr.shift();

// reverse() - Đảo ngược mảng
arr.reverse();

// includes() - Kiểm tra xem một giá trị có trong mảng không
x = arr.includes(445); // x = false, vì giá trị 445 không có trong mảng

// indexOf() - Trả về index của giá trị đầu tiên khớp
x = arr.indexOf(28); // x = 3, vì giá trị 28 có index là 3

// toString() và join() - Chuyển mảng thành chuỗi
x = arr.toString(); // x = "99,29,44,38"
x = arr.join(); // x = "99,29,44,38"

// slice() - Trích xuất một phần của mảng, tạo một mảng mới. Lấy index của phần tử đầu và phần tử cuối (không bao gồm) cần trích xuất.
x = arr.slice(1, 4); // x = [29, 44, 38]

// splice() - Hoạt động tương tự như slice() nhưng thay đổi mảng gốc. Nhận index của phần tử đầu tiên và số lượng phần tử cần loại bỏ.
x = arr.splice(1, 4); // x = [29, 44, 38, 109], mảng gốc bị thay đổi

// splice() để loại bỏ một phần tử - Dòng sau sẽ loại bỏ phần tử có index là 4 và trả về một mảng mới không chứa phần tử đó.
x = arr.splice(4, 1); // x = [109], mảng gốc bị thay đổi

// Chaining methods - Một số phương thức có thể được nối lại dựa trên giá trị trả về.
x = arr.slice(1, 4).reverse().toString().charAt(0); // x = "9", chuỗi đảo ngược và chỉ lấy ký tự đầu tiên

console.log(x);
