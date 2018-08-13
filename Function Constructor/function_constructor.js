var john = {
    name : 'vivek',
    year : 1995,
    city : 'pune'
};
 var person = function(name,year,city) {
    this.name = name;
        this.year = year;
        this.city = city;
};
var sam = new person('sandip',1990,'latur');
console.log(sam);
var san = new person('gyanba',1995,'nanded');
console.log(san);
console.log(san.name);