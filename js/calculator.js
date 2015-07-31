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
