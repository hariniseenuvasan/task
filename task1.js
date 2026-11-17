// //Grade Calculator
// let mark = 55;

// if (mark >= 90) {
//     console.log("Grade A");
// }
// else if (mark >= 75) {
//     console.log("Grade B");
// }
// else if (mark >= 50) {
//     console.log("Grade C");
// }
// else if (mark >= 35) {
//     console.log("Just Pass");
// }
// else {
//     console.log("Fail");
// }

// //Login Validation
// let username = "admin";
// let password = "12345";

// if (username == "admin") {
//     if (password == "12345") {
//         console.log("Login Successful");
//     }
//     else {
//         console.log("Incorrect Password");
//     }
// }
// else {
//     console.log("Invalid Username");
// }

// //Electricity Bill
// let units = 150;
// let bill;

// if (units <= 100) {
//     bill = units * 1;
// }
// else if (units <= 200) {
//     bill = units * 2;
// }
// else if (units <= 300) {
//     bill = units * 3;
// }
// else {
//     bill = units * 5;
// }

// console.log("Electricity Units:", units);
// console.log("Total Bill: Rs.", bill);

// //Employee Bonus
// let salary = 30000;
// let experience = 5;
// let bonus;

// if (experience >= 10) {
//     bonus = salary * 0.20;
// }
// else if (experience >= 5) {
//     bonus = salary * 0.10;
// }
// else if (experience >= 2) {
//     bonus = salary * 0.05;
// }
// else {
//     bonus = 0;
// }

// console.log("Salary:", salary);
// console.log("Bonus:", bonus);
// console.log("Total Salary:", salary + bonus);

// //Largest of Three
// let a = 10;
// let b = 25;
// let c = 15;

// if (a > b && a > c) {
//     console.log("A is the Largest");
// }
// else if (b > a && b > c) {
//     console.log("B is the Largest");
// }
// else if (c > a && c > b) {
//     console.log("C is the Largest");
// }
// else {
//     console.log("Some numbers are equal");
// }

// //Shopping Discount
// let amount = 5000;
// let discount;

// if (amount >= 10000) {
//     discount = amount * 0.20;
// }
// else if (amount >= 5000) {
//     discount = amount * 0.10;
// }
// else if (amount >= 2000) {
//     discount = amount * 0.05;
// }
// else {
//     discount = 0;
// }

// let total = amount - discount;

// console.log("Shopping Amount: Rs.", amount);
// console.log("Discount: Rs.", discount);
// console.log("Final Amount: Rs.", total);

// //ATM Withdrawal
// let balance = 10000;
// let withdraw = 3000;

// if (withdraw <= 0) {
//     console.log("Enter a valid amount");
// }
// else if (withdraw > balance) {
//     console.log("Insufficient Balance");
// }
// else {
//     balance = balance - withdraw;

//     console.log("Withdrawal Successful");
//     console.log("Withdraw Amount: Rs.", withdraw);
//     console.log("Remaining Balance: Rs.", balance);
// }

// //Driving License
// let age = 20;
// let passed = true;

// if (age >= 18 && passed == true) {
//     console.log("Eligible for Driving License");
// }
// else if (age < 18) {
//     console.log("Not Eligible - Age must be 18 or above");
// }
// else {
//     console.log("Not Eligible - Driving Test Not Passed");
// }

// //Stock Management
// let stock = 50;
// let order = 20;

// if (order <= 0) {
//     console.log("Enter a valid order quantity");
// }
// else if (order > stock) {
//     console.log("Out of Stock");
// }
// else {
//     stock = stock - order;

//     console.log("Order Successful");
//     console.log("Ordered Quantity:", order);
//     console.log("Remaining Stock:", stock);
// }


// //Scholarship Eligibility
// let marks = 85;
// let familyIncome = 150000;

// if (marks >= 90 && familyIncome <= 100000) {
//     console.log("Eligible for 100% Scholarship");
// }
// else if (marks >= 75 && familyIncome <= 200000) {
//     console.log("Eligible for 50% Scholarship");
// }
// else if (marks >= 60 && familyIncome <= 300000) {
//     console.log("Eligible for 25% Scholarship");
// }
// else {
//     console.log("Not Eligible for Scholarship");
// }

