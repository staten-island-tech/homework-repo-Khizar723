var firstName = 'Khizar';
var age = 17;
//ternary operator
age >= 21 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

//with ternary operator
var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

//without ternary operator (if else statements)
/* 
if (age >= 21) {
        var drink ='beer' ;      
}  else {
    var drink = 'juice';
}
console.log(drink);
 */
 //huge if else statement with multiple clauses

var job = 'engineer';
switch (job){
    case 'engineer':
        console.log(firstName + ' solves machine problems');
        break;
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'designer' :
        console.log(firstName + ' designs cool stuff');
        break;
    default:
        console.log(firstName +' does something else');
}

age = 17;
switch (true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30 :
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName +' is a man');
}































