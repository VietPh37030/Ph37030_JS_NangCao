// Khai báo Hàm
function themDauDollar(value){
    return '$' + value;
}

// Khi sử dụng khai báo hàm, bạn có thể gọi hàm trước khi khai báo. 
// Tuy nhiên, với khai báo biểu thức, điều này không thể.
console.log(themDauDollar(100));

// Khai báo biểu thức
const themDauCong = function(value){
    return '+' + value;
};

// Gọi hàm thêmDauCong với đối số là 200 và in ra kết quả
console.log(themDauCong(200));
