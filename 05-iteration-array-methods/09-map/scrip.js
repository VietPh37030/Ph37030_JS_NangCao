// Mảng và ánh xạ để nhân đôi mỗi số
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// Cùng thao tác với forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  // ... (các phần còn lại của mảng companies)
];

// Tạo mảng tên công ty
const companyNames = companies.map((company) => company.name);

// Tạo mảng với chỉ tên và danh mục của công ty
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// Tạo mảng các đối tượng với tên và thời gian tồn tại của mỗi công ty
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' năm',
  };
});

console.log(companyYears);

// Chuỗi các phương thức map
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);
