var current_users = ["anasmemon226", "johnsmith", "admin", "friskies", "smarty123"];
var new_users = ["johnsmith", "mario321", "anasmemon226", "ahmedraza", "ubiraza"];
var flag = false;
for (var i = 0; i < new_users.length; i++) {
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toUpperCase() == current_users[j].toUpperCase()) {
            console.log(new_users[i], "this person will need to enter a new username");
            flag = true;
            break;
        }
        else {
            flag = false;
        }
    }
    if (flag == false) {
        console.log(new_users[i], "this username is available");
    }
}
