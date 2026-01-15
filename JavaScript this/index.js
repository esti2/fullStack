
// exe1

const person = {
    hungry: true,

    feed: function () {
        if (this.hungry) {
            hungry = false;
            console.log('Im no longer hungry!')
        }
    }
}

person.feed() //should log "I'm no longer hungry"

// exe2
const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
    car1: {
        name: 'Audi',
        liters: 3,
        fillTank: pump
    },
    car2: {
        name: 'Mercedes',
        liters: 1,
        fillTank: pump
    }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

// exe3
const pumpFuel = function (plane) {
    plane.fuel += 1;
};

const airplane = {
    fly: function () {
        if (this.fuel < 2) {
            return 'on the ground!';
        }
        else {
            return 'flying!';
        }
    }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());

