 // Map method example
// it create a new array with the result of calling function of every element in array
 var input = [10,20,3];
var result = input.map(function (values) {
    return values * 3;
});
console.log(result);
console.log(input);// original array is not going to be changed

 // join method
 // join is used to join the element of an array into string and return string.
 var array = ['sam','vivek','ram'];
 var xyz = array.join();
 console.log(xyz);
 console.log(array);
