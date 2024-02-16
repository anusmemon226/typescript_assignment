function make_shirt(size, message) {
    if (size.toLowerCase() == "large" || size.toLowerCase() == "medium") {
        console.log("Size of shirt : ".concat(size, "\nMessage : I Love Typescript"));
    }
    else {
        console.log("Size of shirt : ".concat(size, "\nMessage : ").concat(message));
    }
}
make_shirt("medium", "Think Positive Do Your Best");
