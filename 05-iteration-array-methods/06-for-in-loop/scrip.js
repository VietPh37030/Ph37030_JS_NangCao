// Loop  throught  objects
const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "green",
  color4: "yellow",
  color5: "pink",
  color6: "purple",
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// Loop through arrays and
const colorArray = ["red", "green", "bleary", "yellow"];
for (const key in colorArray) {
  console.log(colorArray[key]);
}
//    Loop through objects (For...in): Sử dụng vòng lặp for...in để duyệt qua các thuộc tính của đối tượng colorObj và in ra console cả key và value tương ứng.
// Loop through arrays (For...in): Tuy bạn có thể sử dụng for...in để duyệt qua mảng colorArray, nhưng trong trường hợp mảng, thường nên sử dụng for...of loop để đảm bảo rằng chỉ các phần tử được lặp qua, không phải các thuộc tính của mảng.
