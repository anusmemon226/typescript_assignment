function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("London", "United Kingdom"));
