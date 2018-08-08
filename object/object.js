 var xyz = {
    name : 'gyanba',
     sirname : 'kadam',
     address :{
        city: 'yavatmal',
         code : 445206
     }

 };
console.log(xyz.name);
console.log(xyz.sirname);
xyz.address.state = 'maharashtra';
console.log(xyz.address.state);
xyz.name = 'vivek';
console.log(xyz.address);

// delete property
 delete xyz.address;
 console.log(xyz);

 // object coding challenge