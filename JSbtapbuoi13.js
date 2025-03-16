// tính giai thừa của số n bằng đệ quy
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5))

// tính số fibanacci

// kiển tra chuỗi đối xứng
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join(''); //reverse là đảo ngược
}
console.log(isPalindrome('anna'))

// tìm ký tự xuất hiện nhiều nhất

// xây dụng lớp Person
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = newAge;
    }
}
const person = new Person("Ngoc", 18);
console.log(person.name, person.age)

// xây dựng lớp Rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    chuvi() {
        return 2 * (this.width + this.height);
    }
    dientich() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 10);
console.log(rect.dientich())
console.log(rect.chuvi())

// in ra tất cả các số nguyên tố từ 1 đến n
function SNT(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function inSNT(n) {
    for (let i = 1; i <= n; i++) {
        if (SNT(i)) {
            console.log(i);
        }
    }
}
inSNT(29)

// tính tổng các số chia hết cho 3 hoặc 5 từ 1 đến n
function tongchiahet3or5(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(tongchiahet3or5(20))

// tìm số lớn thứ hai
function secondlargest(arr) {
    let first = 0;
    let second = 0; 

    for (const num of arr) {
        if (num > first) {
            second = first; 
            first = num;}
         else if (num > second && num < first) {
            second = num; }
    }
    return second === 0 ? null : second;
}
const array = [7, 29, 14, 13, 2];
console.log(secondlargest(array))

// đếm số lần xuất hiện của mỗi phần tử trong mảng sử dụng reduce