// Working with Question no 15 solution

let guestList = ["Mr Ahmed","Mr Shahid Afridi","Mr Imran Khan"]
for(let i=0;i<guestList.length;i++){
    console.log(`${guestList[i]}! you are invited for dinner at my farm house.`)
}
console.log("Invited Peoples Count : ",guestList.length)
console.log(`${guestList[0]} can't come for dinner`)
guestList[0] = "Mr Irfan"
console.log("Second Set of invitation messages")
for(let i=0;i<guestList.length;i++){
    console.log(`${guestList[i]}! you are invited for dinner at my farm house.`)
}
console.log("Invited Peoples Count after Second set of Invitation: ",guestList.length)