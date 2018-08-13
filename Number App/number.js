var abc = document.querySelector('#user');
var display = document.querySelector('#display');
abc.addEventListener('keyup',start);
function start() {
     var str =abc.value;
     var output = '';
     var array = ['zero','one','two','three','four','five','six','seven','eight','nine'];
     for(var i =0; i<str.length; i++)
     {
         output += array[str[i]] + ' ';
     }
     display.textContent = output;
}
