function make_great(magicians){
    for(let i=0;i<magicians.length;i++){
        let temp = magicians[i]
        magicians[i] = `The Great ${temp}`
    }
}
function show_magician(magicians){
    make_great(magicians)
    for(let magician of magicians){
        console.log(magician)
    }
}
let magicians = ["Ricky Jay","Derren Brown","David Blaine","Dynamo"]
show_magician(magicians)