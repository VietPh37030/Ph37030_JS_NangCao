// Lấy ngày và giờ hiện tại
let d = new Date();

// Chuyển thành chuỗi
d = d.toString();

// Lấy một ngày cụ thể
// Lưu ý: tháng được đánh số từ 0 đến 11, nên 0 là tháng 1 và 11 là tháng 12
d = new Date(2021, 0, 10, 12, 30, 0); // Ngày 10 tháng 1 năm 2021, lúc 12 giờ 30 phút.

// Truyền vào một chuỗi
d = new Date('2021-07-10T12:30:00'); // Tạo từ chuỗi ngày và giờ.
d = new Date('07/10/2021 12:30:00'); // Định dạng khác của chuỗi ngày và giờ.
d = new Date('2022-07-10'); // Tạo từ chuỗi ngày (không có giờ).
d = new Date('07-10-2022'); // Định dạng khác của chuỗi ngày.

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Lấy timestamp hiện tại
d = Date.now();

// Lấy timestamp của một ngày cụ thể
d = new Date();
d = d.getTime(); // Cách 1 để lấy timestamp.
d = d.valueOf(); // Cách 2 để lấy timestamp.

// Tạo một ngày từ một timestamp
d = new Date(1666962049745);

// Chuyển từ mili-giây thành giây
d = Math.floor(Date.now() / 1000);

console.log(d);
