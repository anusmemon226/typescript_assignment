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
console.log("My new dinner table won't arrive in time for dinner and i can only invite two peoples for dinner")
for(let i=guestList.length-1;i>1;i--){
    console.log(`${guestList[i]} i am sorry i can't invite them to dinner`)
    guestList.pop()
}
for(let i=guestList.length-1;i>=0;i--){
    console.log(`${guestList[i]} you are still invited`)
    guestList.pop()
}
console.log(guestList)