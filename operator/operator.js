// Assignment operator
var a = 10;
console.log(" a is :" +a);

// Arithmatic operator
var b = 20;
var c = 30;
var d = a + b;
console.log("value of d is :" +d);

var d = c- b;
console.log(" value of d is :" +d);

var d = c*b;
console.log(" value of d is :" +d);

var d = c / b;
console.log(" value of d is :" +d);

// short hand math += , -=

var n = 10;
var m = 20;
var add = 0;
add = add + (m + n);
add += (m + n);
console.log(add);

var d = 20;
var e = 30;
var add = add - (d - e);
add -= add -(d -e);
console.log(add);

// conditional operator <, >, <=, >=
 var age = 18;
 if(age < 18)
 {
     console.log(" you are minor");
 }
 else
 {
     console.log(" you are major");
 }

 // unary operator ++,--
 var x =10;
 x = x+1;
 x += 1;
 x++;
 console.log(x);

 var x =12;
 x = x-1;
 x -= 1;
 x--;
 console.log(x);

 //logical operator
 var k = 12;
 var j = 13;
 var l = 14;
 if(k < j && k > l)
 {
    console.log(" k is greater");
 }
 else
 {
     console.log(" k is less");
 }

 // Ternary operator
var age = 25;
 (age>18) ? console.log(" you are major") : console.log(" you are minor");