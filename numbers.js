var num1 = 20;
console.log(typeof(num1));

var num2 = 10.34;
console.log(typeof (num2));

var sum = num1 + num2;
console.log(sum);

var diff = num2 - num1;
console.log(diff);

var mul = num1*num2;
console.log(mul);

var div = num2/num1;
console.log(div);

var divbyzero = sum / 0;
console.log(divbyzero);

var mulbystring = sum *B;
console.log(mulbystring) // this will not work because we are trying to multiply a string with number
console.log(typeof(mulbystring))