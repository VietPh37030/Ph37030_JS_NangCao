const social = ["facebook", "twitter", "youtube"];
console.log(social.__proto__);
// View  prototype  chanin
social.forEach(function (item) {
  console.log(item);
});
// Short form
socials.forEach((item) => console.log(item));
// We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Linkedin", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

socialObjs.forEach((item) => console.log(item.url));
// console.log(socials.__proto__);: Hiển thị prototype chain của mảng. Tuy nhiên, truy cập trực tiếp vào __proto__ không được khuyến khích trong ứng dụng thực tế.

// socials.forEach(function (item) {...});: Sử dụng vòng lặp forEach để lặp qua từng phần tử của mảng socials và thực hiện một hàm callback cho mỗi phần tử. Trong trường hợp này, hàm callback là một hàm không tên (anonymous function), và nó đơn giản là in ra giá trị của từng phần tử.

// socials.forEach((item) => console.log(item));: Sử dụng arrow function để rút gọn cú pháp và viết ngắn gọn hơn. Cả hai cách viết đều tương đương.

// socials.forEach((item, index, arr) => console.log(${index} - ${item}, arr));: Trong trường hợp này, hàm callback nhận thêm tham số index là vị trí của phần tử trong mảng và arr là chính mảng đó. In ra cả index và giá trị của mỗi phần tử.

// function logSocials(social) {...}: Khai báo một hàm có tên là logSocials để sử dụng trong vòng lặp forEach. Hàm này đơn giản là in ra giá trị của phần tử.

// socialObjs.forEach((item) => console.log(item.url));: Lặp qua mảng socialObjs của các đối tượng và in ra thuộc tính url của mỗi đối tượng.
