var dollar = 28.92;
var euro = 36.04;

var numberOfDollars = +prompt("Input number of dollars", )
while(isNaN(numberOfDollars) || numberOfDollars < 0.01 ){
    alert("You are insert the incorect number. Please input number that are more then a 0 .");
    numberOfDollars = parseFloat(prompt("Input number of dollars",))
}

var numberOfEuroes = prompt("Input number of euros", )
numberOfEuroes = parseFloat(numberOfEuroes);
while(isNaN(numberOfEuroes) || numberOfEuroes < 0.01 ){
    alert("You are insert the incorect number. Please input number that are more then a 0 .");
    numberOfEuroes = parseFloat(prompt("Input number of dollars",))
}

function convertorUSDtoUAH(){
    return dollar * numberOfDollars;
}

function convertorEURtoUAH(){
    return euro * numberOfEuroes;
}

alert(numberOfEuroes + " euros are equal " + convertorEURtoUAH() + ", " 
+ numberOfDollars + " dollars are equal " + convertorUSDtoUAH()
+ ", one euro is equal " + (euro/dollar) + " dollars.");