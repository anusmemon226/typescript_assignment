function make_great(magicians) {
    var greatMagicians = [""];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians[i] = "The Great ".concat(magicians[i]);
    }
    return greatMagicians;
}
function show_magician(magicians) {
    var greatMagicians = make_great(magicians);
    console.log("Array of Original Names : ");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
    console.log("Array of Great Added : ");
    for (var _a = 0, greatMagicians_1 = greatMagicians; _a < greatMagicians_1.length; _a++) {
        var magician = greatMagicians_1[_a];
        console.log(magician);
    }
}
var magicians = ["Ricky Jay", "Derren Brown", "David Blaine", "Dynamo"];
show_magician(magicians);
