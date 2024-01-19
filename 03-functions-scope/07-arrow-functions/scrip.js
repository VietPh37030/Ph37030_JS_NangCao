// Khai báo hàm thông thường
// function add(a, b)
// return a + b
//}

// Cú pháp hàm mũi tên (Arrow function)
const add = (a, b) =>{
    return a + b;
};

// Trả về ngầm định
const subtract = (a, b) =>a-b;

// Có thể bỏ qua() với một tham số
const double = (a) => a*2;

// Trả về một đối tượng
const createObject =()=>({
    name:'Viet'
});

const numbers =[ 1,2,3,4,5];

// Sử dụng hàm thông thường trong phương thức forEach
numbers.forEach(function(n){
    console.log(n);
});

// Sử dụng hàm mũi tên trong phương thức forEach
numbers.forEach((n)=>console.log(n));
console.log(add(1,2));
console.log(subtract(1,2));
console.log(double(3));
console.log(createObject());
