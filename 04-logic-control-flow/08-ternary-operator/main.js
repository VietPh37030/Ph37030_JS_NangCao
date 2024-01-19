const age = 17;

// Sử dụng câu lệnh if
if (age >= 18) {
    console.log("Bạn có thể bỏ phiếu");
} else {
    console.log("Bạn không thể bỏ phiếu");
}

// Sử dụng toán tử ternary
age >= 18 ? console.log('Bạn có thể bỏ phiếu!') : console.log('Bạn không thể bỏ phiếu');

// Gán giá trị điều kiện cho biến
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'Bạn có thể bỏ phiếu!' : 'Bạn không thể bỏ phiếu';
console.log(canVote);
console.log(canVote2);

// Nhiều câu lệnh
const auth = true;

// Phiên bản dài hơn
// let redirect;
// if (auth) {
//     alert('Chào mừng bạn đến bảng điều khiển');
//     redirect = '/dashboard';
// } else {
//     alert('Truy cập bị từ chối');
//     redirect = '/login';
// }

// Phiên bản ngắn hơn với toán tử ternary
const redirect = auth ? (alert('Chào mừng bạn đến bảng điều khiển'), '/dashboard') : (alert('Truy cập bị từ chối'), '/login');
console.log(redirect);

// Ternary không có else
auth ? console.log('Chào mừng bạn đến bảng điều khiển') : null;

// Rút gọn cho ternary không có else
auth && console.log('Chào mừng bạn đến bảng điều khiển');


// Giải thích:

// Một số cách sử dụng câu lệnh if và toán tử ternary để kiểm tra điều kiện và thực hiện các hành động tương ứng dựa trên kết quả của điều kiện.
// Sử dụng toán tử ternary để gán giá trị cho biến dựa trên điều kiện.
// Một ví dụ về việc sử dụng toán tử ternary với nhiều câu lệnh và không có else.
// Rút gọn một số mẫu sử dụng toán tử ternary với không có else.