// If statement 
// // Task 1 – Online Exam Result System
// let mark = 25;
// if (mark >= 35) {
//     console.log("Exam Result: PASS");
// } else {
//     console.log("Exam Result: FAIL");
// }

// //Task 2 – Employee Attendance and Salary
// let attendance = "present";
// let salary = 15000;
// if (attendance == "present") {
//     console.log("Employee is Present");
//     console.log("Salary: " + salary);
// } else {
//     console.log("Employee is Absent");
//     console.log("No Salary");
// }

// //Task 3 – Bank Loan Eligibility
// let age = 15;
// let salary1 = 30000;
// if (age >= 21 && salary1 >= 20000) {
//     console.log("Eligible for Bank Loan");
// } else {
//     console.log("Not Eligible for Bank Loan");
// }

// //Task 4 – E-commerce Order and Delivery System
// let order = true;
// if (order == false) {
//     console.log("Order Confirmed");
//     console.log("Your product will be delivered soon");
// } else {
//     console.log("Order Not Placed");
// }

// //Task 5 – Electricity Bill with Additional Charges
// let units = 90;
// let bill = units * 5;
// if (units > 100) {
//     bill = bill + 50;
//     console.log("Additional Charge: 50");
// } else {
//     console.log("No Additional Charge");
// }
// console.log("Total Electricity Bill: " + bill);

//for loop and while loops are control flow structures used to repeat a block of code asa long as a specific condition is true
//for loop-repeats a block of code a specific number of times
//for(initialization;conditon;update){
// code
//}

// for(let i=1;i<10;i++){
//     console.log("count:",i);
// }

//logical
// i=1 initialize value
// check condition i<=5 - true 
// print 1
// i++ increment -> i=1-> i=i+1 -> i=1+1=2
                //  i=1-> i=i+2 -> i=1+2=3
                //  i=1-> i=i+3 -> i=1+3=4
                //  i=1-> i=i+4 -> i=1+4=5--true
                //  i=1-> i=i+5 -> i=1+5=6--false

// for(let i=10;i>=1;i--){
//     console.log("count:",i);
// }

// for(let i=2;i<=20;i+=2){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         console.log("Even Number:i"i);
//     }
// }

//loop task
//task1 -- print numbers from 1 to 20
// for(let i=1;i<=20;i++){
//     console.log(i);
// }

// //task2 -- Print numbers from 20 to 1
// for(let i=20;i>=1;i--){
//     console.log(i);
// }

// //task3 -- Print even numbers from 1 to 50
// for(let i = 2; i <= 50; i+=2){
//     console.log(i);
// }

// //task4 -- Print odd numbers from 1 to 30
// for(let i=1;i<=30;i+=2){
//     console.log(i);
// }

// //task5 -- Print the multiplication table of 7
// for(let i = 1; i <= 10; i++) {
//     console.log("7 x " + i + " = " + (7 * i));
// }

//task6 -- Sum of odd numbers
let sum = 0;
for(let i = 1; i <= 30; i += 2) {
    sum = sum + i;
}
console.log("Sum of odd numbers:", sum);

//task7 -- Find largest number
let numbers = [10, 25, 15, 40, 30];
let largest = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number:", largest);

//task8 -- Factorial of a number
let fact = 1;
for(let i = 1; i <= 5; i++) {
    fact = fact * i;
}
console.log("Factorial:", fact);

//task9 --  Number pattern using nested loops
for(let i = 1; i <= 5; i++) {
    let pattern = "";
    for(let j = 1; j <= i; j++) {
        pattern = pattern + j;
    }
    console.log(pattern);
}

//task10 -- Prime numbers from 1 to 50
for(let i = 2; i <= 50; i++) {
    let count = 0;
    for(let j = 1; j <= i; j++) {
        if(i % j == 0) {
            count++;
        }
    }
    if(count == 2) {
        console.log(i);
    }
}
