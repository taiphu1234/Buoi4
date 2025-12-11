// Bài 7: Quyết định thời tiết (Sử dụng Ternary Lồng Nhau)

// 1. Nhập nhiệt độ và tình trạng mưa
let temperature = parseFloat(prompt("Nhập nhiệt độ (độ C):"));
// prompt() trả về chuỗi. Chuyển đổi chuỗi thành boolean (true/false)
let isRainingInput = prompt("Có mưa không? (Nhập 'true' hoặc 'false')").toLowerCase();
let isRaining = (isRainingInput === 'true'); // Chuyển đổi thành giá trị boolean

let activity;

// 2. Kiểm tra dữ liệu hợp lệ
if (isNaN(temperature)) {
    activity = "❌ Lỗi: Dữ liệu nhiệt độ không hợp lệ.";
} else {
    // 3. Quyết định hoạt động bằng Ternary Lồng Nhau
    /*
        Logic:
        - Nếu mưa (isRaining): "Ở nhà ☔"
        - Nếu không mưa:
            - Nếu > 25°C: "Đi chơi 🏞️"
            - Nếu <= 25°C: "Xem phim 🎬"
    */
    activity = isRaining 
               ? "Ở nhà ☔ (Vì trời mưa)" 
               : (temperature > 25 
                  ? "Đi chơi 🏞️ (Trời ấm và không mưa)" 
                  : "Xem phim 🎬 (Trời mát và không mưa)");
}

// 4. In kết quả ra console
console.log("================== KẾT QUẢ QUYẾT ĐỊNH THỜI TIẾT ==================");
console.log(`Nhiệt độ: ${temperature}°C`);
console.log(`Tình trạng mưa: ${isRaining ? 'Có' : 'Không'}`);
console.log(`Hoạt động đề xuất: ${activity}`);
console.log("=================================================================");