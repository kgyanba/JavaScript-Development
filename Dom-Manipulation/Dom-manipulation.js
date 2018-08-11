var abc = document.querySelector('#display');
abc.textContent = 'good Morning';
abc.style.textAlign = 'center';
abc.style.color = 'darkgreen';

var xyz = document.querySelector('h2');
xyz.style.color = 'white';
xyz.style.margin = '0px';

var button = document.querySelector('#submit');
button.style.backgroundColor = 'green';
button.style.borderColor = 'red';

var user = document.querySelector('#user');
user.style.borderColor = 'forestgreen';

function getuser() {
    var usertext = user.value;
    var usererror = document.querySelector('#user-error');
    if(usertext === 'gyanba')
    {
        user.style.backgroundColor = 'red';
        usererror.textContent = 'succesfully';
        usererror.style.color = 'green';
    }
    else {
        user.style.backgroundColor = 'blue';
        usererror.textContent = 'invalid user name';
        usererror.style.color = 'yellow';
    }
}
// click event

var submit = document.querySelector('#submit');
submit.addEventListener('click',getuserdata);
function getuserdata() {
    var usertext = user.value;
    var usererror = document.querySelector('#user-error');
    if(usertext === 'gyanba')
    {
        user.style.backgroundColor = 'red';
        usererror.textContent = 'succesfully';
        usererror.style.color = 'green';
    }
    else {
        user.style.backgroundColor = 'blue';
        usererror.textContent = 'invalid user name';
        usererror.style.color = 'yellow';
    }
}

// key up event

 user= document.querySelector('#user');
 user.addEventListener('keyup',validate);
function validate() {
    var usertext = user.value;
    var usererror = document.querySelector('#user-error');
    if(usertext === 'gyanba')
    {
        user.style.backgroundcolor = 'red';
        usererror.style.color = 'blue';
        usererror.textContent = 'succesfully';
    }
    else
    {
        user.style.backgroundcolor = 'green';
        usererror.textContent = 'invalid user name';
        usererror.style.color = 'yellow';
    }
}