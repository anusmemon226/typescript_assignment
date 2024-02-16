function make_sandwich(items) {
    console.log("Summary of Ordered Sandwich");
    if (items.length != 0) {
        var count = 1;
        console.log("Sandwich must have following items : ");
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            console.log(count + " : " + item);
            count++;
        }
    }
}
make_sandwich(["Sauce", "Cheese", "Chicken"]);
make_sandwich(["Tomato", "Mayo", "Chicken"]);
make_sandwich(["Lettuce", "Cheese", "Beef"]);
