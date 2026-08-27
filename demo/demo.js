//Spread Operator...
console.log("SPREAD OPERATOR");

//trải các phần tử của một mảng hoặc thuộc tính của object ra
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3)

// //Có thể dùng để sao chép mảng
// console.log("=====================");
// const newNumbers = [...arr3];
// console.log(newNumbers);
//
// //Có thể sao chép, mở rộng mà ko cần viết từng phần tử
// console.log("=====================");
// const arr = [...arr1, 4];
// console.log(arr);
// console.log("=====================");
// const user = {
//     name: "Triet",
//     age: 20
// };
//
// const newUser = {
//     ...user,
//     address: "Da Nang"
// };
//
// console.log(newUser);

//Rest Parameter
// console.log("REST PARAMETER");
// //Gom nhiều giá trị thành 1 mảng
// function showNumbers(...numbers) {
//     console.log(numbers);
// }
// showNumbers(1,2,3,4,5);

// function sum(...numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }
//
// console.log(sum(1, 2, 3, 4, 5));
//
// //Destructuring
// console.log("DESTRUCTURING");
// //Destructuring cho phép lấy dữ liệu từ array hoặc object vào các biến một cách ngắn gọn.
// const numbers = [10, 20, 30];
//
// const [a, b, c] = numbers;
//
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
//
// //Object
// const user = {
//     name: "Triet",
//     age: 26
// };
//
// const { name, age } = user;
//
// console.log(name);
// console.log(age);