"use strict"
/* Master The this keyword 🫡🥲*/


/* 1. Managing a Library System*/

const book = {
    title: "1984",
    author: "George Orwell",
    getDetails: function () {
       return `Title: ${this.title} Author: ${this.author}`;
    },
};

console.log(book.getDetails());
const anotherBook = {
    title: "Brave New World", author: "Aldous Huxley"
};
console.log(book.getDetails.call(anotherBook));
/* 

The call method is used to execute getDetails in the context of anotherBook. The this inside getDetails now refers to anotherBook, so it correctly accesses the properties of anotherBook

*/

/*2. E-Commerce Product Management */
const product = {
    name: "Laptop",
    price: 1000,
    discount: 10,
    getPriceAfterDiscount: function () {
        const discountPrice = this.price - (this.discount * this.price)/100;
        console.log(`Price after discount: ${discountPrice}`);
    },
};

console.log(product.getPriceAfterDiscount());// output: underfine (because the function doesn't have return any value)



/* 3. Dynamic UI Updates  */

const counter = {
    count: 0,
    increment: function () {
        this.count++;
        return `Counter increment: ${this.count}`;
    },
    decrement: function () {
        this.count--;
        return `Counter descrement: ${this.count}`;
    }
}
console.log(counter.increment());
console.log(counter.decrement());

/* 4. DOM Event Listeners */

document.querySelectorAll(".btn").forEach( function(button) {
    button.addEventListener("click", function () {
        console.log(`Button Clicked: ${this.textContent}`);
    });
});

/* 5. Timer with this 
- Create a countdown timer
*/

const timer = {
    timeLeft: 10,
    start: function () {
        const intervalId = setInterval(() => {
            if (this.timeLeft > 0) {
                console.log(`Time left : ${this.timeLeft}`);
                this.timeLeft--;
            } else {
                console.log("Time finished!");
                clearInterval(intervalId);
            }
        }, 1000);
    },
};
timer.start();


/* 6. Object-Oriented Programming (OOP) */

class User {

    constructor(name, age) { // only have one constructor method in a class
        console.log(this)
        this.name = name;
        this.age = age;
    }
    getProfile() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);

    }
}
const user1 = new User("Hong Heng", 25);
const user2 = new User("Jonh smith", 30);

user1.getProfile();
user2.getProfile();


/* 7. API Callbacks */

const apiClient = {
  baseUrl: "https://jsonplaceholder.typicode.com",
  endPoint: "/users",
  fectData: function () {
    fetch(this.baseUrl + this.endPoint)
      .then((response) => response.json())
      .then((data) => console.log(`Data fetched: `, data))
      .catch((error) => console.error("Error fetching data", error));
  },
};
apiClient.fectData();


/* 8. Real-World Arrow Function Context */

const team = {
    members: ["a", "b", "c"],
    teamName: "Awesome ",
    introduce: function () {
        this.members.forEach(() => {
            console.log(`${this.members} is part of ${this.teamName}`);
        });
    }
};
team.introduce();

/* 9. Chaining Methods 
Use this to enable method chaining in a fluent API design.
*/

const Calculator = {
    value: 0,
    add: function (num) {
        this.value += num;
        return this;
    },
    subtract: function (num) {
        this.value -= num;
        return this;
    },
    multiply: function (num) {
        this.value *= num;
        return this;
    },
    getResult: function () {
        // return `Result after Calculator: ${this.value}`;
        console.log(`Result: ${this.value}`);
        return this;
    }
};


Calculator.add(90).subtract(20).getResult();

/* 10. Customizable Widgets */

function toggleWidge(name) {
    this.name = name;
    this.isOn = false;
    this.toggle = function (){
        this.isOn = !this.isOn;
        console.log(`${this.name} is now ${this.isOn ? "ON" : "OFF"}`);
    };
  }

const lightSwitch = new toggleWidge("Light Switch");
lightSwitch.toggle();
lightSwitch.toggle();



