// Bài 5: Xếp hạng điểm (Trung bình - if-else if)

// 1. Nhập điểm từ người dùng
let score = parseFloat(prompt("Nhập điểm của bạn (từ 0 đến 100):"));

let grade;

// 2. Kiểm tra dữ liệu hợp lệ (0 <= điểm <= 100)
if (isNaN(score) || score < 0 || score > 100) {
    console.error("❌ Lỗi: Điểm nhập vào không hợp lệ. Vui lòng nhập một số từ 0 đến 100.");
} else {
    // 3. Sử dụng if-else if-else để kiểm tra và xếp hạng
    
    // Giỏi (90-100)
    if (score >= 90) {
        grade = "🏆 Giỏi";
    } 
    // Khá (70-89)
    else if (score >= 70) { 
        // Nếu điểm không >= 90, điều kiện này tương đương với: 70 <= score < 90
        grade = "✨ Khá";
    } 
    // Trung bình (50-69)
    else if (score >= 50) {
        // Nếu điểm không >= 70, điều kiện này tương đương với: 50 <= score < 70
        grade = "👍 Trung bình";
    } 
    // Yếu (< 50) - Trường hợp còn lại
    else {
        // Điều kiện này tương đương với: 0 <= score < 50
        grade = "Needs Improvement - Yếu";
    }

    // 4. In kết quả ra console
    console.log("================== KẾT QUẢ XẾP HẠNG ĐIỂM ===================");
    console.log(`Điểm số của bạn là: ${score}`);
    console.log(`Xếp hạng: ${grade}`);
    console.log("============================================================");
}