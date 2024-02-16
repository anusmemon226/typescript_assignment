// before error
var arr = [11, 23, 45, 33, 9];
var error = arr[arr.length];
if (error == undefined) {
    console.log("Array Error Occured");
}
else {
    console.log("No Error");
}
// after error
var arr1 = [11, 23, 45, 33, 9];
var error1 = arr1[1];
if (error1 == undefined) {
    console.log("Array Error Occured");
}
else {
    console.log("No Error");
}
