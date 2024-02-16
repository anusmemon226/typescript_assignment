var personName = "Muhammad Anus";
console.log("Uppercase : ".concat(personName.toUpperCase()));
console.log("Lowercase : ".concat(personName.toLowerCase()));
var titleCase = "";
var nameArray = personName.split(" ");
for (var i = 0; i < nameArray.length; i++) {
    titleCase += nameArray[i][0].toUpperCase() + nameArray[i].slice(1).toLowerCase() + " ";
}
console.log("Title Case : ".concat(titleCase));
