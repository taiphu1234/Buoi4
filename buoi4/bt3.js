// Bài 3: Kiểm tra năm nhuận (Trung bình - if-else)

// 1. Nhập năm từ người dùng
let year = parseInt(prompt("Nhập một năm (số nguyên dương):"));

// 2. Kiểm tra dữ liệu hợp lệ (năm > 0)
if (isNaN(year) || year <= 0) {
    console.error("❌ Lỗi: Dữ liệu nhập vào không hợp lệ. Vui lòng nhập một số nguyên dương cho năm.");
} else {
    // 3. Áp dụng công thức kiểm tra năm nhuận
    /*
        Công thức: Năm nhuận là năm:
        (year % 4 === 0) VÀ ((year % 100 !== 0) HOẶC (year % 400 === 0))
    */
    const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

    // 4. In kết quả ra console
    console.log("================== KẾT QUẢ KIỂM TRA NĂM NHUẬN ===================");
    if (isLeapYear) {
        console.log(`✅ Năm ${year} là NĂM NHUẬN!`);
    } else {
        console.log(`⭕ Năm ${year} KHÔNG phải là năm nhuận.`);
    }
    console.log("================================================================");
}