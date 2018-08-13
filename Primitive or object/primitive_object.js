// primitive
// primitive data types are immutable means once you create you can not change it

var name = 'sanju';
console.log(name);

var second = name;
console.log(second);

name = 'vivek';
console.log(second);// sanju 

// objects or non primitive are mutable , it can be change

var person =
    {
        name : 'vivek',
        year : 1995,
        city : 'pune'
    };
console.log(person);

var sam = person;
console.log(sam);
person.name = 'sanju';
console.log(sam);
