let myList = [{ x: 4, y: 6 }, { x: 2, y: 8 }];

let books = [{
    title: "1", name: "11"
},
{
    title: "2", name: "22"
}]
let library = { books: books };
myList.push(library);
console.log(myList);