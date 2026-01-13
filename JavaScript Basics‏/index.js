// Variables, Identifiers and Operators
console.log((5 > 2) && false);
console.log(!("knife" === "sword"));
console.log((1 < 2) || (-1 > -1) || !false);
console.log("");
console.log((31 % 5) == "1");
console.log(!!true);
console.log("5th Avenue" != "5th Avenue");
console.log(52 !== "52");
console.log((undefined || null));

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a);

// Conditional Statements
// exe1
let age = 20;
if (age >= 18)
    console.log("enough to vote ");
else
    console.log("not enough to vote ");

// exe2
let score = 85;
if (score >= 90 && score <= 100)
    console.log("A");
else if (score >= 80 && score <= 89)
    console.log("B");
else if (score >= 70 && score <= 79)
    console.log("C");
else if (score >= 60 && score <= 69)
    console.log("D");
else
    console.log("F");

// exe3
let temperature = 20;
let weather = "sunny";
if (weather === "sunny" && temperature > 24)
    console.log("Go to the beach");
else if (weather === "sunny" && temperature >= 15 && temperature < 24)
    console.log("Go to the beach");
else if (weather === "sunny" && temperature < 15)
    console.log("Go to the beach");
else if (weather === "rainy" && temperature < 15)
    console.log("Watch a movie indoors");
else if (weather === "cloudy " && temperature > 21)
    console.log("Go hiking");
else if (weather === "cloudy " && temperature <= 21)
    console.log("Visit a museum");

// exe4
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

// if (usernameLength >= 5) {
//     if (passwordLength >= 8) {
//         if (userAge >= 13)
//             console.log("success");
//         else
//             console.log("User must be 13 or older");
//     }
//     else if (userAge >= 13)
//         console.log("Password must be at least 8 characters");
//     else
//         console.log("User must be 13 or older and Password must be at least 8 characters");
// }
// else if (passwordLength >= 8) {
//     if (userAge >= 13)
//         console.log("Username must be at least 5 characters");
//     else
//         console.log("Username must be at least 5 characters and User must be 13 or older ");
// }
// else if (userAge >= 13) 
//     console.log("Password must be at least 8 characters");
// else 
//     console.log("User must be 13 or older and Password must be at least 8 characters and Username must be at least 5 characters");


// if (usernameLength >= 5 && passwordLength >= 8 &&) {
//     if () {
//         if (userAge >= 13)
//             console.log("success");
//         else
//             console.log("User must be 13 or older");
//     }
//     else if (userAge >= 13)
//         console.log("Password must be at least 8 characters");
//     else
//         console.log("User must be 13 or older and Password must be at least 8 characters");
// }
// else if (passwordLength >= 8) {
//     if (userAge >= 13)
//         console.log("Username must be at least 5 characters");
//     else
//         console.log("Username must be at least 5 characters and User must be 13 or older ");
// }
// else if (userAge >= 13)
//     console.log("Password must be at least 8 characters");
// else
//     console.log("User must be 13 or older and Password must be at least 8 characters and Username must be at least 5 characters");


// exe5


// exe6
// let year = 1900;
// let year = 2000;
// let year = 2023;
let year = 2024;
if (((year % 400 == 0) && (year % 100 == 0) && (year % 4 == 0)) || ((year % 400 != 0) && (year % 100 != 0) && (year % 4 == 0)))
    console.log("leap");
else
    console.log("not leap");

// Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.splice(1, 2);
numbers[3] = 1;
numbers.splice(4);
numbers.unshift(0);
console.log(numbers);

// Objects
// exe1
let p1 = {
    name: "Mariah",
    age: "10",
    city: "dimona"
}
let p2 = {
    name: "esti",
    age: "10",
    city: "dimona"
}

if (p1.age === p2.age && p1.city === p2.city)
    console.log("Jill wanted to date Robert");
else if (p1.city != p2.city)
    console.log("Jill wanted to date Robert, but couldn't");


// exe2
let library = {
    books: [{
        title: "book1",
        name: "book_1"
    },
    {
        title: "book2",
        name: "book_2"
    },
    {
        title: "book3",
        name: "book_3"
    },
    {
        title: "book4",
        name: "book_4"
    },
    {
        title: "book5",
        name: "book_5"
    }
    ],
};

// exe3
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name_exe3 = 'Bob';// or 'Ted';
name_exe3.toLowerCase();
if (reservations[name_exe3]) {
    if (reservations[name_exe3].claimed === false) {
        console.log(`welcome, ${name_exe3}`);
        reservations[name_exe3].claimed = true;
    }
    else {
        console.log("someone already claimed this reservation");
    }
}
else {
    console.log("You have no reservation");
}
console.log(reservations[name_exe3].claimed);


// exe4
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const days = (date - `${kitchen.fridge.items[1].expiryDate}`);
const name_exe4 = `${kitchen.fridge.items[1].name}`;
const price_exe4 = `${kitchen.fridge.price}` / 2;

if (kitchen.hasOven && kitchen.fridge.works)
    console.log(`${kitchen.owner} ${name_exe4} expired ${days} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${name_exe4} in.`);
else if (!kitchen.hasOven && kitchen.fridge.works)
    console.log(`${kitchen.owner} ${name_exe4} expired ${days} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${name_exe4} in`);
else if (kitchen.hasOven && !kitchen.fridge.works)
    console.log(`${kitchen.owner} ${name_exe4} expired ${days} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${name_exe4} in. And she'll have to pay ${price_exe4} to fix the fridge.`);
else if (!kitchen.hasOven && !kitchen.fridge.works)
    console.log(`${kitchen.owner} ${name_exe4} expired ${days} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${name_exe4} in. And she'll have to pay ${price_exe4} to fix the fridge.`);

//  Loops
// exe1
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for (let index = 0; index < names.length; index++) {
    people.push({
        "name": names[index],
        "age": ages[index]
    });
}
console.log(people);


// exe2
for (let value of people) {
    console.log(`${value.name} is ${value.age} years old`);
}

// exe3
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]
for (let value of posts) {
    if (`${value.id}` == 2)
        posts.splice(`${value.id}` - 1, 1);
}
console.log(posts);

// exe4
const posts_exe4 = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

for (let value of posts_exe4) {
    if (`${value.id}` == 2)
        for (let comment of value.comments) {
            if (`${comment.id}` == 3)
                value.comments.splice(`${comment.id}` - 1, 1);
        }
}
console.log(posts_exe4);

// exe5
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (let index = 0; index < Object.keys(dictionary).length; index++) {
    console.log(`Words that begin with ${Object.keys(dictionary)[index]}:`);
    for (let j = 0; j < Object.values(dictionary)[index].length; j++) {
        console.log(Object.values(dictionary)[index][j]);
    }
}





