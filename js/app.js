// function findByTagName(tagName){
//   var elements = document.getElementsByTagName(tagName);
//
//   for(var i = 0; i < elements.length; i++){
//     console.log(elements[i].textContent);
//   }
// }
//
// var findByTagName2 = function(tagName){
//   var elements = document.getElementsByTagName(tagName);
//
//   for(var i = 0; i < elements.length; i++){
//     console.log(elements[i].textContent);
//   }
// }
//
// findByTagName('p');
// findByTagName('span');
// findByTagName('a');
//
// findByTagName2('p');
//
//

// cuadr



// function areaCuadrado(ladoA, ladoB)
// {
//   result = multiplica(ladoA, ladoB);
//   return multiplica(result, result);
// }
//
// console.log(areaCuadrado(4,4));

//area del triangulo (base*altura) / 2

// function multiplica(a,b){
//   return a * b;
// }
//
// function divide(resultado)
// {
//   return  resultado/2;
// }
//
// function areaTriangulo(base, altura)
// {
//   var mult = multiplica(base,altura);
//   var area = divide(base,altura,mult);
//   return area;
//
// }
//
//
// var area1 = areaTriangulo(422, 7);
// var area2 = areaTriangulo(10, 20);
//
// console.log('El area es:' + area1);
// console.log('El area es:' + area2);
//
//
//Object as argumens

// var rancio = {};
//
// rancio.name = 'Petardillas';
// rancio.last_name = 'Maximus Meridias';
// rancio.description = 'Esposa de un esposo petardo, madre de un petardillo';
//
// function getName(){
//   return rancio.name + " " + rancio.last_name;
// }
//
// function getDescription(){
//   return rancio.description;
// }
//
// function setName(name){
//   rancio.name = name;
// }
//
// function setLastName(lastName){
//   rancio.last_name = lastName;
// }
//
// function setDescription(description){
//   rancio.description = description;
// }
//
// function printObject(obj)
// {
//   if(typeof(obj) === 'object'){
//     // {name: 'ajax', last_name: 'maximus'}
//     // prop = 'name'
//     // prop = 'last_name'
//     for(prop in obj){
//       //obj['name']
//       console.log(obj[prop]);
//     }
//   }
// }
//

// var myContext = {
//   name: 'Alex',
//   edad: 23,
//   saluda: function() {
//     return this.name;
//   },
//   setName: function(name){
//     this.name = name;
//   },
//
//   setEdad: function(edad){
//     this.edad = edad;
//   }
// }

// var Calculator = {
//   result: null,
//
//   sum: function(a, b){
//     this.result = a + b;
//   },
//
//   getSum: function(){
//     return this.result;
//   }
// //Add mult, div
// }

// Calculator.sum(1, 2); //ejecuta la operacion
// Calculator.getSum();//retorna el resultado


var Calculator = function(){
   this.result = null;
   this.version = "1.0";

   this.sum = function(a, b){
     this.result = a + b;
   }

   this.getSum = function(){
     return this.result;
   }
}
//
//
//
// Calculator.prototype.getSum = function(){
//   return "La suma es: "+ this.result;
// }
// var c = new Calculator;

