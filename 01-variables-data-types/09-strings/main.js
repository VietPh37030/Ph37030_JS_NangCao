let x;

// Khai báo biến x không gán giá trị

const name = 'VietAnh';
const age = 30;

// Nối chuỗi (concatenation)
x = `Xin chào, tôi tên là ${name} và tôi năm nay đã ${age} tuổi.`;

// Tạo một "String object" (JS thực hiện điều này tự động khi sử dụng thuộc tính hoặc phương thức trên chuỗi nguyên thủy)
const s = new String("Xin chào");

x = typeof s; // Kiểu dữ liệu của s (kiểu object)
x = s.length; // Độ dài của chuỗi
x = s[0]; // Truy cập ký tự theo chỉ số

// Hiển thị nguyên mẫu của đối tượng chuỗi. Hiển thị các thuộc tính và phương thức
x = s.__proto__;

// Thay đổi kích thước chữ
x = s.toUpperCase(); // Chuyển toàn bộ chuỗi thành chữ hoa
x = s.toLowerCase(); // Chuyển toàn bộ chuỗi thành chữ thường

// charAt() - trả về ký tự tại chỉ mục được chỉ định
x = s.charAt(0);

// indexOf - trả về chỉ mục của sự xuất hiện đầu tiên của giá trị được chỉ định trong chuỗi
x = s.indexOf('d');

// substring() - tìm kiếm chuỗi cho một giá trị cụ thể
x = s.substring(2, 5); // Lấy chuỗi từ chỉ mục 2 đến 5
x = s.substring(7); // Lấy chuỗi từ chỉ mục 7 đến hết

// slice() - trích xuất một phần của chuỗi và trả về một chuỗi mới
x = s.slice(-11, -6); // Lấy chuỗi từ chỉ mục -11 đến -6

// trim() - loại bỏ khoảng trắng từ đầu và cuối chuỗi
x = '         Hello World';
x = x.trim();

// replace() - thay thế tất cả các trường hợp của một chuỗi
x = s.replace('World', 'John');

// includes() - trả về true nếu chuỗi được tìm thấy
x = s.includes('Hell');

// valueOf() - trả về giá trị nguyên thủy của một biến
x = s.valueOf();

// split() - trả về một mảng các chuỗi
x = s.split('');

console.log(x);
