// object.create method
var person ={
    calculateage: function () {
        console.log(2018 - this.year)
    }
};
var sam = Object.create(person);
sam.name = 'gyanba';
console.log(sam);
sam.year = 1995;
console.log(sam);
sam.calculateage();

// another method

var sanju = Object.create(person,{
    name : {value: 'john'},
    year: {value:1996}
})
sanju.calculateage();
console.log(sanju);

// another example

var abc= {
    name : 'vivek',
    year : 1994
};

var xyz = Object.create(abc);
xyz.name = 'vivek';
console.log(abc);
console.log(xyz);


