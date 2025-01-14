"use strict"


/* 1. Destructuring for UI Component States */

const appState = {
  user: {
    nameAs: "Alice",
    ageAs: 30,
    locationAs: "New York"
  },
  tasks: [
    { id: 1, title: "Do laundry", completed: false },
    { id: 2, title: "Complete project", completed: true }
  ]
};

// Task: Destructure the user’s name, age, and first task title and status

const { user: { nameAs, ageAs }, tasks: [{ title, completed }] } = appState;
console.log(nameAs, ageAs, "\n", title, completed);

/* 2. API Data Destructuring for Table Rendering */
const apiResponse = {
  meta: {
    totalCount: 100,
    pageCount: 10
  },
  data: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ]
};

// Task: Use destructuring to extract the `data` array and the `totalCount` from the `meta` object
const { meta: { totalCount }, data } = apiResponse;
console.log(totalCount, data);


