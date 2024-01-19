// Challenge 1

const arr = [1, 2, 3, 4, 5];

// Thay đổi thứ tự của mảng để đạt được kết quả như mong muốn
arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1: Sử dụng slice và concat để kết hợp hai mảng
const arr3 = arr1.slice(0, 4).concat(arr2);

// Solution 2: Sử dụng spread operator và splice để kết hợp hai mảng
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4);
