// exe1

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(5));

// exe2
function arrIsEven(array) {
    for (let index = 0; index < array.length; index++) {
        !isEven(array[index]) ? console.log(array[index]) : null;
    }
}

let arr = [10, 2, 5, 7, 8, 9];
arrIsEven(arr);

// exe3
function checkExists(array, number) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === number)
            return true;
    }
    return false;
}

console.log(checkExists([1, 2, 3], 2));

console.log(checkExists([1, 2, 3], 5));


// exe4
calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    }
};

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42


// exe5
function increaseByNameLength(money, name) {
    return money * name.length;
}
function makeRegal(name) {
    return `His Royal Highness, ${name}`;
}
const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


// exe6
let sum = 0;
function Armstrong(number) {
    for (let index = 0; index < number.toString().split('').length; index++) {
        sum += Math.pow(number.toString().split('')[index], 3);
    }
    return sum === number;
}
console.log(Armstrong(153));


//Functions Galore
// exe2
function cleanText(story) {
    let cleaned = story.toUpperCase();
    story = story.split(",").join(" ")
    console.log(story);
    //for (let index = 0; index < specialChars.length; index++) 



}
function addToCounter() {

}
function countWords() {

}



const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}
cleanText(story) 
