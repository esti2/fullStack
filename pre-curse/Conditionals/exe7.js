let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if ((currentYear - yearOfTeslaPurchase) >= 4)
        console.log("Is the customer interested in upgrading the car?")
    else
        console.log("Is the customer satisfied with the car?");
}
else if (boughtTesla && !isUSCitizen)
    console.log("Is the client interested in moving to the United States?");
else
    console.log("Is the customer interested in buying a Tesla?")