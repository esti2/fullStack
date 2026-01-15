class UniqueArray {
    constructor() {
        this.itemArr = []
        this.itemSet = new Set();
    }

    showAll() {
        console.log(this.itemArr)
    }


    add(item) {
        if (this.itemArr.length === 0) {
            this.itemSet.add(item);
            this.itemArr.push(item);
            return;
        }

        for (let index = 0; index < this.itemArr.length; index++) {
            if (JSON.stringify(this.itemArr[index]) === JSON.stringify(item)) {
                return;
            }
        }
        //if (JSON.stringify(item) === JSON.stringify(this.itemSet(item))){
        // if (this.itemSet.has(item)) 

        this.itemSet.add(item);
        this.itemArr.push(item);
    }

    exists(item) {
        for (let index = 0; index < this.itemArr.length; index++) {
            if (JSON.stringify(this.itemArr[index]) === JSON.stringify(item)) {
                return true;
            }
        }
        return -1;
    }




    get(index) {
        if (index > 0 && index <= this.itemArr.length)
            return this.itemArr[index];
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"


// exe2
//let a = { "a": a, "b": b };


//return {x: 3} === {x: 3}
uniqueStuff.add({ toy: "w", b: "b" })
uniqueStuff.add({ toy: "w", b: "b" })
uniqueStuff.showAll()