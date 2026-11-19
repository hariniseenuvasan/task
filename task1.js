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
// let sum = 0;
// for(let i = 1; i <= 30; i += 2) {
//     sum = sum + i;
// }
// console.log("Sum of odd numbers:", sum);

// //task7 -- Find largest number
// let numbers = [10, 25, 15, 40, 30];
// let largest = numbers[0];
// for(let i = 1; i < numbers.length; i++) {
//     if(numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
// console.log("Largest number:", largest);

// //task8 -- Factorial of a number
// let fact = 1;
// for(let i = 1; i <= 5; i++) {
//     fact = fact * i;
// }
// console.log("Factorial:", fact);

// //task9 --  Number pattern using nested loops
// for(let i = 1; i <= 5; i++) {
//     let pattern = "";
//     for(let j = 1; j <= i; j++) {
//         pattern = pattern + j;
//     }
//     console.log(pattern);
// }

// //task10 -- Prime numbers from 1 to 50
// for(let i = 2; i <= 50; i++) {
//     let count = 0;
//     for(let j = 1; j <= i; j++) {
//         if(i % j == 0) {
//             count++;
//         }
//     }
//     if(count == 2) {
//         console.log(i);
//     }
// }


// //while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++
// }

//syntax
//initialization
//while(condition){
    //code
    //increment;
//}

// //task1 print 1 to 20
// let i = 1;
// while(i <= 20) {
//     console.log(i);
//     i++;
// }

// //Task 2: Reverse 50 to 1
// let i = 50;
// while(i >= 1) {
//     console.log(i);
//     i--;
// }

// //Task 3: Even numbers 1 to 50
// let i = 1;
// while(i <= 50) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// } 

// //Task 4: Odd numbers 1 to 30
// let i = 1;
// while(i <= 30) {
//     if(i % 2 != 0) {
//         console.log(i);
//     }
//     i++;
// }

// //Task 5: Multiplication table of 7
// let i = 1;
// while(i <= 10) {
//     console.log("7 x " + i + " = " + (7 * i));
//     i++;
// }

// //Task 6: Sum from 1 to 100
// let i = 1;
// let sum = 0;
// while(i <= 100) {
//     sum = sum + i;
//     i++;
// }
// console.log("Total:", sum);

//Task 7: Factorial of 5
// let i = 1;
// let fact = 1;
// while(i <= 5) {
//     fact = fact * i;
//     i++;
// }
//  console.log("Factorial:", fact);

// //Task 8: Count even and odd
// let i = 1;
// let even = 0;
// let odd = 0;
// while(i <= 10) {
//     if(i % 2 == 0) {
//         even++;
//     }
//     else {
//         odd++;
//     }

//     i++;
// }
// console.log("Even count:", even);
// console.log("Odd count:", odd);

// //Task 9: Find largest number
// let numbers = [10, 25, 15, 40, 30];
// let i = 1;
// let largest = numbers[0];
// while(i < numbers.length) {
//     if(numbers[i] > largest) {
//         largest = numbers[i];
//     }
//     i++;
// }
// console.log("Largest number:", largest);

// //Task 10: Reverse a number
// let num = 1234;
// let rev = "";
// while (num > 0) {
//     rev = rev + (num % 10);
//     num = parseInt(num / 10);
// }
// console.log("Reverse:",rev);

//array-array is a collection of multiple values stored in a single variable
 
// let student1 ="Harini";
// let student2 ="Hari";
// let student3 ="Harish";
// let student4 ="Hari priya";
// let student5 ="Haripritha";
// console.log(student1);

// let student_name=["Harini","Hari","Harish","Hari priya","Haripritha"]
// console.log(student_name[1]);

// student_name[1]="kavi";
// console.log(student_name[1]);
// console.log(student_name.length);


// let fruit=["Mango","apple","orange"]
// console.log(fruit.pop());
// fruit.push("banana")
//  fruit.pop()
// console.log(fruit);

//object -- collection of data store in key value pair
// let stu_details={
//     name:"harini",
//     age:25,
//     email:"h123@gmail.com",
//     city:"chennai",
//     sibling:{
//         brother:"bala",
//         sister:"kavi"
//     }

//  }
 // name age,city -->key property name
 // "harini" 25 chennai -->values property name

 //update object
//  stu_details.name="Kavi"

//  console.log(stu_details.sibling.sister);
//  console.log(stu_details["city"]);
//  console.log(stu_details.email);
//  console.log(stu_details.age);
 //.notation  , []notation

//array of object
// let student_det=[
//     {
//         name:"Harini",
//         mark:85
//     },
//     {
//         name:"ajitha",
//         mark:76
//     },
//     {
//         name:"hari",
//         mark:55
//     },
// ];
// for(let i=0;i<student_det.length;i++){
//     console.log("Name",student_det[i].name);
//     console.log("Name",student_det[i].mark);

// }
// console.log(student_det[1].name);
// console.log(student_det[2].name);
 

//task 1.Student Grade Management System
//Concept: Array of objects + for...of + if...else if + counters

