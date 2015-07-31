//Example 1 de javascript



 /* a;lskdalksd asdasd asdasd asdasd
 a;lskdalksd asdasd asdasd asdasd
 a;lskdalksd asdasd asdasd asdasd
 a;lskdalksd asdasd asdasd asdasd
 */

//Non primitive data (objets and arrays)
// var miVariable = [1,2,3];//Array
// var miObjeto = { name: 'Bety', apellido: 'Rodriguez' }; //Object
//
// //primitive data(string, number, boolean), where Number could be a (Integer, float)
// var myNumber = 42;
// var myString = "holakease";
// var myBoolean = false;
// var myArray = [myNumber, myString, myBoolean];
//
// console.log('variable myArray=', myArray);
//
//
// //Expressions and statements
// //
// var is_true = false;
// if(is_true == false){
//   console.log('soy verdadero');
// }
//
// var size = myArray.length;
// console.log('tamaño del array = ', size);
// var j = 0;
//
// console.log('while');
// while(j < size){
//   console.log('posicion = ', j, 'valor  =', myArray[j]);
//   j++;
// }
//
// j = 0;
// console.log('do..while');
// do{
//   console.log('posicion = ', j, 'valor  =', myArray[j]);
//   j++;
//
// } while(j < size)
//
//
// console.log('for');
// for(var i = 0; i < myArray.length; i++)
// {
//   var data_type = typeof( myArray[i] )
//
//   if( data_type == 'string') {
//     console.log(myArray[i], 'es un '+ data_type);
//   }else{
//     console.log(myArray[i], 'no es un string', 'es un '+ data_type);
//   }
// }


var miVariable2 = null;
var user = { name: 'Alex', lastName: 'Espinoza', birthDate: new Date() };
var user2 = { name: 'Petardis', birthDate: null };

miFecha = new Date;
var usuariosCollection  = [user, user2];
for(var i = 0; i < usuariosCollection.length; i ++ ){
  var currentUser = usuariosCollection[i];
  try{
    console.log('La Fecha de nac del usuario:', currentUser.name, 'es: ', currentUser.birthDate.getFullYear());
  }catch(exception){
    console.log('La fecha de nac del usuario: ', currentUser.name, ' no ha sido asignada');
  }finally{
    console.log('Despues de la llamada al metodo toArray()');
  }
}


var miTipo = typeof(miVariable2);


console.log('Usando if');
if( miTipo == 'string') {

  console.log(' si es un string');

}else if(miTipo == 'number'){

  console.log('si es un número');

}else{

  console.log('es un '+ miTipo);
}


console.log('Usando switch/case');
switch(miTipo){
  case 'string' :
    console.log('es string');
  break;
  case 'number' :
    console.log('es un número');
  break;
  default:
    console.log('es un ' + miTipo );
  break;
}

var numbers = [1, 2, 3, 4, 5];

for(var i = 0; i < 4; i++){
  console.log('current position: ', i);
  if(numbers[i] == 2 ){
    console.log('si', numbers[i]);
    break;
  }

}



for(var i = 0; i< 10; i ++ ){
  var suma  = i;
  var j = i;
  while(j--){
    suma+=j;
  }
  console.log(suma);
}



//LOGICAL OPERATORS
// NOT !
// AND &&
