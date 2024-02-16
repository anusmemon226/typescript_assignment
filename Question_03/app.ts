let personName = "Muhammad Anus"
console.log(`Uppercase : ${personName.toUpperCase()}`)
console.log(`Lowercase : ${personName.toLowerCase()}`)
let titleCase = ""
let nameArray = personName.split(" ")
for(let i=0;i<nameArray.length;i++){
    titleCase += nameArray[i][0].toUpperCase()+nameArray[i].slice(1).toLowerCase()+" "
}
console.log(`Title Case : ${titleCase}`)