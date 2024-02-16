let usernames = ["anasmemon226","johnsmith","admin","friskies","smarty123"]
for(let user of usernames){
    if(user == "admin"){
        console.log(`Hello admin, would you like to see a status report?`)
    }else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}