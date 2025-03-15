// 1. Dùng toán tử chia lấy dư để kiểm tra số nguyên dương
function so_nguyen_duong(num) {
    return num > 0 && num % 1 == 0;
}
console.log(so_nguyen_duong(5))

// 2. Kiểm tra số nguyên âm
function so_nguyen_am(num) {
    return num < 0 && num % 1 === 0;
}
console.log(so_nguyen_am(-3))

// 3. Tính tổng hai số
function tong_2so(a, b) {
    return a + b;
}
console.log(tong_2so(10, 20))

// 4. Giải phương trình bậc 1 ax + b = 0
function giai_pt(a, b) {
    if (a === 0) {
        return b === 0 ? "Vô số nghiệm" : "Vô nghiệm";
    }
    else { return -b / a;}
}
console.log(giai_pt(2, 4));

// 5. Kiểm tra số nguyên tố
function SNT(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7))

// 6. Kiểm tra số chính phương
function so_chinh_phuong(num) {
    return Number.isInteger(Math.sqrt(num));
}
console.log(so_chinh_phuong(16));

// Khai báo các biến sử dụng các kiểu dữ liệu khác nhau
let number = 297; 
let name = "Yến Ngọc";
let boolean = true; 
let array = [1, 2, 3, 4, 5]; 
let person = { name: "CIT", age: 1 }; 

// Sử dụng toán tử số học để tính tổng, hiệu, tích, thương của hai số
let tong = a + b;
let hieu = a - b;
let nhan = a * b;
let chia = a / b;

// Nhận vào hai số và trả về tổng của chúng
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10))

// Kiểm tra xem một số có phải là số chẵn hay không
function so_chan(num) {
    return num % 2 == 0;
}
console.log(so_chan(4)); 

// Sử dụng câu lệnh if-else để kiểm tra số nhập vào có lớn hơn 10 hay không
function so_lon_hon_10(num) {
    if (num > 10) {
        return "Số lớn hơn 10";
    } else {
        return "Số không lớn hơn 10";
    }
}
console.log(so_lon_hon_10(15));

// Sử dụng câu lệnh switch-case để hiển thị ngày trong tuần từ số nhập vào (1 - 7)
function ngày(day) {
    switch (day) {
        case 1:
            return "Thứ Hai";
        case 2:
            return "Thứ Ba";
        case 3:
            return "Thứ Tư";
        case 4:
            return "Thứ Năm";
        case 5:
            return "Thứ Sáu";
        case 6:
            return "Thứ Bảy";
        case 7:
            return "Chủ Nhật";
        default:
            return " Nhập số 1-7 ";
    }
}
console.log(ngày(3)); 