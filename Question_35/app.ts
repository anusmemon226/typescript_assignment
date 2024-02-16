let animals = ["Dog","Cat","Parrot"]
for(let animal of animals){
    console.log(animal)
}

// modified
for(let animal of animals){
    switch(animal){
        case "Dog":
            console.log(`A ${animal} would make a great pet`)
        break
        case "Cat":
            console.log(`${animal} are friendly and playful pet`)
        break
        case "Parrot":
            console.log(`${animal} are colorful and intelligent bird`)
        break
        default:
            console.log("Invalid Input")
    }
}

console.log("Any of these animals would make a great pet !")