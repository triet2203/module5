//Bài 1	Sử dụng ES6 ( arrow function, fitter)
//1. Viết hàm kiểm tra 1 số có phải là số nguyên tố

const isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    let result = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            result = false;
        }
    }
    return result;
};

//2. Cho 1 mảng số nguyên. Sử dụng filter để lọc ra các số là số nguyên tố
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = arr.filter(number => isPrime(number));
console.log(result);

//Bài 2	Sử dụng  Destructuring, rest, spread cho một đối tượng
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};

//Hãy tạo ra 1 đối tượng student gồm các thuộc tính và giá trị lấy từ đối tượng person và hiển thị ra thông tin của student vừa tạo
const {
    firstName,
    gender,
    education: {degree},
    languages: [english, ...otherLanguages],
    ...rest
} = person;

const studentInfo = {
    firstName,
    gender,
    degree,
    english
}

const student = {
    ...studentInfo
}

console.log(student);

//Viết một function có tham số là một đối tượng bất kỳ .
// Function sẽ hiển thi ra 2 thuộc tính firstName và degree
//   + Nếu đối tượng truyền vào không có thuộc tính firstName thì firstNam có giá trị mặc định là "Quân", tương tự với degree là "NA"
function getInfo({firstName = "Quân", degree = "NA"}) {
    console.log("firstName:", firstName);
    console.log("degree:", degree);
}

const sv1 = {
    firstName: "John",
    gender: "male",
    degree: "Bachelor",
    english: "English"
};

getInfo(sv1);

const sv2 = {
    name: "John",
    gender: "male",
    degree: "Bachelor",
    english: "English"
};

getInfo(sv2);
