// call example
function xyz(arg1,arg2) {
    console.log(this.name);

}
name = 'sanju';
xyz.call({
    name:'gyanba'},"angular js","bootstrap");
//xyz.call();
//apply example
function abc(arg3, arg4) {
    console.log(this.name)
};
abc.apply({name:'ram'},["ravi","sonu"]);

// call method example

var person = {
    fullname: function () {
        console.log(this.firstname,this.lastname);
    }
};
firstname = 'atul';
lastname = 'kadam';
person.fullname.call();// this will print atul kadam

person1 = {
    firstname: 'gyanba',
    lastname: 'kadam'
};
person2 ={
    firstname: 'vivek',
    lastname: 'tokalwad'
};
person.fullname.call(person1); // expected output gyanba kadam
person.fullname.call(person2); // expected output vivek tokalwad

// bind method example

var person3 ={
    fullname : function () {
        console.log(this.firstname,this.lastname)
    }
};

var person4 = person3.fullname.bind({firstname:'sham',lastname:'kadam'});
person4();