//exe2

let myList = [{ x: 4, y: 6 }, { x: 2, y: 8 }];
myList[0].x = 6;
delete myList[1];
console.log(myList);

//exe3
let myList2 = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
myList.push(myList2);
console.log(myList);