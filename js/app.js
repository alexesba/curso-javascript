// Crear la instancia de Caculator.js
Calculator.prototype.mult = function(num1, num2){
  this.result = num1 * num2;
}

Calculator.prototype.rest = function(num1, num2){
  this.result = num1 - num2;
}

Calculator.prototype.getResult = function(){
  return this.result
}

Calculator.prototype.calculate = function(element){
  var parent = element.parentElement;
  var numero1 = parent.querySelector('input[name="numero1"]').value;
  var numero2 = parent.querySelector('input[name="numero2"]').value;
  var result = parent.querySelector('input[name="result"]');
  switch(element.value){
    case '-':
      this.rest(Number(numero1), Number(numero2));
    break;
    case '+':
      this.sum(Number(numero1), Number(numero2));
    break
    case '*':
      this.mult(Number(numero1), Number(numero2));
    break;
  }
  result.value = this.getResult();
}
var calc = new Calculator;
