// Below Function will capatilize the given string
function capatilize(str) {
    var strArr = str.split(" ");
    var newStr = "";
    for (var i = 0; i < strArr.length; i++) {
        newStr += strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase() + " ";
    }
    return newStr;
}
console.log(capatilize("anas memon"));
// Below Function will reverse the elements of Array
function reverseArray(arr) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
