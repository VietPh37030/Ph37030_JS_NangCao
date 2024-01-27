// Comment: Đây là một cấu trúc vòng lặp for cơ bản trong JavaScript.

// Comment: INITITAL EXPRESSION - Khởi tạo một biến/đếm
// Comment: CONDITION EXPRESSION - Điều kiện để vòng lặp tiếp tục chạy miễn là nó được đáp ứng hoặc cho đến khi điều kiện là sai
// Comment: INCREMENT EXPRESSION - Biểu thức sẽ được thực hiện sau mỗi lần lặp của vòng lặp. Thường là tăng giá trị của biến
// Comment: STATEMENT - Mã sẽ được thực hiện mỗi lần vòng lặp chạy. Để thực hiện một `block` mã, sử dụng cú pháp `{}`

// Comment: Ví dụ 1 - Vòng lặp for đơn giản lặp từ 0 đến 10
// Comment: Nếu giá trị hiện tại của biến đếm là 7, nó sẽ in ra một thông báo đặc biệt, ngược lại, nó sẽ in ra số.
for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("7 là số may mắn của tôi");
  } else {
    console.log("Số " + i);
  }
}

// Comment: Ví dụ 2 - Vòng lặp lồng nhau
// Comment: Vòng lặp bên ngoài lặp từ 1 đến 10, vòng lặp bên trong lặp từ 1 đến 5, in ra kết quả nhân.
for (let i = 1; i <= 10; i++) {
  console.log("Số " + i);

  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Comment: Ví dụ 3 - Lặp qua một mảng
// Comment: Lặp qua một mảng tên, in ra một thông báo đặc biệt cho tên 'John'.
const names = ["Brad", "Sam", "Sara", "John", "Tim"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "John") {
    console.log(names[i] + " là người xuất sắc nhất");
  } else {
    console.log(names[i]);
  }
}

//   Ví dụ 1: Một vòng lặp đơn giản từ 0 đến 10. Nếu i bằng 7, in ra một thông báo đặc biệt, ngược lại in ra số.

// Ví dụ 2: Vòng lặp lồng nhau. Vòng lặp bên ngoài lặp qua các số từ 1 đến 10 và in ra số đó. Bên trong, có một vòng lặp khác lặp từ 1 đến 5 và in ra kết quả nhân.

// Ví dụ 3: Lặp qua một mảng tên và in ra tên. Nếu tên là 'John', in ra một thông báo đặc
