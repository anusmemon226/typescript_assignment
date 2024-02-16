let guestList = ["Mr Ahmed","Mr Shahid Afridi","Mr Imran Khan"]
for(let i=0;i<guestList.length;i++){
    console.log(`${guestList[i]}! you are invited for dinner at my farm house.`)
}
console.log(`${guestList[0]} can't come for dinner`)
guestList[0] = "Mr Irfan"
console.log("Second Set of invitation messages")
for(let i=0;i<guestList.length;i++){
    console.log(`${guestList[i]}! you are invited for dinner at my farm house.`)
}
console.log("Hi all the guest! Hope you will be fine. Actually i found a bigger dinner table")
guestList.unshift("Mr Ahsan Khan")
guestList.splice(2,0,"Mr Sarfaraz Ahmed")
for(let i=0;i<guestList.length;i++){
    console.log(`${guestList[i]}! you are invited for dinner at my farm house.`)
}