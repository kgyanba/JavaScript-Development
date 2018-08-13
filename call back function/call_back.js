//call back function
// the function we passed as an argument to another function means call back function.

function cde() {
 return 'hello';

};
function xyz(zyx, name) {
    console.log(zyx() + name);
}
xyz(cde,' Ramrao');
console.log(xyz);

// example return function
// A function that return a function is called higher-order function

function person() {
    return function () {
        console.log('hello friend');
    }
};
// Now, we need to invoke person function and its returned Anonymous Function. To do so, we have two ways:
// by using double parenthesis

person()();

// by using variable

 var john =person();
 john();

