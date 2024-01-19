// Khai báo hàm có tên là 'first'
function first(){
    // Khai báo một biến hằng số 'x' với giá trị là 100
    const x = 100;

    // Khai báo hàm có tên là 'second' bên trong hàm 'first'
    function second(){
        // Khai báo một biến hằng số 'y' với giá trị là 200
        const y = 200;

        // In ra tổng của 'x' và 'y'
        console.log(x + y);
    }

    // Gọi hàm 'second'
    second();
}

// Gọi hàm 'first'
first();

// Một khối mã khác với một câu lệnh if
if(true) {
    // Khai báo một biến hằng số 'x' với giá trị là 100 (phạm vi khác so với 'x' trong hàm 'first')
    const x = 100;

    // Hàm 'second' bên trong khối if
    function second(){
        // Khai báo một biến hằng số 'y' với giá trị là 200
        const y = 200;

        // In ra tổng của 'x' và 'y'
        console.log(x + y);
    }

    // Mở comment dòng dưới sẽ dẫn đến lỗi ReferenceError vì 'y' không thể truy cập từ bên ngoài hàm 'second'
    // console.log(y); // ReferenceError: y is not defined
}
