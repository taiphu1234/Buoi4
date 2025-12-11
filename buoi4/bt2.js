// Bài 2: Phân loại tuổi (Cơ bản - if-else if)

// 1. Nhập tuổi từ người dùng
// Dùng parseInt() để đảm bảo tuổi là số nguyên
let age = parseInt(prompt("Nhập tuổi của bạn (số nguyên):"));

// 2. Kiểm tra dữ liệu hợp lệ
if (isNaN(age) || age < 0) {
    console.error("❌ Lỗi: Dữ liệu nhập vào không hợp lệ. Vui lòng nhập một số nguyên dương cho tuổi.");
} else {
    let classification;
    
    // 3. Sử dụng if-else if-else để kiểm tra và phân loại
    
    // 3a. Trẻ em (< 18)
    if (age < 18) {
        classification = "👶 Trẻ em";
    } 
    // 3b. Thanh niên (18 đến 30)
    else if (age >= 18 && age <= 30) {
        classification = "🧑 Thanh niên";
    } 
    // 3c. Trung niên (31 đến 50)
    else if (age >= 31 && age <= 50) {
        classification = "👨 Trung niên";
    } 
    // 3d. Cao niên (> 50) - Chỉ cần kiểm tra else vì các trường hợp dưới 50 đã bị loại
    else {
        classification = "👴 Cao niên"; // Tương đương với age > 50
    }

    // 4. In kết quả ra console
    console.log("================== KẾT QUẢ PHÂN LOẠI TUỔI ===================");
    console.log(`Tuổi của bạn là: ${age}`);
    console.log(`Phân loại: ${classification}`);
    console.log("============================================================");
}