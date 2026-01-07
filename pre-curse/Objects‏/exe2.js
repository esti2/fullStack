let myList = [{ x: 4, y: 6 }, { x: 2, y: 8 }];
myList[0].x = 6;
delete myList[1];
console.log(myList);