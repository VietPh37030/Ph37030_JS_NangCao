// Break
for (let i = 0; i <= 20; i++) {
    // Nếu giá trị của i bằng 15
    if (i == 15) {
        console.log('Breaking....');
        // Kết thúc vòng lặp ngay lập tức
        break;
    }
    // Hiển thị giá trị của i trên console
    console.log(i);
}
// Continue
for (let i = 0; i <= 20; i++) {
    // Nếu giá trị của i bằng 13
    if (i === 13) {
        console.log("Skipping....");
        // Bỏ qua phần còn lại của vòng lặp và chuyển đến lần lặp tiếp theo
        continue;
    }
    // Hiển thị giá trị của i trên console
    console.log(i);
}
