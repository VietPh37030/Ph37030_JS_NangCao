let x;

// Tạo một đối tượng
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// Truy cập thuộc tính của đối tượng
x = person.name; // Sử dụng dot notation
x = person['age']; // Sử dụng bracket notation
x = person.address.state;
x = person.hobbies[0];

// Cập nhật thuộc tính
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Xóa thuộc tính
delete person.age;

// Tạo thuộc tính mới
person.hasChildren = true;

// Thêm hàm
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys với nhiều từ
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);
