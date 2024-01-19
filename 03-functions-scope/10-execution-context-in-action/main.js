// Khai báo hai biến x và y với giá trị là 100 và 50
const x = 100;
const y = 50;

// Định nghĩa hàm getSum nhận hai tham số và trả về tổng của chúng
function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

// Gọi hàm getSum với tham số là x và y, lưu kết quả vào biến sum1
const sum1 = getSum(x, y);

// Gọi hàm getSum với tham số là 10 và 5, lưu kết quả vào biến sum2
const sum2 = getSum(10, 5);

// In ra tổng của sum1 và sum2
console.log(sum1, sum2);
// Giải thích từng phần:

// Khai báo Biến:

// x và y được khai báo là hai biến với giá trị tương ứng là 100 và 50.
// Định nghĩa Hàm:

// Hàm getSum nhận hai tham số (n1 và n2) và trả về tổng của chúng.
// Gọi Hàm:

// sum1 nhận giá trị của hàm getSum được gọi với tham số là x và y.
// sum2 nhận giá trị của hàm getSum được gọi với tham số là 10 và 5.
// In Ra Console:

// Cuối cùng, in ra console giá trị của sum1 và sum2.
// Khi sử dụng các công cụ phát triển trình duyệt (browser developer tools), bạn có thể thêm breakpoint ở dòng đầu tiên để theo dõi và kiểm tra giá trị của các biến trong quá trình thực thi mã nguồn