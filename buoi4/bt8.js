// Bài 8: Menu lựa chọn (switch với fall through)

// 1. Nhập số đại diện cho ngày (1=CN, 2=T2... 7=T7)
let dayNumber = parseInt(prompt("Nhập số từ 1 đến 7 (1 là Chủ Nhật, 7 là Thứ Bảy):"));

let dayName;

// 2. Kiểm tra dữ liệu hợp lệ
if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    dayName = "❌ Lỗi: Vui lòng nhập một số nguyên từ 1 đến 7.";
} else {
    // 3. Sử dụng cấu trúc switch để phân loại
    switch (dayNumber) {
        case 1:
            dayName = "Chủ Nhật";
            break;
        case 2:
            dayName = "Thứ Hai";
            break;
        case 3:
            dayName = "Thứ Ba";
            break;
        case 4:
            dayName = "Thứ Tư";
            break;
        case 5:
            dayName = "Thứ Năm";
            break;
        case 6: // Thứ Sáu
        case 7: // Thứ Bảy
            // Tính năng Fall-through: Vì không có 'break' ở case 6, 
            // nó sẽ chuyển qua case 7 và thực hiện lệnh gán chung.
            dayName = "Nghỉ ngơi (Cuối tuần)";
            break;
        default:
            // Trường hợp này chỉ mang tính phòng ngừa do đã kiểm tra ở bước 2
            dayName = "Lỗi không xác định.";
            break;
    }
}

// 4. In kết quả ra console
console.log("================== KẾT QUẢ NGÀY TRONG TUẦN ===================");
console.log(`Số bạn nhập là: ${dayNumber}`);
console.log(`Tên ngày/Hoạt động: ${dayName}`);
console.log("==============================================================");