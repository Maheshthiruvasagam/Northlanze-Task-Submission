/**
 * Northlanze Technologies - JavaScript Assessment
 * JavaScript ES6+

 * Run with:
 *   node solutions.js
 
 
 */

// =====================================================
// ARRAYS AND STRINGS
// =====================================================

// 1. Sort an array in ascending order without using sort()
function sortAscending(arr) {
    const numbers = [...arr];

    // Bubble sort: compare adjacent values and swap them when needed.
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    return numbers;
}

// 2. Count how many times each character appears in a string.
function charFrequency(str) {
    const frequency = {};

    for (const char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

// 3. Move all zeros to the end without changing the order of other values.
function moveZerosToEnd(arr) {
    const result = [];
    let zeroCount = 0;

    for (const value of arr) {
        if (value === 0) {
            zeroCount++;
        } else {
            result.push(value);
        }
    }

    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }

    return result;
}

// 4. Find common values and include each common value only once.
function findCommon(arr1, arr2) {
    const result = [];

    for (const value of arr1) {
        if (arr2.includes(value) && !result.includes(value)) {
            result.push(value);
        }
    }

    return result;
}

// 5. Calculate the total price of all items in the shopping cart.
function cartTotal(cart) {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

// 6. Group employees into arrays based on their department.
function groupByDepartment(employees) {
    const departments = {};

    for (const employee of employees) {
        const department = employee.department;

        if (!departments[department]) {
            departments[department] = [];
        }

        departments[department].push(employee);
    }

    return departments;
}

// =====================================================
// OBJECT-ORIENTED PROGRAMMING
// =====================================================

// 11. Employee class
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    calculateIncrement(percent) {
        const increment = this.salary * percent / 100;
        return this.salary + increment;
    }
}

// 12. Inheritance: Car and Bike inherit properties and methods from Vehicle.
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        return `${this.brand} ${this.model} is starting.`;
    }

    info() {
        return `${this.brand} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }

    info() {
        return `${super.info()} - Car with ${this.doors} doors`;
    }
}

class Bike extends Vehicle {
    constructor(brand, model, hasGear) {
        super(brand, model);
        this.hasGear = hasGear;
    }

    info() {
        const gearType = this.hasGear ? "Geared Bike" : "Gearless Bike";
        return `${super.info()} - ${gearType}`;
    }
}

// 13. Encapsulation: the balance is private and can only be changed by class methods.
class BankAccount {
    #balance;

    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Enter a valid deposit amount.");
        }

        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Enter a valid withdrawal amount.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

// 14. Polymorphism: each subclass provides its own implementation of area().
class Shape {
    area() {
        throw new Error("The area() method must be implemented by a subclass.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// =====================================================
// API INTEGRATION
// =====================================================

// 15. Fetch users from the API and handle network or HTTP errors.
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // fetch() does not reject for HTTP error status codes, so check response.ok.
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const users = await response.json();

        for (const user of users) {
            console.log(`${user.name} - ${user.email}`);
        }

        return users;
    } catch (error) {
        console.error("Unable to fetch users:", error.message);
        return [];
    }
}

// =====================================================
// TESTING THE SOLUTIONS
// =====================================================

async function main() {
    console.log("1. Sort Array");
    console.log(sortAscending([64, 25, 12, 22, 11, -3]));

    console.log("\n2. Character Frequency");
    console.log(charFrequency("hello world"));

    console.log("\n3. Move Zeros to End");
    console.log(moveZerosToEnd([0, 1, 0, 3, 12, 0, 5]));

    console.log("\n4. Common Elements");
    console.log(findCommon([1, 2, 3, 4, 5], [4, 5, 6, 7, 4]));

    console.log("\n5. Shopping Cart Total");
    const cart = [
        { name: "Keyboard", price: 1200, quantity: 1 },
        { name: "Mouse", price: 500, quantity: 2 },
        { name: "Cable", price: 150, quantity: 3 }
    ];
    console.log("Total:", cartTotal(cart));

    console.log("\n6. Group Employees by Department");
    const employees = [
        { name: "Asha", department: "IT" },
        { name: "Ravi", department: "HR" },
        { name: "Meena", department: "IT" }
    ];
    console.log(groupByDepartment(employees));

    console.log("\n11. Employee Details");
    const employee = new Employee(1, "Asha", "IT", 50000);
    console.log(employee.displayDetails());
    console.log("Salary after 10% increment:", employee.calculateIncrement(10));

    console.log("\n12. Vehicle Inheritance");
    const car = new Car("Toyota", "Camry", 4);
    const bike = new Bike("Yamaha", "R15", true);
    console.log(car.start());
    console.log(car.info());
    console.log(bike.start());
    console.log(bike.info());

    console.log("\n13. Bank Account");
    const account = new BankAccount("Mahesh", 1000);
    account.deposit(500);
    account.withdraw(300);
    console.log("Current balance:", account.getBalance());

    try {
        account.withdraw(5000);
    } catch (error) {
        console.log("Error:", error.message);
    }

    console.log("\n14. Polymorphism");
    const shapes = [new Circle(5), new Rectangle(4, 6)];

    for (const shape of shapes) {
        console.log(`${shape.constructor.name} area: ${shape.area().toFixed(2)}`);
    }

    console.log("\n15. Fetch Users from API");
    await fetchUsers();
}

main();
