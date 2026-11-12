//Grade Calculator
let mark = 85;

if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 75) {
    console.log("Grade B");
}
else if (mark >= 50) {
    console.log("Grade C");
}
else if (mark >= 35) {
    console.log("Just Pass");
}
else {
    console.log("Fail");
}

//Login Validation
let username = "admin";
let password = "12345";

if (username == "admin") {
    if (password == "12345") {
        console.log("Login Successful");
    }
    else {
        console.log("Incorrect Password");
    }
}
else {
    console.log("Invalid Username");
}

//Electricity Bill
let units = 150;
let bill;

if (units <= 100) {
    bill = units * 1;
}
else if (units <= 200) {
    bill = units * 2;
}
else if (units <= 300) {
    bill = units * 3;
}
else {
    bill = units * 5;
}

console.log("Electricity Units:", units);
console.log("Total Bill: Rs.", bill);

//Employee Bonus
let salary = 30000;
let experience = 5;
let bonus;

if (experience >= 10) {
    bonus = salary * 0.20;
}
else if (experience >= 5) {
    bonus = salary * 0.10;
}
else if (experience >= 2) {
    bonus = salary * 0.05;
}
else {
    bonus = 0;
}

console.log("Salary:", salary);
console.log("Bonus:", bonus);
console.log("Total Salary:", salary + bonus);

//Largest of Three
let a = 10;
let b = 25;
let c = 15;

if (a > b && a > c) {
    console.log("A is the Largest");
}
else if (b > a && b > c) {
    console.log("B is the Largest");
}
else if (c > a && c > b) {
    console.log("C is the Largest");
}
else {
    console.log("Some numbers are equal");
}

//Shopping Discount
let amount = 5000;
let discount;

if (amount >= 10000) {
    discount = amount * 0.20;
}
else if (amount >= 5000) {
    discount = amount * 0.10;
}
else if (amount >= 2000) {
    discount = amount * 0.05;
}
else {
    discount = 0;
}

let total = amount - discount;

console.log("Shopping Amount: Rs.", amount);
console.log("Discount: Rs.", discount);
console.log("Final Amount: Rs.", total);

//ATM Withdrawal
let balance = 10000;
let withdraw = 3000;

if (withdraw <= 0) {
    console.log("Enter a valid amount");
}
else if (withdraw > balance) {
    console.log("Insufficient Balance");
}
else {
    balance = balance - withdraw;

    console.log("Withdrawal Successful");
    console.log("Withdraw Amount: Rs.", withdraw);
    console.log("Remaining Balance: Rs.", balance);
}

//Driving License
let age = 20;
let passed = true;

if (age >= 18 && passed == true) {
    console.log("Eligible for Driving License");
}
else if (age < 18) {
    console.log("Not Eligible - Age must be 18 or above");
}
else {
    console.log("Not Eligible - Driving Test Not Passed");
}

//Stock Management
let stock = 50;
let order = 20;

if (order <= 0) {
    console.log("Enter a valid order quantity");
}
else if (order > stock) {
    console.log("Out of Stock");
}
else {
    stock = stock - order;

    console.log("Order Successful");
    console.log("Ordered Quantity:", order);
    console.log("Remaining Stock:", stock);
}


//Scholarship Eligibility
let marks = 85;
let familyIncome = 150000;

if (marks >= 90 && familyIncome <= 100000) {
    console.log("Eligible for 100% Scholarship");
}
else if (marks >= 75 && familyIncome <= 200000) {
    console.log("Eligible for 50% Scholarship");
}
else if (marks >= 60 && familyIncome <= 300000) {
    console.log("Eligible for 25% Scholarship");
}
else {
    console.log("Not Eligible for Scholarship");
}