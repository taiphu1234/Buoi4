// Nhập dữ liệu từ người dùng (chạy trong trình duyệt)
let age = parseInt(prompt("Nhập tuổi của bạn:"));
let role = prompt("Nhập vai trò (admin/user/guest):").toLowerCase();

if (role === "admin") {
    console.log("Được truy cập");
} else if (role === "user" && age >= 18) {
    console.log("Được truy cập");
} else {
    console.log("Không được truy cập");
}
