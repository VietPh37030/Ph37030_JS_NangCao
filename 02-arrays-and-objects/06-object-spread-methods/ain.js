let x;

// Tạo đối tượng sử dụng constructor đối tượng
const todo = new Object();

todo.id = 1;
todo.name = 'Mua Sữa';
todo.completed = false;

x = todo;

// Lồng đối tượng
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Toán tử spread
const obj3 = { ...obj1, ...obj2 };
// Tương đương với việc sử dụng ...
const obj4 = Object.assign({}, obj1, obj2);

// Mảng của các đối tượng
const todos = [
  { id: 1, name: 'Mua Sữa' },
  { id: 2, name: 'Đi đón con từ trường' },
  { id: 3, name: 'Đổ rác' },
];

x = todos[0].name;

// Lấy mảng các khóa của đối tượng
x = Object.keys(todo);

// Lấy chiều dài của đối tượng
x = Object.keys(todo).length;

// Lấy mảng các giá trị của đối tượng
x = Object.values(todo);

// Lấy mảng các cặp khóa/giá trị của đối tượng
x = Object.entries(todo);

// Kiểm tra xem đối tượng có thuộc tính không
x = todo.hasOwnProperty('age');

console.log(x);
