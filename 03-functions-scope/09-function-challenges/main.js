// Thách thức 1
// function getCelsius(f){
//     const celsius =((f-32)*5)/8
//     return celsius;
// }
const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`Nhiệt độ là ${getCelsius(35)}\xB0C`);

// Thách thức 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));

// Thách thức 3
((length, width) => {
  const dienTich = length * width;

  const ketQua = `Diện tích của hình chữ nhật có chiều dài ${length} và chiều rộng ${width} là ${dienTich}.`;

  console.log(ketQua);
})(20, 10);
