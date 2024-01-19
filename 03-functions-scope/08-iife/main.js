// Cú pháp IIFE (có phạm vi riêng và thực thi ngay lập tức)
(function() {
    const user = 'Brad';
    console.log(user);
    const hello = () => console.log('Chào bạn từ IIFE');
    hello();
})();

// Tham số
(function(name) {
    console.log('Chào bạn ' + name);
})('Viet');

// IIFE có tên (Chỉ có thể gọi đệ quy)
(function hello() {
    console.log('Chào bạn');
})();
// Ghi chú:

// IIFE là viết tắt của "Immediately Invoked Function Expression", là một hàm được gọi ngay sau khi được định nghĩa.
// Trong ví dụ đầu tiên, IIFE được sử dụng để tạo ra một phạm vi riêng biệt và thực thi ngay lập tức. Điều này giúp bảo vệ biến user khỏi sự xung đột với các biến khác có thể xuất hiện ở phạm vi global.
// Ví dụ thứ hai sử dụng một IIFE với tham số. Biến name được truyền vào IIFE và được sử dụng bên trong nó.
// Ví dụ thứ ba là một IIFE có tên. Có thể gọi IIFE này đệ quy, nhưng chỉ trong phạm vi của nó.