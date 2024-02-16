// Function # 01
function capatilize(str){ // This Function will capatilize the given string
    let strArr = str.split(" ")
    let newStr = ""
    for(let i=0;i<strArr.length;i++){
        newStr += strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase() + " "
    }
    return newStr
}
console.log(capatilize("anas memon"))


// Function # 02
function reverseArray(arr){ // This Function will reverse the elements of Array
    for(let i=0;i<Math.floor(arr.length/2);i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = temp    
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5]))