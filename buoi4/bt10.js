// Nhập dữ liệu từ người dùng (chạy trong trình duyệt)
let value = parseFloat(prompt("Nhập giá trị nhiệt độ:"));
let unit = prompt("Nhập đơn vị (celsius/fahrenheit):").toLowerCase();

switch (unit) {
    case "celsius":
        if (value < -273.15) {
            console.log("Giá trị không hợp lệ. Nhiệt độ Celsius không thể thấp hơn -273.15.");
        } else {
            let fahrenheit = (value * 9/5) + 32;
            console.log(`${value} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`);
        }
        break;

    case "fahrenheit":
        if (value < -459.67) {
            console.log("Giá trị không hợp lệ. Nhiệt độ Fahrenheit không thể thấp hơn -459.67.");
        } else {
            let celsius = (value - 32) * 5/9;
            console.log(`${value} Fahrenheit = ${celsius.toFixed(2)} Celsius`);
        }
        break;

    default:
        console.log("Đơn vị không hợp lệ. Vui lòng nhập 'celsius' hoặc 'fahrenheit'.");
}
