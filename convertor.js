var dollar = 28.92;
var euro = 36.04;

var numberOfDollars = +prompt("Input number of dollars", )
var numberOfEuroes = prompt("Input number of euros", )

numberOfEuroes = parseFloat(numberOfEuroes);

function convertorUSDtoUAH(){
    while(isNaN(numberofDollars) || numberOfDollars < 0.01 ){
        alert("You are insert the incorect number. Please input number that are more then a 0 .");
        numberOfDollars = parseFloat(prompt("Input number of dollars",))
    }
    var USDtoUAH = dollar * numberOfDollars;
    return USDtoUAH;
    // if(!isNaN(numberOfDollars)){
    // var USDtoUAH = dollar * numberOfDollars;
    // return USDtoUAH;
    // }
    // else{
    //     alert("number of dollars are not a number");
    // }
}

function convertorEURtoUAH(){
    while(isNaN(numberOfEuroes) || numberOfEuroes < 0.01 ){
        alert("You are insert the incorect number. Please input number that are more then a 0 .");
        numberOfEuroes = parseFloat(prompt("Input number of dollars",))
    }
    var EURtoUAH = dollar * numberOfEuroes;
    return EURtoUAH;
    // if(typeof(numberOfDollars)=="number"){
    //     var EURtoUAH = euro * numberOfEuroes;
    //     return EURtoUAH;
    // }
    // else{
    //     alert("number of euroes are not a number");
    // }
}

alert(numberOfEuroes + " euros are equal " + convertorEURtoUAH() + ", " 
+ numberOfDollars + " dollars are equal " + convertorUSDtoUAH()
+ ", one euro is equal " + (euro/dollar) + " dollars.");