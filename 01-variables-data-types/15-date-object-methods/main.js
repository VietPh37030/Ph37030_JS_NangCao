let x;
let d = new Date();

// Phương thức của đối tượng Date

// toString(): Chuyển đối tượng Date thành chuỗi
x = d.toString();

// getTime() và valueOf(): Lấy timestamp của đối tượng Date
x = d.getTime();
x = d.valueOf();

// getFullYear(): Lấy năm
x = d.getFullYear();

// getMonth(): Lấy tháng (0-11), để lấy tháng từ 1 đến 12 cộng thêm 1
x = d.getMonth() + 1;

// getDate(): Lấy ngày trong tháng
x = d.getDate();

// getDay(): Lấy ngày trong tuần (0-6, 0 là Chủ Nhật)
x = d.getDay();

// getHours(): Lấy giờ
x = d.getHours();

// getMinutes(): Lấy phút
x = d.getMinutes();

// getSeconds(): Lấy giây
x = d.getSeconds();

// getMilliseconds(): Lấy mili-giây
x = d.getMilliseconds();

// Format ngày tháng thành chuỗi 'YYYY-MM-DD'
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Sử dụng Intl.DateTimeFormat API để định dạng ngày tháng theo locale
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

// Lấy tên tháng (long)
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

// Lấy tên tháng (short)
x = d.toLocaleString('default', { month: 'short' });

// Định dạng đầy đủ thông tin về ngày giờ
x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);
