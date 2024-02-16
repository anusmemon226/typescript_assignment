function make_sandwich(items){
    console.log("Summary of Ordered Sandwich")
    if(items.length!=0){
        let count = 1
        console.log(`Sandwich must have following items : `)
        for(let item of items){
            console.log(count+" : "+item)
            count++
        }
    }
}
make_sandwich(["Sauce","Cheese","Chicken"])
make_sandwich(["Tomato","Mayo","Chicken"])
make_sandwich(["Lettuce","Cheese","Beef"])