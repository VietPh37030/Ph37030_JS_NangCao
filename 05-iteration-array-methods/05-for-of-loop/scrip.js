// Loop through arrays
const items = ["book", "table", "chair"];
const users = [{ name: "John" }, { name: "Viet" }, { name: "Dao" }];

// For(Const item of items)
// console.log(items);

for (const user of users) {
  console.log(user.name);
}

// Loop over  Strings
const str = "Hello word";
for (const letter of str) {
  console.log(letter);
}

//Loop over map
const map = new Map();
map.set("name", "John");
map.set("age", 25);
for (const [key, value] of map) {
  console.log(key, value);
}

//    Loop through arrays (For...of): Sử dụng vòng lặp for...of để duyệt qua từng phần tử của mảng items và in ra console.
// Loop through array of objects (For...of): Duyệt qua mỗi đối tượng trong mảng users và in ra thuộc tính name của mỗi đối tượng.
// Loop over Strings (For...of): Duyệt qua từng ký tự trong chuỗi str và in ra console.
// Loop over Map (For...of with destructuring): Duyệt qua các cặp key-value trong đối tượng Map map và in ra console. Sử dụng destructuring để truy cập cả key và value từ mỗi cặp.
