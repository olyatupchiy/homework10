
//1

let numbers = "";
for (let n = 20; n <=30; n+=0.5) {
    numbers = `${numbers} ${n}`
}
console.log(numbers);

//2

let resultDollar = "";
for (let num = 10; num <=100; num +=10) {
    const dollar = 27;
    resultDollar = `${resultDollar} ${num*dollar}`;
}
console.log(resultDollar);

//3

let integer = "";
let ceilingNum = prompt("Enter the number");
for (let n = 1; n <= 100; n+=1) {
    if (n**2 <= ceilingNum) {
        integer = `${integer} ${n}`
    }
}
console.log(integer);

//4

let userNum = +prompt("Enter the positive number");
if (userNum === 1) {
    console.log("1 is neither prime nor composite number");
}
else if (userNum > 1) {
    for (let a = 2; a <= userNum; a += 1) {
        if (userNum % a === 0) {
            console.log(`${userNum} is composite number`);
            break;
        } else {
            console.log(`${userNum} is prime number`);
            break;
        }
    }
}

//5

let userNum2 = +prompt("Enter the number");
let exponentiation = 0;
const num = 3;
for (let i = 1; i <= userNum2; i++) {
    if (num ** i === userNum2) {
        exponentiation = true;
        break;
    }
}
if (exponentiation === true) {
        console.log(true);
    }
else {
    console.log(false);
}




