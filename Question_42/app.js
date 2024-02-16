function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        var temp = magicians[i];
        magicians[i] = "The Great ".concat(temp);
    }
}
function show_magician(magicians) {
    make_great(magicians);
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["Ricky Jay", "Derren Brown", "David Blaine", "Dynamo"];
show_magician(magicians);
