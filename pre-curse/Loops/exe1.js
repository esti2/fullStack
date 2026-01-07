//exe1
let names = ["esti", "mor", "moshe"];
let ages = [10, 12, 20];

for (let i = 0; i < names.length; i++)
    console.log(names[i] + " is " + ages[i] + " years old");

//exe2 
let numbers = [11, 12, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];
console.log(sum);

//exe3
let sumForAvg = 0;
for (let i = 0; i < numbers.length; i++)
    sumForAvg += numbers[i];
console.log(sumForAvg / (numbers.length));

//exe4
let nums = [];
let i = 0;
while (i < 100) {
    i++;
    nums.push(i);
}
console.log(nums);

//exe5
for (let i = 0; i < nums.length; i++)
    if (nums[i] % 2 == 0)
        console.log(nums[i]);

//exe6
let nums6 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for (let i = 0; i < nums6.length; i++)
    if (nums6[i] === 709)
        console.log(i);

//exe7
const names7 = ["Ashley", "Donovan", "Lucas"]
const ages7 = [23, 47, 18]
const people = []
for (let i = 0; i < names7.length; i++)
    people.push({ name: names7[i], age: ages7[i] });
console.log(people);


//exe8
for (let people8 of people) {
    console.log(people8["name"] + " is " + people8["age"] + " years old");
}

//exe9
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]
for (let postIndex in posts) {
    if (posts[postIndex]["text"] === "This is the worst. DON'T BUY!")
        posts.splice(postIndex, 1)
}
console.log(posts);

//exe10
const posts10 = [
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

for (let postIndex in posts10) {
    if (postIndex == 1)
        for (let postIndex2 in posts10[postIndex]) {
            if (posts10[postIndex]["comments"][2]["id"] == 3) {
                posts10[postIndex]["comments"].splice(2, 1)
                break;
            }
        }
}
console.log(posts10);
