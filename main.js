// 1 //
// Conditional //
var eatsPlants      = true;
var eatsAnimals     = true;

let food = eatsPlants == true && eatsAnimals == true ? "omnivore":
            eatsPlants != true && eatsAnimals == true  ? "carnivore":
            eatsPlants == true && eatsAnimals != true ? "herbivore":
            undefined;
// =========================================================================================================================================== //

// 2 //
// Musical Groups //
let musicians = 0;

if (musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1) {
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet")
} else {
    console.log("this is a large group");
};
// =========================================================================================================================================== //
// 3 //
// Murder mystery //

// =========================================================================================================================================== //
// 4 //
// Checking Your Balance //

var balance = -325;
var checkBalance = true;
var isActive = true;

if (checkBalance) {
    if (isActive) {
        console.log(balance);
    } else {
        console.log("Your Account is Not Active");
    };
} else {
    console.log("Sorry");
};

// =========================================================================================================================================== //
// 5 //
// Ice Cream //

let flavor      = "chocolate";
let vessel      = "cone";
let toppings    = "peanuts";

if (flavor == "vanilla" || flavor == "chocolate") {
    if (vessel == "cone" || vessel == bowl) {
        if (toppings == "sprinkles" || toppings == "peanuts") {
            console.log("I'd like two scoops of __________ ice cream in a __________ with __________.");
        } else {
            console.log("");
        }
    };
};