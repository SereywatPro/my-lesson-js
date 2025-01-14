"use strict";

/* 10. Merging Arrays:
You have two arrays, one with basic user info and another with additional details: 

const basicInfo = ["Alice", "USA"];
const additionalInfo = ["Engineer", 25];

// Task: Merge the two arrays and destructure them into respective variables

*/
//Answer

const basicInfo = ["Alice", "USA"];
const additionalInfo = ["Engineer", 25];
const margeArray = basicInfo.concat(additionalInfo);
const [Name, country, job, age] = margeArray;
console.log(Name, country, job, age);

/* 1. Swapping Variables: */

let a = 5;
let b = 10;

// Task: Swap a and b using destructuring
[b, a] = [a, b];
console.log(`a: ${a}, b: ${b}`);

/* 5. Destructuring Arrays */

const colors = ["red", "green", "blue", "yellow"];

// Task: Use array destructuring to get the first three colors

const [r, g, bl] = colors;
console.log(r, g, bl);

/* 6. Destructuring in Functions */

function displayUserInfo({ name, age, country }) {
 return `Name: ${name}, Age: ${age}, Country: ${country}`;
}

// Task: Call this function with an object, and use destructuring inside the function
console.log(
  displayUserInfo({
    name: "Jonh Smith",
    age: 23,
    country: "Phnom Penh",
  })
);


/* 7. Destructuring in Loops */
const users = [
  ["John", "Admin"],
  ["Sarah", "Editor"],
  ["Mike", "Subscriber"]
];

// Task: Use destructuring to extract each user's name and role in a loop
const [[j, ad], [sa, e], [m, su]] = users;
// console.log(j, ad, sa, e, m, su);
users.forEach(([N,role],index) => {
    console.log(index+1,",Name: ", N, "Role: ", role);
})
    
/* for (let i of users) {
    console.log(i.slice(",").join(" "));
} */

/* 8. Destructuring with Rest */

const product = {
  nameP: "Smartphone",
  price: 999,
  brand: "TechCorp",
  specifications: {
    screen: "6.5 inches",
    battery: "4000mAh"
  }
};

// Task: Destructure the object to get `name`, `price`, and gather the rest of the properties into a `details` object
const { nameP, price, ...details } = product;
console.log(details);