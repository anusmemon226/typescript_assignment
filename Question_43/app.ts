function make_great(magicians){
    let greatMagicians = [""]
    for(let i=0;i<magicians.length;i++){
        greatMagicians[i] = `The Great ${magicians[i]}`
    }
    return greatMagicians
}
function show_magician(magicians){
    let greatMagicians = make_great(magicians)
    console.log("Array of Original Names : ")
    for(let magician of magicians){
        console.log(magician)
    }
    console.log("Array of Great Added : ")
    for(let magician of greatMagicians){
        console.log(magician)
    }
}
let magicians = ["Ricky Jay","Derren Brown","David Blaine","Dynamo"]
show_magician(magicians)