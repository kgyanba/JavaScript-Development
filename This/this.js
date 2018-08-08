 /*
  var calculateAge = function (year) {
    console.log(2018 - year);
    console.log(this);

}
calculateAge(1995);
*/

 var john = {
     name : 'vivek',
     year : 1990,
     calculateAge : function (year) {
         console.log(this);
         console.log(2018- this.year);

     }
 }
 john.calculateAge();

 var sandip = {
     name : 'sandip',
     year : 1994
 }
 sandip.calculateAge = john.calculateAge;
 sandip.calculateAge();
