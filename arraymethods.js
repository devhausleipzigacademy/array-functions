// --------------- Javascript -------------- //
// ------------- Array Methods ------------- //
// --------------- Exercises --------------- //

// In all of the following exercises, you should use
// the array functions: .map(), .filter() or .reduce()

// ------------- Task 1: SUPERMARKET ------------- //

// Given is an array with products of your supermarket
let store = [
    { product: 'apple', price: 0.54 },
    { product: 'banana', price: 0.12  },
    { product: 'hummus', price: 1.99  },
    { product: 'cheese', price: 2.49  },
    { product: 'bread', price: 0.99  },
  ];

// 1.1. Create a new array called 'products'
// that contains only the product names

// YOUR SOLUTION //

// 1.2. Create a new array called 'cheapItems'
// that contains only the products with a price below 1.00 Euro

// YOUR SOLUTION //

// 1.3. Calculate how much it would cost to buy one of each items
// Save the result in a variable called 'price'
// Round the result to two decimal points

// YOUR SOLUTION //


// ------------- Task 2: TASK FORCE ------------- //

// Given is an array with people in your task force
let team = [
  { id: 12432, name: 'General Heine', department: "Cyber Security", year: 4},
  { id: 12453, name: 'Commander Speck', department: "International", year: 14},
  { id: 45743, name: 'Junior Schmidt', department: "International", year: 1},
  { id: 88543, name: 'General Huston', department: "Cyber Security", year: 8},
  { id: 34423, name: 'Junior Salvador', department: "Cyber Security", year: 2},
  { id: 22344, name: 'General Mint', department: "Good Times", year: 12},
];

// 2.1. Create a new array called 'cyberSecurityIDs'
// that contains only the IDs of the people in the department Cyber Security

// YOUR SOLUTION //

// 2.2. Create a new array called 'generals'
// that contains only the IDs of the people who are Generals

// YOUR SOLUTION //

// 2.3. Sum up the years of experience that the people in the department "International" have
// Save the result in a variable called "experience"

// YOUR SOLUTION //


// ------------- TESTING ------------- //

let task = 1;
let subtask = 1;
// Task 1.1
try {
  if (products.length == 5 && products.includes("apple")) {
    console.log("\x1b[32m", "[Task 1.1] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 1.1] Failed", "\x1b[0m");
  }
  subtask++;
  
  // Task 1.2
  if (cheapItems.length == 3 && typeof cheapItems[0] === "object") {
    console.log("\x1b[32m", "[Task 1.2] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 1.2] Failed", "\x1b[0m");
  }
  subtask++;
  
  // Task 1.3
  if (price == 6.13) {
    console.log("\x1b[32m", "[Task 1.3] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 1.3] Failed", "\x1b[0m");
  }
  subtask++;
  subtask = 1;
  task++;
  // Task 2.1
  if (cyberSecurityIDs.length == 3 && cyberSecurityIDs.includes(12432)) {
    console.log("\x1b[32m", "[Task 2.1] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 2.1] Failed", "\x1b[0m");
  }
  subtask++;
  
  // Task 2.2
  if (generals.length == 3 && generals.includes(22344)) {
    console.log("\x1b[32m", "[Task 2.2] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 2.2] Failed", "\x1b[0m");
  }
  subtask++;
  
  // Task 2.3
  if (experience == 15) {
    console.log("\x1b[32m", "[Task 2.3] Passed", "\x1b[0m");
  } else {
    console.error("\x1b[31m", "[Task 2.3] Failed", "\x1b[0m");
  }
  subtask++;

} catch {
  console.error("\x1b[31m", `[Task ${task}.${subtask}] Failed`, "\x1b[0m");
}
