// exe1
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}
function pushPull(arg) {
    arg();
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

// exe2
const returnTime = function (time) {
    time = new Date();
    console.log('The current time is: ' + time)
}

function getTime(func) {
    func();
}

getTime(returnTime);


// exe3
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};
logData = console.log;
displayData(console.error, logData, "I like to party")


// exe4
const sum = (a, b, c) => (a + b + c)

console.log(sum(1, 2, 3));

// exe5
const capitalize = (param) => param[0].toUpperCase() + param.substring(1).toLowerCase();
console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
capitalize("feliSHIA") // returns Felishia


// exe6
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = (temp) => ("It's " + determineWeather(temp));

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"