let students = [
    { name: "harini", mark: 90 },
    { name: "harish", mark: 75 },
    { name: "Kavitha", mark: 55 },
    { name: "bala", mark: 30 },
    { name: "seenu", mark: 85 }
];
let pass = 0;
let fail = 0;
for (let student of students) {
    if (student.mark >= 90) {
        console.log(student.name, "Grade A");
    } 
    else if (student.mark >= 75) {
        console.log(student.name, "Grade B");
    } 
    else if (student.mark >= 50) {
        console.log(student.name, "Grade C");
    } 
    else {
        console.log(student.name, "Fail");
    }
    if (student.mark >= 50) {
        pass++;
    } 
    else {
        fail++;
    }
}
console.log("Total Passed:", pass);
console.log("Total Failed:", fail);

//task 2.Shopping Cart Discount System
//Concept: Array of objects + for loop + conditions
let products = [
    {name: "Shirt", price: 600},
    {name: "Shoes", price: 1000},
    {name: "Bag", price: 300}
];
let total = 0;
for (let i = 0; i < products.length; i++) {
    let price = products[i].price;
    if (price >= 500) {
        price = price - 100;
    }
    total = total + price;
    console.log(products[i].name, price);
}
console.log("Total Amount:", total);

//task 3.ATM Withdrawal System
//Concept: while loop + if...else + arithmetic
let balance = 5000;
let withdraw = 1000;
while (withdraw > 0) {
    if (withdraw <= balance) {
        balance = balance - withdraw;
        console.log("Withdrawal Successful");
        console.log("Remaining Balance:", balance);
    }
    else {
        console.log("Insufficient Balance");
    }
    withdraw = 0;
}

//task 4.Product Stock Management
//Concept: Array of objects + for...of + if...else if
let products1 = [
    {name: "Shirt", stock: 10},
    {name: "Shoes", stock: 0},
    {name: "Bag", stock: 3}
];
for (let p of products1) {
    if (p.stock == 0) {
        console.log(p.name, "Out of Stock");
    }
    else if (p.stock < 5) {
        console.log(p.name, "Low Stock");
    }
    else {
        console.log(p.name, "Available");
    }

}

//task 5.Employee Salary Management
//Concept: Array of objects + for loop + if...else if
let employees = [
    {name: "Arun", salary: 30000},
    {name: "Priya", salary: 20000},
    {name: "Ravi", salary: 10000}
];
for (let i = 0; i < employees.length; i++) {
    let salary = employees[i].salary;
    if (salary >= 30000) {
        console.log(employees[i].name, "High Salary");
    }
    else if (salary >= 20000) {
        console.log(employees[i].name, "Medium Salary");
    }
    else {
        console.log(employees[i].name, "Low Salary");
    }

}

//task 6.Find the Factorial
//Concept: while loop + multiplication
let num = 5;
let fact = 1;
while (num > 0) {
    fact = fact * num;
    num--;
}
console.log("Factorial:", fact);

//task 7.Array + Loop + If Condition
//Find Even and Odd Numbers
let numbers = [10, 15, 20, 25, 30];
for (let num of numbers) {
    if (num % 2 == 0) {
        console.log(num, "Even");
    }
    else {
        console.log(num, "Odd");
    }
}

//task 8.Find Positive, Negative and Zero
let number1 = [10, -5, 0, 20, -8];
for (let num of number1) {
    if (num > 0) {
        console.log(num, "Positive");
    }
    else if (num < 0) {
        console.log(num, "Negative");
    }
    else {
        console.log(num, "Zero");
    }
}

//task 9.Calculate Total and Average
let marks = [10, 20, 30, 40, 50];
let sum = 0;
for (let mark of marks) {
    sum = sum + mark;
}
let average = sum / marks.length;
console.log("Total:", sum);
console.log("Average:", average);

//task 10.Find Largest and Smallest Number
let number2 = [10, 25, 5, 40, 15];
let largest = number2[0];
let smallest = number2[0];
for (let num of number2) {
    if (num > largest) {
        largest = num;
    }
    if (num < smallest) {
        smallest = num;
    }
}
console.log("Largest:", largest);
console.log("Smallest:", smallest);

//task 11.Count Numbers Divisible by 5
let number3= [10, 15, 22, 30, 17, 25];
let count = 0;
for (let num of number3) {
    if (num % 5 == 0) {
        console.log(num);
        count++;
    }
}
console.log("Total Count:", count);

//task 12.Array of Objects + Loop + Conditions
//Student Pass or Fail Management(Finally)
let student1 = [
    { name: "Arun", mark: 85 },
    { name: "Priya", mark: 25 },
    { name: "Kumar", mark: 65 },
    { name: "Divya", mark: 30 },
    { name: "Ravi", mark: 90 }
];
let pass1 = 0;
let fail1= 0;
for (let student of student1) {
    if (student.mark >= 35) {
        console.log(student.name, "Pass");
        pass1++;
    }
    else {
        console.log(student.name, "Fail");
        fail1++;
    }
}
console.log("Total Pass:", pass1);
console.log("Total Fail:", fail1);














