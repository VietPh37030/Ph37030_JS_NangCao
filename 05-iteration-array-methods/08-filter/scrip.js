const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Short version
const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// Same with forEach
const evenNumbers3 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
// console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
// console.log(earlyCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(longCompanies);















// Lọc Số Chẵn từ Mảng (Even Numbers): Sử dụng filter để lọc ra các số chẵn từ mảng numbers bằng cách sử dụng cả hàm callback thông thường và arrow function.

// Lọc Các Công Ty Bán Lẻ (Retail Companies): Sử dụng filter để lọc ra các công ty trong mảng companies có thuộc tính category là 'Retail'.

// Lọc Các Công Ty Theo Năm Bắt Đầu và Kết Thúc (Companies with Specific Start and End Years): Sử dụng filter để lọc ra các công ty trong mảng companies bắt đầu từ năm 1980 trở đi và kết thúc trước hoặc vào năm 2005.

// Lọc Các Công Ty Kéo Dài 10 Năm Trở Lên (Companies Lasting 10 Years or More): Sử dụng filter để lọc ra các công ty trong mảng companies mà thời gian hoạt động kéo dài 10 năm trở lên.

// Hiển Thị Kết Quả của Các Hoạt Động Lọc (Displaying the Result): In ra console kết quả của việc lọc công ty có thời gian hoạt động 10 năm trở lên.