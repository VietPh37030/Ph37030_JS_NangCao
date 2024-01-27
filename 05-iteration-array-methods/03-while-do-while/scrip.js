let i = 0;

// Vòng lặp while đầu tiên in ra các số từ 0 đến 20
while (i <= 20) {
    console.log('Number' + i);
    i++;
}

// Mảng và vòng lặp while để in ra các phần tử của mảng arr
const arr = [10, 20, 30, 40];
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Vòng lặp while lồng nhau: In ra số từ 0 đến 5 và bảng cửu chương từ 1 đến 5
while (i <= 5) {
    console.log('Number' + i);
    let j = 1;
    while (j <= 5) {
        console.log(`${i}*${j}=${i*j}`);
        j++;
    }
    i++;
}

// Vòng lặp do-while in ra các số từ 0 đến 20, luôn chạy ít nhất một lần
do {
    console.log('Number' + i);
    i++;
} while (i <= 20);
