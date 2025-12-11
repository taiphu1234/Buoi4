// Bài 4: Máy tính đơn giản (Trung bình - switch)

// 1. Nhập hai số và toán tử
let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
let num2 = parseFloat(prompt("Nhập số thứ hai:"));
let operator = prompt("Nhập toán tử (+, -, *, /):");

let result;
let isValidInput = true;

// 2. Kiểm tra dữ liệu số có hợp lệ không
if (isNaN(num1) || isNaN(num2)) {
    console.error("❌ Lỗi: Dữ liệu nhập vào không hợp lệ. Vui lòng nhập số cho cả hai trường.");
    isValidInput = false;
}

if (isValidInput) {
    // 3. Sử dụng cấu trúc switch để thực hiện phép tính
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Xử lý trường hợp chia cho 0
            if (num2 === 0) {
                result = "Lỗi: Không thể chia cho 0.";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            // Xử lý trường hợp toán tử không hợp lệ
            result = "Lỗi: Toán tử không hợp lệ. Vui lòng nhập +, -, *, hoặc /.";
            break;
    }

    // 4. In kết quả ra console
    console.log("================== KẾT QUẢ MÁY TÍNH ===================");
    if (typeof result === 'number') {
        console.log(`Phép tính: ${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
    } else {
        // In ra thông báo lỗi (chia cho 0 hoặc toán tử sai)
        console.log(`Phép tính: ${num1} ${operator} ${num2}`);
        console.log(`Kết quả: ${result}`);
    }
    console.log("======================================================");
}