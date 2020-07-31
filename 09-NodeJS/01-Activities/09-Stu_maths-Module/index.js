var maths = require("./maths.js");

var num1 = parseInt(rocess.argv[3]);
console.log(num1);

var num2 = parseInt(process.argv[4]);
console.log(num2);

var operator = process.argv[];
console.log(operator);

if(operator != "+" && operator!= "-" && operator != "/" && operator != "*"){

}

switch(operator){
    case "sum":
        console.log(maths.add(num1, num2));
        break;
    case "difference":
        console.log(maths.sub(num1, num2));
        break;
    case "product":
        console.log(maths.multiply(num1, num2));
        break;
        
        
}