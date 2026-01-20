function calculator(number1, operation, number2) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    if (operation === "+")
        return `${number1}+${number2}=` + number1 + number2;
    else if (operation === "-")
        return `${number1}-${number2}=number1+number2`;
    else if (operation === "*")
        return `${number1}*${number2}=number1+number2`;
    else if (operation === "/") {
        if (number2 === 0) {
            return "Error: division by zero";
        }
        else {
            return `${number1}/${number2}=number1+number2`;
        }
    }
}


console.log(calculator(process.argv[2], process.argv[3], process.argv[4]));


//(+, -, *, /)