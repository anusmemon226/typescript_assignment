var personName = "\t\tMuhammad Anus\t";
console.log("Before (With White Space) : ".concat(personName));
console.log("After (Without White Space) : ".concat(personName.trim()));
for (var i = 0; i < personName.length; i++) {
    if (personName[i] == " ") {
        console.log("Space");
    }
}
