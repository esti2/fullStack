function add(num) {
    function add2(num2) {
        return num + num2;
    }
    return add2;
}




console.log(add(5)(2));
console.log(add(5)(5));