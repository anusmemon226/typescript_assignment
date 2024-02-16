function carInfo(manufacturer,model,{...args}){
    let carInfo = {
        "Manufacturer" : manufacturer,
        "Model" : model,
        "Color" : args.color,
        "Optional Feature" : args.optFeature
    }
    return carInfo
}
console.log(carInfo("Toyota",2019,{color:"red",optFeature:"sunroof"}))