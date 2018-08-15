// Filter method example
var array = [23,43,12,4,5,2,11];
 var result = array.filter(function (values) {
    return values>=10;
})
console.log(result);

 // another example

var words = ['hello how','hi','ramr','chandrao'];
var output = words.filter(function (values) {
    return values.length>=6;
})
console.log(output);// expected output is hello how and chandrao
