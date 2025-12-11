// Bài 6: Kiểm tra chẵn lẻ bằng ternary (Cơ bản - ternary)

// 1. Nhập một số nguyên từ người dùng
let number = parseInt(prompt("Nhập một số nguyên bất kỳ:"));

let result; // Biến để lưu kết quả phân loại

// 2. Kiểm tra dữ liệu hợp lệ
if (isNaN(number)) {
    result = "❌ Lỗi: Dữ liệu nhập vào không phải là số hợp lệ.";
} else {
    // 3. SỬ DỤNG TOÁN TỬ TERNARY (Toán tử điều kiện)
    // Cú pháp: (Điều kiện) ? Giá trị_nếu_Đúng : Giá trị_nếu_Sai
    
    result = (number % 2 === 0) ? "✅ Chẵn" : "⭕ Lẻ";
}

// 4. In kết quả ra console
console.log("================== KẾT QUẢ KIỂM TRA CHẴN/LẺ ==================");
console.log(`Số nhập vào là: ${number}`);
console.log(`Phân loại: ${result}`);
console.log("==============================================================")