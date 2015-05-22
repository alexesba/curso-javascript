//Example 1 de javascript



 /* a;lskdalksd asdasd asdasd asdasd
 a;lskdalksd asdasd asdasd asdasd
 a;lskdalksd asdasd asdasd asdasd
 a;lskdalksd asdasd asdasd asdasd
 */

//Non primitive data (objets and arrays)
var miVariable = [1,2,3];//Array
var miObjeto = { name: 'Bety', apellido: 'Rodriguez' }; //Object

//primitive data(string, number, boolean), where Number could be a (Integer, float)
var myNumber = 42;
var myString = "holakease";
var myBoolean = false;
var myArray = [myNumber, myString, myBoolean];

console.log('variable myArray=', myArray);


//Expressions and statements
//
var is_true = false;
if(is_true == false){
  console.log('soy verdadero');
}

var size = myArray.length;
console.log('tamaño del array = ', size);
var j = 0;
console.log('while');
while(j < size){
  console.log('posicion = ', j, 'valor  =', myArray[j]);
  j++;
}

j = 0;
console.log('do..while');
do{
  console.log('posicion = ', j, 'valor  =', myArray[j]);
  j++;

} while(j < size)


console.log('for');
for(var i = 0; i < myArray.length; i++)
{
  console.log('posicion = ', i, 'valor  =', myArray[i]);
}
