const age = 45,
isFemale = true, 
driverStatus = "bob",
younAdult = "discount",
firstName = "Luuk",
totalAmount = 105


let ageMsg = "Please stay outside",
paymentMsg = "Please pay in full",
transportMsg = "Must call cab",
allAgeMsg = "No discount",
festiveMsg = "No free beer",
anniversaryBillMsg = "No free stuff" 

if (age >= 18) {
    ageMsg = "You are welcome";
}
    console.log (ageMsg);


if (isFemale) {
    paymentMsg = "Get your tickets free";
}
    console.log (paymentMsg);


if (driverStatus==="bob") {
    transportMsg = "Allowed to drive";
}
    console.log (transportMsg);

if (age >= 18 && age <= 25) {
    allAgeMsg = "You get 50% off";
}    
    console.log (allAgeMsg);

if (firstName === "Sarah || Bram") {
    festiveMsg = "You get free beer";
}
    console.log (festiveMsg);

if (totalAmount > 25) {
    anniversaryBillMsg = "Free portion bitterballen";
}
if (totalAmount > 50) {
    anniversaryBillMsg = "Free portion of nachos";
}
if (totalAmount > 100) {
    anniversaryBillMsg = "Free bottle of Champagne";
}   
    console.log (anniversaryBillMsg);

/*
const myAge = 20;

let ageMsg = "you aint coming!"

if (myAge >= 18 && myAge <= 30) {
    ageMsg = "You are welcome";
} 
console.log (ageMsg);
*/

/*
//omgekeerd
const myAge = 20;

let ageMsg = "You are welcome"

if (myAge < 18 || myAge > 30) {
    ageMsg = "you aint coming!";
} 
console.log (ageMsg);
*/

/*
//omgekeerd met extra exit voor 25
const myAge = 25;

let ageMsg = "You are welcome"

if (myAge < 18 || myAge > 30 || myAge === 25) {
    ageMsg = "you aint coming!";
} 
console.log (ageMsg);
*/
