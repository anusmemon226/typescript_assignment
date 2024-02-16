var animals = ["Dog", "Cat", "Parrot"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// modified
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Dog":
            console.log("A ".concat(animal, " would make a great pet"));
            break;
        case "Cat":
            console.log("".concat(animal, " are friendly and playful pet"));
            break;
        case "Parrot":
            console.log("".concat(animal, " are colorful and intelligent bird"));
            break;
        default:
            console.log("Invalid Input");
    }
}
console.log("Any of these animals would make a great pet !");
