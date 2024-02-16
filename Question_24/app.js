// Test for equality of string
var str1 = "Pakistan Zindabad";
if (str1 == "Pakistan Zindabad") {
    console.log(true);
}
else {
    console.log(false);
}
// Test for inequality of string
var str2 = "Pakistan Zindabad";
if (str2 != "Pakistan Zindabad") {
    console.log(true);
}
else {
    console.log(false);
}
// Test using lower case function 
var str3 = "Pakistan Zindabad";
if (str3 == str3.toLowerCase()) {
    console.log(true);
}
else {
    console.log(false);
}
var str4 = "pakistan zindabad";
if (str4 == str4.toLowerCase()) {
    console.log(true);
}
else {
    console.log(false);
}
// Numerical test for equality 
if (10 == 10) {
    console.log(true);
}
else {
    console.log(false);
}
// Numerical test for inequality 
if (10 != 10) {
    console.log(true);
}
else {
    console.log(false);
}
// Numerical test for greater than 
if (10 > 30) {
    console.log(true);
}
else {
    console.log(false);
}
if (40 > 30) {
    console.log(true);
}
else {
    console.log(false);
}
// Numerical test for less than 
if (10 < 30) {
    console.log(true);
}
else {
    console.log(false);
}
if (30 < 10) {
    console.log(true);
}
else {
    console.log(false);
}
// Numerical test for less than and equal 
if (10 <= 30) {
    console.log(true);
}
else {
    console.log(false);
}
if (30 <= 30) {
    console.log(true);
}
else {
    console.log(false);
}
// Numerical test for greater than and equal 
if (30 >= 30) {
    console.log(true);
}
else {
    console.log(false);
}
if (10 >= 30) {
    console.log(true);
}
else {
    console.log(false);
}
// Test using "and" operator
if (10 == 10 && 20 == 20) {
    console.log(true);
}
else {
    console.log(false);
}
if (10 == 10 && 20 != 20) {
    console.log(true);
}
else {
    console.log(false);
}
// Test using "or" operator
if (10 == 10 || 20 == 20) {
    console.log(true);
}
else {
    console.log(false);
}
if (10 == 10 || 20 != 20) {
    console.log(true);
}
else {
    console.log(false);
}
// Test whether an item is in array 
var arr1 = [1, 2, 3, 4, 5, 6];
if (arr1.includes(4)) {
    console.log(true);
}
else {
    console.log(false);
}
// Test whether an item is not in array 
var arr2 = [1, 2, 3, 4, 5, 6];
if (arr1.includes(14)) {
    console.log(true);
}
else {
    console.log(false);
}
