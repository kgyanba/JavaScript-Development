// function creation
function abc() {
    console.log("good morning");
}
abc();//calling function

// parameter

function xyz(name) {
    console.log("good morning :" +name);
}
xyz("gyanba");

// function expression

var whatDoYouDo = function (job,firstname) {
    switch(job)
    {
        case 'teacher':
            return firstname + ' teaches kids how to code';
        case 'driver':
            return firstname + ' drives the cab';
        case 'designer':
            return firstname + ' design a beautiful website';
        default:
            return firstname + ' does something else';
    }
}
console.log(whatDoYouDo('teacher','john'));
console.log(whatDoYouDo('designer','gyanba'));
console.log(whatDoYouDo('developer','sandip'));